import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    {
      role: "bot",
      text: "Здравствуйте! Я консультант Фрамир Самара. Помогу подобрать двери, рассчитать стоимость или записать на замер. Чем могу помочь?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickReplies = [
    "Подобрать двери",
    "Узнать стоимость",
    "Записаться на замер",
    "Условия для дизайнеров",
  ];

  const handleSend = (text?: string) => {
    const message = text || input.trim();
    if (!message) return;

    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setInput("");

    setTimeout(() => {
      let reply = "Спасибо за обращение! Наш менеджер свяжется с вами в ближайшее время. Также вы можете позвонить: 8 (846) 242-96-36";

      if (message.includes("стоимость") || message.includes("цен")) {
        reply =
          "Стоимость зависит от коллекции, облицовки и комплектации. Отправьте размеры проёмов и пожелания — подготовим расчёт в течение часа.";
      } else if (message.includes("замер")) {
        reply =
          "Бесплатный замер по Самаре! Укажите удобную дату и адрес — замерщик приедет с каталогом образцов.";
      } else if (message.includes("дизайн") || message.includes("архитект")) {
        reply =
          "Для дизайнеров и архитекторов: скидка до 15%, персональный менеджер, приоритетные сроки. Пришлите визуализации — подберём решения.";
      } else if (message.includes("двери") || message.includes("подобрать")) {
        reply =
          "С удовольствием! Расскажите о вашем проекте: стиль интерьера, количество дверей, предпочтения по материалам?";
      }

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 800);
  };

  return (
    <>
      {/* Chat bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105"
        aria-label="Онлайн консультант"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-reveal">
          {/* Header */}
          <div className="bg-primary text-primary-foreground px-5 py-4">
            <p className="font-heading text-lg">Фрамир Самара</p>
            <p className="text-xs text-primary-foreground/70">Онлайн-консультант</p>
          </div>

          {/* Messages */}
          <div className="flex-1 max-h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Напишите сообщение..."
              className="flex-1 bg-secondary rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
