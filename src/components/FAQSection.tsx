import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqItems = [
  {
    q: "Как выбрать коллекцию под интерьер?",
    a: "Пришлите визуализации или фото интерьера — мы подберём коллекции Sofia, которые подходят по стилю, цвету и пропорциям. Также можем предложить решения по покрытиям и фурнитуре.",
  },
  {
    q: "Чем отличаются покрытия?",
    a: "Sofia предлагает эмаль, шпон натуральный, экошпон, покрытия под покраску и стекло. Каждое покрытие отличается по текстуре, износостойкости и цене. Поможем выбрать оптимальный вариант.",
  },
  {
    q: "Можно ли подобрать дверь под дизайн-проект?",
    a: "Да, мы работаем с дизайнерами и архитекторами. Присылайте чертежи, визуализации или мудборды — подберём модели, покрытия и комплектацию под проект.",
  },
  {
    q: "Есть ли скрытые двери?",
    a: "Да. Коллекция скрытых дверей Sofia включает скрытый короб 35 мм и 60 мм, а также скрытый пенал. Двери монтируются заподлицо со стеной и красятся в цвет стены.",
  },
  {
    q: "Как рассчитывается стоимость?",
    a: "Стоимость зависит от коллекции, покрытия, размера проёма и комплектации. Оставьте заявку — подготовим расчёт бесплатно и без обязательств.",
  },
  {
    q: "Можно ли заказать консультацию до замера?",
    a: "Конечно. Мы проводим предварительные консультации по телефону, в мессенджерах или в шоуруме. Поможем определиться с направлением до замера.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div ref={ref} className="max-w-3xl mx-auto">
        <p className={`text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          Частые вопросы
        </p>
        <h2
          className={`text-3xl md:text-5xl tracking-tight mb-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Ответы на важные вопросы
        </h2>

        <Accordion type="single" collapsible className={`opacity-0 ${isVisible ? "animate-fade-up" : ""}`} style={{ animationDelay: "0.2s" }}>
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base md:text-lg py-5 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
