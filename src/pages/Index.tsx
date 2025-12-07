import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  const lights = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i / 29) * 100}%`,
    delay: Math.random() * 2
  }));

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement;
    if (audio) {
      if (musicPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <audio id="bgMusic" loop>
        <source src="https://cdn.pixabay.com/download/audio/2021/11/23/audio_5fa19bef4d.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={toggleMusic}
        className="fixed top-20 right-6 z-50 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center hover:bg-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.5)]"
        title={musicPlaying ? 'Остановить музыку' : 'Включить музыку'}
      >
        <Icon name={musicPlaying ? 'Volume2' : 'VolumeX'} size={20} className="text-primary" />
      </button>

      <div className="fixed top-0 left-0 w-full h-4 z-40 flex justify-between px-4">
        {lights.map((light) => (
          <div
            key={light.id}
            className="w-3 h-3 rounded-full animate-color-shift shadow-[0_0_10px_currentColor]"
            style={{
              animationDelay: `${light.delay}s`
            }}
          />
        ))}
      </div>

      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-primary/60 animate-snowfall pointer-events-none z-50"
          style={{
            left: flake.left,
            fontSize: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`
          }}
        >
          ❄
        </div>
      ))}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent bg-200 animate-gradient-shift">SERGEEVICH</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'О мне', 'Портфолио', 'Услуги', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
          
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-lg animate-spin-slow shadow-[0_0_30px_rgba(14,165,233,0.3)]" style={{ transform: 'rotate(45deg)' }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 border-2 border-secondary/30 rounded-full animate-float shadow-[0_0_40px_rgba(139,92,246,0.3)]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-accent/30 rotate-12 animate-float shadow-[0_0_25px_rgba(217,70,239,0.3)]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-36 h-36 border-2 border-primary/20 rounded-lg animate-spin-slow shadow-[0_0_35px_rgba(14,165,233,0.2)]" style={{ animationDelay: '0.5s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-secondary/40 rounded-full animate-float shadow-[0_0_20px_rgba(139,92,246,0.4)]" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 border-2 border-accent/25 rotate-45 animate-spin-slow shadow-[0_0_30px_rgba(217,70,239,0.25)]" style={{ animationDelay: '3s' }}></div>
          
          <div className="absolute top-10 left-0 w-48 h-24 bg-primary/10 rounded-full blur-3xl animate-cloud-move" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-32 left-0 w-64 h-32 bg-secondary/10 rounded-full blur-3xl animate-cloud-move" style={{ animationDelay: '5s' }}></div>
          <div className="absolute top-56 left-0 w-56 h-28 bg-accent/10 rounded-full blur-3xl animate-cloud-move" style={{ animationDelay: '10s' }}></div>
        </div>
        
        <div className="relative z-20 text-center px-6 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-primary via-secondary to-accent animate-ice-shimmer" style={{ WebkitTextStroke: '2px rgba(100, 220, 255, 0.3)' }}>
            SERGEEVICH
          </h2>
          <p className="text-xl md:text-3xl mb-8 text-primary/90 font-light tracking-wide flex items-center justify-center gap-2">
            ❄️ 3D Моделлер & Визуализация ❄️
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('портфолио')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:shadow-[0_0_30px_rgba(14,165,233,0.8)] transition-all duration-300"
            >
              Смотреть работы
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('контакты')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300"
            >
              Связаться
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-float">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="о-мне" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Обо мне
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Профессиональный 3D моделлер с опытом работы более 5 лет. Специализируюсь на создании
                высокодетализированных моделей для игровой индустрии, архитектурной визуализации и рекламы.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Работаю с современными инструментами: Blender, 3ds Max, ZBrush, Substance Painter.
                Создаю реалистичные и стилизованные модели, готовые к рендерингу и интеграции в игровые движки.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Blender', '3ds Max', 'ZBrush', 'Substance', 'Unreal Engine', 'Unity'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-card border border-primary/30 rounded-lg text-sm hover:border-primary hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <Icon name="Box" size={120} className="text-primary opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Sci-Fi Character', category: 'Персонажи', icon: 'User' },
              { title: 'Cyberpunk Vehicle', category: 'Транспорт', icon: 'Car' },
              { title: 'Abstract Sculpture', category: 'Абстракт', icon: 'Shapes' },
              { title: 'Urban Environment', category: 'Окружение', icon: 'Building' },
              { title: 'Weapon Design', category: 'Оружие', icon: 'Sword' },
              { title: 'Robot Concept', category: 'Роботы', icon: 'Bot' }
            ].map((item, idx) => (
              <Card 
                key={idx}
                className="group overflow-hidden border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name={item.icon as any} size={80} className="text-primary/30 group-hover:text-primary/50 transition-colors duration-300 group-hover:scale-110 transform transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Box',
                title: '3D Моделирование',
                description: 'Создание высокодетализированных 3D моделей для любых целей',
                price: 'от 5000₽'
              },
              {
                icon: 'Palette',
                title: 'Текстурирование',
                description: 'Профессиональная текстурирование и материалы в Substance Painter',
                price: 'от 3000₽'
              },
              {
                icon: 'Sparkles',
                title: 'Рендеринг',
                description: 'Фотореалистичные и стилизованные рендеры высокого качества',
                price: 'от 4000₽'
              }
            ].map((service, idx) => (
              <Card 
                key={idx}
                className="p-8 border-primary/20 hover:border-secondary transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] text-center group animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={40} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">sergeevich3d@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Telegram</h3>
                  <p className="text-muted-foreground">@sergeevich3d</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Instagram" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Instagram</h3>
                  <p className="text-muted-foreground">@sergeevich_3d</p>
                </div>
              </div>
            </div>

            <Card className="p-8 border-primary/20 animate-fade-in">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background border-primary/30 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background border-primary/30 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} className="bg-background border-primary/30 focus:border-primary" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 SERGEEVICH. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-6">
            {['Instagram', 'Send', 'Linkedin'].map((social) => (
              <button key={social} className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300">
                <Icon name={social as any} size={20} className="text-foreground" />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}