import OpenAI from "openai";

interface RawInsight {
  type?: string;
  title?: string;
  message?: string;
  action?: string;
  confidence?: number;
}

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    "X-Title": "ExpenseTracker AI",
  },
});

export interface ExpenseRecord {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export interface AIInsight {
  id: string;
  type: "warning" | "info" | "success" | "tip";
  title: string;
  message: string;
  action?: string;
  confidence: number;
}

export async function generateExpenseInsights(expenses: ExpenseRecord[]): Promise<AIInsight[]> {
  // Format number to "250K" etc
  function formatToK(amount: number): string {
    const rounded = Math.round(amount / 1000);
    return `${rounded}K`;
  }

  try {
    // Ringkas data yang dikirim ke AI
    const expensesSummary = expenses.map((expense) => ({
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
      date: expense.date,
    }));

    const prompt = `
You are a financial advisor AI. Analyze the following expense data and return exactly 3–4 JSON-formatted insights, as a JSON array.
DO NOT include explanations, do NOT wrap in markdown, just return the pure JSON array.

Each object in the array must follow this format:
{
  "type": "warning|info|success|tip",
  "title": "Brief title",
  "message": "Detailed insight message with specific numbers when possible (in K, no currency symbol like '$' or 'USD', format numbers like '250K')",
  "action": "Actionable suggestion",
  "confidence": 0.8
}

Expense Data:
${JSON.stringify(expensesSummary, null, 2)}
`;

    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct:free",
      messages: [
        {
          role: "system",
          content: "You are a financial advisor AI that analyzes spending patterns and provides JSON-formatted insights. Return JSON only.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    // --- Parsing response ---
    let response = completion.choices[0].message.content?.trim();
    if (!response) throw new Error("No response from AI");

    // Remove markdown if ada
    response = response
      .replace(/^```json\s*/, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .replace(/^Here are your insights:\s*/i, "")
      .trim();

    // Parse to JSON
    const insights = JSON.parse(response);
    if (!Array.isArray(insights)) {
      console.error("⚠️ AI response is not array:", insights);
      throw new Error("AI response is not a valid array");
    }

    // Format message (replace number format)
    const formattedInsights = insights.map((insight: RawInsight, index: number) => ({
      id: `ai-${Date.now()}-${index}`,
      type: ["warning", "info", "success", "tip"].includes(insight.type || "") ? (insight.type as "warning" | "info" | "success" | "tip") : "info",

      title: insight.title || "AI Insight",
      message:
        insight.message?.replace(/\$\s?(\d{1,3}(?:,\d{3})*|\d+)/g, (match, numStr) => {
          const number = parseInt(numStr.replace(/,/g, ""), 10);
          return formatToK(number);
        }) || "Analysis complete",
      action: insight.action?.replace(/\$\s?(\d{1,3}(?:,\d{3})*|\d+)/g, (match, numStr) => {
        const number = parseInt(numStr.replace(/,/g, ""), 10);
        return formatToK(number);
      }),
      confidence: insight.confidence || 0.8,
    }));

    return formattedInsights;
  } catch (error) {
    console.error("❌ Error generating AI insights:", error);

    // Fallback jika AI error
    return [
      {
        id: "fallback-1",
        type: "info",
        title: "AI Analysis Unavailable",
        message: "Unable to generate personalized insights at this time. Please try again later.",
        action: "Refresh insights",
        confidence: 0.5,
      },
    ];
  }
}

export async function categorizeExpense(description: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct:free",
      messages: [
        {
          role: "system",
          content: "You are an expense categorization AI. Categorize expenses into one of these categories: Food, Transportation, Entertainment, Shopping, Bills, Healthcare, Other. Respond with only the category name.",
        },
        {
          role: "user",
          content: `Categorize this expense: "${description}"`,
        },
      ],
      temperature: 0.1,
      max_tokens: 20,
    });

    const category = completion.choices[0].message.content?.trim();

    const validCategories = ["Food", "Transportation", "Entertainment", "Shopping", "Bills", "Healthcare", "Other"];

    const finalCategory = validCategories.includes(category || "") ? category! : "Other";
    return finalCategory;
  } catch (error) {
    console.error("❌ Error categorizing expense:", error);
    return "Other";
  }
}

export async function generateAIAnswer(question: string, context: ExpenseRecord[]): Promise<string> {
  try {
    const expensesSummary = context.map((expense) => ({
      amount: expense.amount,
      category: expense.category,
      description: expense.description,
      date: expense.date,
    }));

    const prompt = `Based on the following expense data, provide a detailed and actionable answer to this question: "${question}"

    Expense Data:
    ${JSON.stringify(expensesSummary, null, 0)} K

    Provide a comprehensive answer that:
    1. Addresses the specific question directly
    2. Uses concrete data from the expenses when possible
    3. Offers actionable advice
    4. Keeps the response concise but informative (2-3 sentences)
    
    Return only the answer text, no additional formatting.`;

    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct:free",
      messages: [
        {
          role: "system",
          content: "You are a helpful financial advisor AI that provides specific, actionable answers based on expense data. Be concise but thorough.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    const response = completion.choices[0].message.content;
    if (!response) {
      throw new Error("No response from AI");
    }

    return response.trim();
  } catch (error) {
    console.error("❌ Error generating AI answer:", error);
    return "I'm unable to provide a detailed answer at the moment. Please try refreshing the insights or check your connection.";
  }
}
