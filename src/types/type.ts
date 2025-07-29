export interface Record {
  date: string | number | Date;
  id: string;
  text: string;
  amount: number;
  category: string;
  userId: string;
  createdAt: Date;
}

export interface InsightData {
  id: string;
  type: "warning" | "info" | "success" | "tip";
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

export interface AIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}
