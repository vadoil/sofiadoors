import { useState, useEffect } from "react";
import { X, ChevronRight, Home, Building2, DoorOpen, Paintbrush, Shield, Volume2, Send } from "lucide-react";

const STEPS = [
  {
    question: "Какой у вас тип помещения?",
    options: [
      { label: "Квартира", icon: Building2, value: "apartment" },
      { label: "Частный дом", icon: Home, value: "house" },
      { label: "Офис / коммерция", icon: DoorOpen, value: "commercial" },
    ],
  },
  {
    question: "Сколько дверей вам нужно?",
    options: [
      { label: "1–3 двери", value: "1-3" },
      { label: "4–7 дверей", value: "4-7" },
      { label: "8 и более", value: "8+" },
    ],
  },
  {
    question: "Какая задача стоит?",
    options: [
      { label: "Новостройка / ремонт", icon: Paintbrush, value: "renovation" },
      { label: "Замена старых дверей", icon: DoorOpen, value: "replace" },
      { label: "Шумоизоляция", icon: Volume2, value: "acoustic" },
      { label: "Противопожарные", icon: Shield, value: "fireproof" },
    ],
  },
  {
    question: "Какой стиль интерьера?",
    options: [
      { label: "Современный / минимализм", value: "modern" },
      { label: "Классика / неоклассика", value: "classic" },
      { label: "Лофт / индустриальный", value: "loft" },
      { label: "Не определился", value: "undecided" },
    ],
  },
];

const PROMO_MESSAGES = [
  "🔥 Скидка 60% на двери в кортексе!",
  "🎁 При заказе от 5 дверей — замер бесплатно",
  "⚡ Элегант со скидкой 40% до 13 апреля",
  "💎 Стеклянные перегородки –30%",
];

const QuizWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [promoIndex, setPromoIndex] = useState(0);
  const [showPromo, setShowPromo] = useState(false);

  // Side promo notifications
  useEffect(() => {
    if (!isOpen) return;
    const showNext = () => {
      setPromoIndex((prev) => (prev + 1) % PROMO_MESSAGES.length);
      setShowPromo(true);
      setTimeout(() => setShowPromo(false), 4000);
    };
    const id = setInterval(showNext, 7000);
    // Show first one after a delay
    const firstTimeout = setTimeout(showNext, 2000);
    return () => {
      clearInterval(id);
      clearTimeout(firstTimeout);
    };
  }, [isOpen]);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [step]: value });
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const task = answers[2];
    if (task === "acoustic") return "Коллекция «Акустика» — полотно 60 мм, шумоизоляция до 42 дБ";
    if (task === "fireproof") return "Противопожарные двери Фрамир EI-30 / EI-60";
    const style = answers[3];
    if (style === "classic") return "Коллекции «Элегант» и «Метаморфоза» — классика в современном исполнении";
    if (style === "loft") return "Коллекция «Скрытые двери» и «1000 линий» — минимализм и брутальность";
    return "Коллекции «Фокус» и «Оригинал» — универсальная элегантность для любого интерьера";
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
    setName("");
    setPhone("");
  };

  return (
    <>
      {/* Floating quiz button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-accent text-accent-foreground px-5 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-sm flex items-center gap-2 animate-fade-up"
        >
          <DoorOpen className="w-5 h-5" />
          Подобрать дверь
        </button>
      )}

      {/* Quiz panel */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg mx-4 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="bg-accent text-accent-foreground px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-xl font-semibold">Какая дверь вам подойдёт?</h3>
                {!showResult && (
                  <p className="text-accent-foreground/70 text-xs mt-0.5">
                    Шаг {step + 1} из {STEPS.length}
                  </p>
                )}
              </div>
              <button onClick={() => { setIsOpen(false); reset(); }} className="hover:bg-accent-foreground/10 rounded-full p-1 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress bar */}
            {!showResult && (
              <div className="h-1 bg-accent/20">
                <div
                  className="h-full bg-accent transition-all duration-500 ease-out"
                  style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {!showResult ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">{STEPS[step].question}</h4>
                  <div className="grid gap-3">
                    {STEPS[step].options.map((opt) => {
                      const Icon = (opt as any).icon;
                      const isSelected = answers[step] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(opt.value)}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-md group ${
                            isSelected ? "border-accent bg-accent/10" : "border-border"
                          }`}
                        >
                          {Icon && <Icon className="w-5 h-5 text-accent shrink-0" />}
                          <span className="flex-1 font-medium text-sm">{opt.label}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    })}
                  </div>
                  {step > 0 && (
                    <button onClick={() => setStep(step - 1)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      ← Назад
                    </button>
                  )}
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                    <p className="text-sm font-medium text-accent mb-1">Наша рекомендация:</p>
                    <p className="text-base font-heading font-semibold">{getRecommendation()}</p>
                  </div>

                  <p className="text-sm text-muted-foreground">Оставьте контакты — мы подготовим персональное предложение со скидкой:</p>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                    <button className="w-full bg-accent text-accent-foreground py-3 rounded-xl font-semibold text-sm hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Получить предложение
                    </button>
                  </div>

                  <button onClick={reset} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Пройти заново
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Side promo notifications */}
          <div
            className={`fixed top-1/3 right-4 max-w-xs z-[61] transition-all duration-500 ${
              showPromo ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="bg-foreground text-background text-sm px-4 py-3 rounded-xl shadow-xl border border-accent/30">
              {PROMO_MESSAGES[promoIndex]}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizWidget;
