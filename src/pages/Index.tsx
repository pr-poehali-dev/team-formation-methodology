import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ['hero', 'stage1', 'stage2', 'stage3', 'stage4'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const belbin = [
    { name: 'Генератор идей', icon: 'Lightbulb', desc: 'Креативность и нестандартные решения' },
    { name: 'Исполнитель', icon: 'CheckCircle2', desc: 'Практичность и организация' },
    { name: 'Администратор', icon: 'ClipboardList', desc: 'Координация и планирование' },
    { name: 'Лидер', icon: 'Crown', desc: 'Мотивация и управление командой' }
  ];

  const mbtiTypes = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESFP', 'ENFP', 'ENTP',
    'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-slide-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">Методика формирования команды</h2>
            <div className="hidden md:flex gap-6">
              {['stage1', 'stage2', 'stage3', 'stage4'].map((section, idx) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Этап {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Методика формирования эффективной и комфортной команды
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Системный подход к созданию команд, которые работают эффективно и с удовольствием
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('stage1')}
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
          >
            Начать знакомство <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="stage1" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-start gap-8 animate-fade-in">
            <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">1</span>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Что такое команда?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Определение команды и её ключевых характеристик: общая цель, распределение ролей, 
                ответственность, устойчивость. Команда — это не просто группа людей, а синергия 
                навыков и личностей, направленная на достижение общего результата.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Icon name="Target" className="mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Общая цель</h3>
                  <p className="text-sm text-muted-foreground">Единое видение результата</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Icon name="Users" className="mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Распределение ролей</h3>
                  <p className="text-sm text-muted-foreground">Каждый на своём месте</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Icon name="Shield" className="mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Ответственность</h3>
                  <p className="text-sm text-muted-foreground">Взаимная поддержка</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Icon name="TrendingUp" className="mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Устойчивость</h3>
                  <p className="text-sm text-muted-foreground">Адаптация к изменениям</p>
                </Card>
              </div>
              <Button
                size="lg"
                onClick={() => scrollToSection('stage2')}
                className="rounded-full"
              >
                Перейти к ролям <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stage2" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-start gap-8 animate-fade-in">
            <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">2</span>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Ролевой состав (по Белбину)</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Четвёрка ключевых ролей: Генератор идей, Исполнитель, Администратор, Лидер. 
                Эффективная команда сочетает все эти роли для полноценной работы.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {belbin.map((role, idx) => (
                  <Card
                    key={idx}
                    className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-white to-secondary/20"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon name={role.icon as any} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{role.name}</h3>
                    <p className="text-muted-foreground">{role.desc}</p>
                  </Card>
                ))}
              </div>
              <Button
                size="lg"
                onClick={() => scrollToSection('stage3')}
                className="rounded-full"
              >
                Узнать про личности <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stage3" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-start gap-8 animate-fade-in">
            <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">3</span>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Типы личности (по MBTI)</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Как 16 типов личности влияют на взаимодействие в команде и комфорт совместной работы. 
                Понимание типов личности помогает создавать гармоничную атмосферу.
              </p>
              <div className="grid grid-cols-4 gap-3 mb-8">
                {mbtiTypes.map((type, idx) => (
                  <Card
                    key={idx}
                    className="p-4 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer bg-white"
                  >
                    <div className="text-lg font-bold text-primary">{type}</div>
                  </Card>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl mb-8">
                <p className="text-sm text-muted-foreground">
                  💡 Каждый тип личности приносит уникальные сильные стороны в команду. 
                  Гармоничное сочетание разных типов создаёт сбалансированную и эффективную рабочую среду.
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => scrollToSection('stage4')}
                className="rounded-full"
              >
                Сформировать команду <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stage4" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-start gap-8 animate-fade-in">
            <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">4</span>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Формирование команды</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Путь: понимание команды → распределение ролей → учёт личностей → подбор для 
                эффективности и комфорта. Системный подход к построению идеальной команды.
              </p>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl mb-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="Users" className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium">Команда</p>
                  </div>
                  <Icon name="ArrowRight" className="text-primary" size={24} />
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="UserCog" className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium">Роли</p>
                  </div>
                  <Icon name="ArrowRight" className="text-primary" size={24} />
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="Brain" className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium">Личности</p>
                  </div>
                  <Icon name="ArrowRight" className="text-primary" size={24} />
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="Sparkles" className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-medium">Результат</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="rounded-full w-full md:w-auto"
              >
                Начать сейчас <Icon name="Rocket" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-white/80 mb-2">Это учебный проект</p>
            <p className="text-white/60 text-sm">
              Демонстрация методики формирования эффективной команды
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/60 text-sm">
            © 2025 Методика формирования эффективной команды
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center z-40"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;