import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center max-h-screen mt-28 mb-20">
      <SignUp />
    </div>
  );
}
