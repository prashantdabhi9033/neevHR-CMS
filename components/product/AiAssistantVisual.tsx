import { AiChatDemo } from "@/components/home/AiChatDemo";

// The AI assistant page's picture: the same played-out chat as the home page, on the brand canvas.
export function AiAssistantVisual() {
  return (
    <div className="rounded-3xl bg-[linear-gradient(120deg,#15147b_0%,#15147b_70%,#0c0b4a_100%)] p-5 sm:p-8">
      <AiChatDemo className="mx-auto max-w-[480px]" />
    </div>
  );
}
