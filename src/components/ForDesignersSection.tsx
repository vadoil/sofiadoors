import architectCollab from "@/assets/architect-collab.jpg";
import designerMaterials from "@/assets/designer-materials.jpg";

const ForDesignersSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 animate-reveal">
          Для архитекторов и дизайнеров
        </p>
        <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.15] mb-16 animate-reveal animate-reveal-delay-1">
          Мы не продаём двери.
          <br />
          <span className="text-muted-foreground">
            Мы помогаем встроить их в&nbsp;архитектуру пространства.
          </span>
        </h2>

        {/* Checkerboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 animate-reveal animate-reveal-delay-2">
          {/* Row 1 */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={architectCollab}
              alt="Архитектор работает над проектом"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
          <div className="bg-foreground text-background flex items-center p-10 md:p-16">
            <div>
              <h3 className="text-2xl md:text-3xl tracking-tight mb-4">
                Подбор по проекту
              </h3>
              <p className="text-background/70 leading-relaxed">
                Присылайте визуализации — подберём коллекции, отделки и фурнитуру под стилистику вашего проекта. 
                Работаем с чертежами, 3D-моделями и мудбордами.
              </p>
            </div>
          </div>

          {/* Row 2 — reversed */}
          <div className="bg-primary text-primary-foreground flex items-center p-10 md:p-16 order-4 md:order-none">
            <div>
              <h3 className="text-2xl md:text-3xl tracking-tight mb-4">
                Техническое сопровождение
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Чертежи, замеры, интеграция со стенами и нишами — берём на себя. 
                Полное техническое сопровождение от концепции до монтажа.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden order-3 md:order-none">
            <img
              src={designerMaterials}
              alt="Дизайнер подбирает материалы"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>

          {/* Row 3 */}
          <div className="aspect-[4/3] overflow-hidden bg-secondary flex items-center justify-center order-5">
            <div className="p-10 md:p-16 text-center">
              <span className="text-6xl md:text-8xl font-heading text-primary font-light">—15%</span>
              <p className="text-muted-foreground mt-4 text-lg">для студий и бюро</p>
            </div>
          </div>
          <div className="bg-muted flex items-center p-10 md:p-16 order-6">
            <div>
              <h3 className="text-2xl md:text-3xl tracking-tight mb-4">
                Партнёрские условия
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Специальные цены, приоритет в поставках, персональный менеджер. 
                Выделенная линия для архитектурных бюро и дизайн-студий Самары.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDesignersSection;
