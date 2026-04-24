import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, CheckCircle2, Shield, Wrench, 
  ThermometerSnowflake, Droplets, PenTool, Star, MapPin, 
  MessageCircle, Phone, Instagram, Facebook, Send,
  ArrowRight, Clock, User
} from 'lucide-react';

const PHONE = '5534999716592';
const WP_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent('Olá, equipe Clima Perfeito! Estava navegando no site e gostaria de conversar com um especialista sobre climatização.')}`;
const LOGO_URL = 'https://69d917505386887646d2db3b.imgix.net/WhatsApp%20Image%202026-04-15%20at%2012.20.44.jpeg';

function FadeIn({ children, delay = 0, className = "" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SignatureLine = () => (
  <div className="absolute top-0 left-0 w-full h-[3px] bg-accent z-50 shadow-[0_0_15px_rgba(0,210,211,0.5)]" />
);

const NoiseTexture = () => (
  <div 
    className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none mix-blend-multiply" 
    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
  />
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-accent selection:text-primary scroll-smooth relative">
      <SignatureLine />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <Footer />

      {/* Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
        {/* Floating Call Button */}
        <a 
          href="tel:+5534999716592" 
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-accent to-[#0057B7] text-white rounded-full shadow-[0_15px_30px_rgba(0,185,222,0.3)] hover:shadow-[0_20px_40px_rgba(0,185,222,0.5)] hover:-translate-y-1 transition-all duration-300 pointer-events-auto border border-white/20 backdrop-blur-sm group"
          aria-label="Ligar Agora"
        >
          <Phone size={24} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </a>

        {/* Floating WhatsApp Button */}
        <a 
          href={WP_LINK} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:opacity-0 hover:before:opacity-100 border border-white/20 backdrop-blur-sm pointer-events-auto group relative"
          aria-label="Falar no WhatsApp"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
          <MessageCircle size={32} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-primary/5 py-0 shadow-sm' : 'bg-white/50 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
            <div className="w-10 h-10 rounded overflow-hidden shadow-sm">
               <img src={LOGO_URL} alt="Clima Perfeito" className="w-full h-full object-cover" />
            </div>
            <span className={`font-display font-medium text-xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>Clima Perfeito</span>
            <div className={`hidden lg:flex items-center gap-2 px-3 py-1 ml-4 border rounded-full text-[10px] font-mono uppercase tracking-widest transition-colors ${scrolled ? 'bg-background border-primary/5 text-primary/70' : 'bg-white/10 border-white/20 text-white/80 backdrop-blur-md'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00D2D3]" />
              Sistemas Online
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/#servicos" className={`text-sm font-medium transition-colors ${scrolled ? 'text-primary/80 hover:text-secondary' : 'text-white/80 hover:text-white'}`}>Serviços</Link>
            <Link to="/#sobre" className={`text-sm font-medium transition-colors ${scrolled ? 'text-primary/80 hover:text-secondary' : 'text-white/80 hover:text-white'}`}>Sobre</Link>
            <Link to="/#atendimento" className={`text-sm font-medium transition-colors ${scrolled ? 'text-primary/80 hover:text-secondary' : 'text-white/80 hover:text-white'}`}>Área</Link>
            <Link to="/faq" className={`text-sm font-medium transition-colors ${scrolled ? 'text-primary/80 hover:text-secondary' : 'text-white/80 hover:text-white'}`}>Dúvidas Frequentes</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:+5534999716592" 
              className={`inline-flex items-center justify-center h-10 px-5 rounded-full font-bold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-sm ${scrolled ? 'bg-white text-primary border border-primary/10 hover:border-accent hover:bg-accent/5' : 'bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20'}`}
            >
              <Phone size={16} className={`mr-2 ${scrolled ? 'text-accent' : 'text-white'}`} /> Ligar
            </a>
            <a 
              href={WP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className={`inline-flex items-center justify-center h-10 px-6 rounded-full font-medium text-sm hover:-translate-y-0.5 transition-all duration-300 ${scrolled ? 'bg-primary text-white hover:bg-secondary hover:shadow-lg' : 'bg-white text-[#030914] font-bold hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]'}`}
            >
              Orçamento
            </a>
          </div>

          <button className={`md:hidden p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-primary/5 px-6 overflow-hidden rounded-b-2xl shadow-xl absolute w-full left-0 top-full"
            >
              <div className="flex flex-col gap-4 py-6">
                <Link to="/#servicos" onClick={handleLinkClick} className="text-base font-bold text-primary">Serviços</Link>
                <Link to="/#sobre" onClick={handleLinkClick} className="text-base font-bold text-primary">Sobre</Link>
                <Link to="/#atendimento" onClick={handleLinkClick} className="text-base font-bold text-primary">Área</Link>
                <Link to="/faq" onClick={handleLinkClick} className="text-base font-bold text-primary">Dúvidas Frequentes</Link>
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-primary/10">
                  <a href="tel:+5534999716592" className="inline-flex items-center justify-center h-12 rounded-xl bg-background border border-primary/10 text-primary font-bold w-full hover:border-accent">
                    <Phone size={20} className="mr-2 text-accent" /> Ligar Agora
                  </a>
                  <a href={WP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 rounded-xl bg-primary text-white font-medium w-full">
                    <MessageCircle size={20} className="mr-2 text-accent" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
}

function Footer() {
  return (
      <footer className="bg-primary text-white pt-24 pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center overflow-hidden">
                    <img src={LOGO_URL} alt="Clima Perfeito Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-display font-medium text-xl">Clima Perfeito</span>
              </div>
              <p className="text-white/60 mb-6 font-light">A temperatura ideal com precisão técnica e eficiência impecável. Sem improvisos.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Links Rápidos</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link to="/#servicos" className="hover:text-accent transition-colors">Serviços Técnicos</Link></li>
                <li><Link to="/#sobre" className="hover:text-accent transition-colors">Nossa Engenharia</Link></li>
                <li><Link to="/#atendimento" className="hover:text-accent transition-colors">Área de Cobertura</Link></li>
                <li><Link to="/faq" className="hover:text-accent transition-colors">Dúvidas Frequentes</Link></li>
                <li><Link to="/#contato" className="hover:text-accent transition-colors">Fale Conosco</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Serviços Específicos</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link to="/#servicos" className="hover:text-accent transition-colors">Instalação Residencial</Link></li>
                <li><Link to="/#servicos" className="hover:text-accent transition-colors">Manutenção Preventiva</Link></li>
                <li><Link to="/#servicos" className="hover:text-accent transition-colors">Higienização</Link></li>
                <li><Link to="/#servicos" className="hover:text-accent transition-colors">Reparo Técnico</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Informações Legais</h4>
              <ul className="space-y-4 text-white/60">
                <li><span className="hover:text-accent transition-colors cursor-pointer">Política de Privacidade</span></li>
                <li>CNPJ: 00.000.000/0001-00</li>
                <li>Uberlândia - MG</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Clima Perfeito. Todos os direitos reservados.</p>
            <p>Desenvolvido com excelência.</p>
          </div>
        </div>
      </footer>
  );
}

function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: 'Instalação Essencial',
    mensagem: ''
  });

  const isFormValid = formData.nome.trim().length > 1 && formData.telefone.trim().length > 8;

  let generatedText = `Olá, equipe Clima Perfeito! Vim pelo site. ❄️\n\n`;
  if (formData.nome) generatedText += `Meu nome é *${formData.nome.trim()}*.\n`;
  generatedText += `Tenho interesse no serviço de: *${formData.servico}*.\n`;
  if (formData.mensagem) generatedText += `\n*Detalhes do ambiente/problema:* \n${formData.mensagem.trim()}`;
  
  const generatedUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(generatedText)}`;

  const services = [
    { icon: Wrench, title: "Instalação", desc: "Projetos residenciais e comerciais com layout impecável e precisão geométrica." },
    { icon: Shield, title: "Manutenção Preventiva", desc: "Antecipe o desgaste sistêmico e evite paradas repentinas dos equipamentos." },
    { icon: Droplets, title: "Limpeza e Higienização", desc: "Ar puro e contínuo, livre de ácaros, fungos e bactérias prejudiciais." },
    { icon: ThermometerSnowflake, title: "Carga de Gás", desc: "Ajuste milimétrico para o rendimento térmico máximo do seu ambiente." },
    { icon: PenTool, title: "Conserto Avançado", desc: "Diagnóstico técnico aprofundado para placas eletrônicas e compressores." }
  ];

  return (
    <>
      {/* ULTRA-CINEMATIC HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[85vh] lg:min-h-[95vh] flex items-center bg-[#020610] text-white">
        
        {/* Cinematic Background Image with Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Multiply overly for heavy contrast and darkness */}
          <div className="absolute inset-0 bg-[#020610]/70 mix-blend-multiply z-10" />
          
          {/* Cold glowing ambient lights drifting */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[600px] bg-accent/30 blur-[150px] rounded-full mix-blend-screen z-10 animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[500px] bg-[#0057B7]/40 blur-[150px] rounded-full mix-blend-screen z-10 animate-[pulse_10s_ease-in-out_infinite_reverse]" />

          {/* Vignette & Fade to next section */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020610_100%)] opacity-80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-[#020610]/80 z-10" />
          
          {/* Subtle tech grid over the image */}
          <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          {/* Heavily blurred cinematic AC / Ventilation image */}
          <img 
             src="https://images.unsplash.com/photo-1527018263595-5ae869094771?q=80&w=2600&auto=format&fit=crop" 
             alt="Cinematic AC Unit" 
             className="w-full h-full object-cover opacity-20 blur-[10px] animate-slow-zoom scale-110"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center">
          
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 block backdrop-blur-md border border-white/20 shadow-2xl rounded-full text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white mb-8 relative hover:bg-white/10 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping absolute left-5 opacity-75" />
              <span className="w-2 h-2 rounded-full bg-accent ml-[2px] shadow-[0_0_12px_#00D2D3]" />
              <span className="ml-2 text-white/90">Especialistas em Climatização Premium</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.05] tracking-tighter text-white mb-6 max-w-[1000px] drop-shadow-2xl">
              O Clima Perfeito. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D2D3] to-white relative inline-block mt-2 sm:mt-4 pb-2 sm:pb-4 animate-gradient-x opacity-90 drop-shadow-[0_0_40px_rgba(0,210,211,0.4)]">
                Em suas mãos.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2} className="w-full">
            <p className="font-sans text-lg md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light mt-4 sm:mt-6 mb-12 drop-shadow-md">
              Elevamos o padrão do conforto térmico em Uberlândia e região. Instalação, manutenção e climatização no absoluto <strong className="font-semibold text-white">silêncio.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 w-full px-4">
            <a href="tel:+5534999716592" className="inline-flex items-center justify-center h-16 rounded-full bg-white text-[#030914] font-bold text-lg px-8 hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.15)] group">
              Ligar Agora <Phone size={22} className="ml-3 group-hover:rotate-12 transition-transform" />
            </a>
            <a href={WP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 h-16 px-8 rounded-full bg-white/10 text-white border border-white/20 font-bold text-lg hover:border-accent hover:bg-white/20 transition-all duration-300 w-full sm:w-auto backdrop-blur-md overflow-hidden relative group">
               <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
               <MessageCircle size={22} className="text-white" /> Falar no WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>

      {/* INFINITE MARQUEE - BRAND AUTHORITY */}
      <section className="w-full py-10 border-y border-primary/5 bg-background relative overflow-hidden flex items-center">
        {/* Gradient fades for seamless loop visually */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-24 w-max px-8"
        >
          {/* Duplicando listagem de marcas para o loop infinito visualmente fluido... */}
          {[...Array(2)].fill(['DAIKIN', 'FUJITSU', 'SAMSUNG', 'LG', 'MIDEA', 'GREE', 'CARRIER', 'TRANE']).flat().map((brand, i) => (
            <span key={i} className="font-display font-medium text-2xl lg:text-4xl tracking-[0.15em] text-primary/10 uppercase flex items-center gap-16 md:gap-24">
              {brand}
              {/* Separador minimalista */}
              <span className="w-2 h-2 rounded-full bg-accent/30"></span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 bg-primary text-white relative border-y border-white/5">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">01 // Expertise Técnica</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl leading-tight">
                  Performance máxima para o seu equipamento.
                </h2>
              </div>
              <p className="font-mono text-xs text-white/40 uppercase max-w-[200px] text-right hidden lg:block">
                Protocolos Rígidos <br/>Normas ABNT Aplicadas
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((svc, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden h-full flex flex-col backdrop-blur-sm hover:border-accent/40">
                  {/* Hover cyan line */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent transition-all duration-700 ease-out group-hover:w-full z-10" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/5 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shrink-0">
                      <svc.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-lg leading-tight text-white">{svc.title}</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed text-sm">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="sobre" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Por que nos escolher</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">Nossa Engenharia de Valor</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
            <FadeIn className="md:col-span-2 bg-white p-10 rounded-2xl border border-primary/5 flex flex-col justify-end group hover:shadow-[0_20px_40px_-15px_rgba(10,25,47,0.1)] transition-all">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">Atendimento Rápido</h3>
              <p className="text-text/70 max-w-md">Resposta imediata e execução ágil sem perda da qualidade técnica exigida.</p>
            </FadeIn>
            
            <FadeIn delay={0.1} className="bg-primary text-white p-10 rounded-2xl flex flex-col justify-end group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />
              <h3 className="font-display text-2xl font-bold mb-2">Equipe Certificada</h3>
              <p className="text-white/70">Técnicos homologados pelas maiores marcas.</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="bg-secondary text-white p-10 rounded-2xl flex flex-col justify-end shadow-[0_20px_40px_-15px_rgba(0,87,183,0.4)]">
              <h3 className="font-display text-2xl font-bold mb-2">NF Garantida</h3>
              <p className="text-white/70">Segurança legal e transparência total em 100% dos nossos serviços prestados.</p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="md:col-span-2 bg-white p-10 rounded-2xl border border-primary/5 flex flex-col justify-end shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(10,25,47,0.1)] transition-all">
              <h3 className="font-display text-2xl font-bold text-primary mb-2">Garantia no Serviço</h3>
              <p className="text-text/70 max-w-md">Feito uma vez, feito para durar. Você coberto tecnicamente em todos os reparos.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GALERIA / NOSSOS TRABALHOS */}
      <section className="py-24 bg-background overflow-hidden border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Galeria</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">Nossos Trabalhos</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, src: "https://69d917505386887646d2db3b.imgix.net/Capturar99.PNG", alt: "Finalização de Projeto" },
              { id: 2, src: "https://69d917505386887646d2db3b.imgix.net/3-3-1024x1024.png", alt: "Limpeza Profunda" },
              { id: 3, src: "https://69d917505386887646d2db3b.imgix.net/s-k-enterprises-noida-sector-63-delhi-ac-repair-and-services-oqauxej16h.webp", alt: "Manutenção Preventiva" },
              { id: 4, src: "https://69d917505386887646d2db3b.imgix.net/shutterstock_325390658.jpg", alt: "Diagnóstico Técnico" }
            ].map((img, i) => (
              <FadeIn key={img.id} delay={i * 0.1}>
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-primary/5 group shadow-sm bg-white">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-display font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-primary text-white relative">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Avaliações Verificadas</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl">O que nossos clientes dizem</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nome: "João Pedro Alves", local: "Uberlândia - MG", texto: "Atendimento impecável! O técnico chegou no horário exato, trabalhou em silêncio e deixou o ambiente completamente limpo após a instalação. Recomendo de olhos fechados." },
              { nome: "Maria Clara Souza", local: "Araguari - MG", texto: "Fiquei impressionada com a velocidade. Ontem o ar parou, entrei em contato, e hoje cedo a manutenção já estava finalizada com transparência e preço justo." },
              { nome: "Roberto Freitas", local: "Uberlândia - MG", texto: "Profissionalismo raro no mercado. A limpeza e higienização resolveu o problema de gotejamento que eu tinha há meses. Excelente serviço." }
            ].map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                  <div className="flex text-accent mb-6">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" /> )}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-8 italic">"{review.texto}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex flex-col items-center justify-center shrink-0 text-white/50">
                      <User size={20} />
                    </div>
                    <div>
                      <strong className="block font-display text-lg">{review.nome}</strong>
                      <span className="text-sm text-white/50">{review.local}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREA DE ATENDIMENTO */}
      <section id="atendimento" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-background rounded-[2rem] p-8 md:p-16 border border-primary/5 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <FadeIn className="flex-1 w-full">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary mb-8">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">Área de Cobertura</h2>
              <p className="font-sans text-lg text-text/70 mb-8 max-w-md">
                Atuamos em <strong className="text-primary font-bold">Uberlândia, Araguari e região</strong>, oferecendo deslocamento ágil para garantir a climatização quando você mais precisa.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-primary/10 rounded-full font-medium text-primary shadow-sm">
                <CheckCircle2 size={20} className="text-accent" /> Serviço Local Prioritário
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex-1 w-full relative">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(10,25,47,0.15)] border border-primary/10 bg-white p-4">
                   {/* Abstract Map UI representation */}
                   <div className="w-full h-full bg-background rounded-xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0057B710_1px,transparent_1px),linear-gradient(to_bottom,#0057B710_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                         <div className="w-24 h-24 bg-accent/20 rounded-full animate-ping absolute" />
                         <div className="w-12 h-12 bg-accent/40 rounded-full absolute" />
                         <MapPin size={36} className="text-secondary relative z-10 drop-shadow-md" fill="#F4F7F9" />
                         <span className="font-display font-bold text-primary mt-2 relative z-10 bg-white/80 px-3 py-1 rounded backdrop-blur-sm border border-primary/10">Triângulo Mineiro</span>
                      </div>
                   </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[90px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Fale com os Especialistas</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-8">
                Pronto para o conforto absoluto?
              </h2>
              <p className="text-lg text-text/70 mb-12">Preencha o formulário e nossa equipe técnica entrará em contato em menos de 15 minutos úteis para entender o seu cenário.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 text-secondary border border-primary/5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong className="block font-display text-xl text-primary mb-1">WhatsApp & Plantão</strong>
                    <a href={WP_LINK} target="_blank" rel="noreferrer" className="text-text/70 hover:text-secondary transition-colors">(34) 99971-6592</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 text-secondary border border-primary/5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong className="block font-display text-xl text-primary mb-1">Localização Base</strong>
                    <span className="text-text/70">Uberlândia - MG</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0 text-secondary border border-primary/5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong className="block font-display text-xl text-primary mb-1">Horário de Operação</strong>
                    <span className="text-text/70">Seg a Sex: 08h às 18h<br/>Sáb: 08h às 12h (Plantão 24h via contrato)</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-background rounded-3xl p-8 md:p-12 border border-primary/5 shadow-xl shadow-primary/5">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-semibold text-primary">Seu Nome</label>
                      <input 
                        id="nome"
                        type="text" 
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        placeholder="Nome Completo" 
                        className="w-full h-14 bg-white border border-primary/10 rounded-xl px-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all font-sans" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="text-sm font-semibold text-primary">Telefone / WhatsApp</label>
                      <input 
                        id="telefone"
                        type="tel" 
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                        placeholder="(00) 00000-0000" 
                        className="w-full h-14 bg-white border border-primary/10 rounded-xl px-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all font-sans" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="servico" className="text-sm font-semibold text-primary">Serviço Desejado</label>
                    <select 
                      id="servico"
                      value={formData.servico}
                      onChange={(e) => setFormData({...formData, servico: e.target.value})}
                      className="w-full h-14 bg-white border border-primary/10 rounded-xl px-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all appearance-none font-sans"
                    >
                      <option>Instalação Essencial</option>
                      <option>Manutenção Preventiva</option>
                      <option>Limpeza e Higienização</option>
                      <option>Reparo Técnico / Conserto</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-semibold text-primary">Detalhes sobre o problema ou ambiente</label>
                    <textarea 
                      id="mensagem"
                      rows={4} 
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      placeholder="Ex: Sala comercial de 40m², o ar parou de gelar após queda de energia..." 
                      className="w-full bg-white border border-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none font-sans"
                    ></textarea>
                  </div>

                  {isFormValid ? (
                    <a 
                      href={generatedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full h-14 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all hover:scale-[1.02] active:scale-95 group"
                    >
                      Solicitar Orçamento no WhatsApp
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <div 
                      className="w-full h-14 bg-primary/40 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed transition-all opacity-80"
                    >
                      Preencha Nome e Telefone
                      <Send size={18} className="opacity-50" />
                    </div>
                  )}
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: "Quais serviços a Clima Perfeito oferece?", a: "Oferecemos instalação residencial e comercial, manutenção preventiva para evitar desgaste, limpeza e higienização antibacteriana, carga de gás para máximo rendimento térmico e conserto avançado de placas e compressores." },
    { q: "Em quais cidades vocês atendem?", a: "Temos foco prioritário de deslocamento e atendimento nas cidades de Uberlândia, Araguari e em toda a região próxima garantindo agilidade técnica." },
    { q: "A empresa possui registro e Responsabilidade Técnica?", a: "Sim, o engenheiro responsável possui cadastro e filiação no Conselho Regional dos Técnicos Industriais (CRT) e Conselho Federal dos Técnicos Industriais (CFT). Assinamos laudos e assumimos a Responsabilidade Técnica (RT), inclusive para projetos em hospitais, clínicas e empresas." },
    { q: "Vocês trabalham com contratos para empresas?", a: "Sim, trabalhamos com contratos de prestação de serviços voltados para clientes corporativos e empresas, garantindo segurança jurídica, manutenções regulares e PMOC." },
    { q: "A empresa oferece garantias e emite Nota Fiscal?", a: "Sim, todos os nossos serviços são executados com segurança legal. Nós emitimos nota fiscal para a proteção do cliente e oferecemos garantia no serviço prestado." },
    { q: "Como solicito um orçamento rápido?", a: "A melhor forma é clicando no botão para o nosso WhatsApp (34) 99971-6592 informando o que você precisa." },
  ];

  return (
    <div className="pt-32 pb-24 min-h-[70vh] bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Central de Ajuda</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">Dúvidas Frequentes</h1>
            <p className="text-text/70 text-lg max-w-xl mx-auto">
              Reunimos as respostas para as principais dúvidas sobre nossos serviços em Uberlândia, Araguari e região.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div 
                className={`bg-white border ${activeFaq === index ? 'border-accent shadow-md' : 'border-primary/10'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between font-display font-bold text-lg md:text-xl text-primary hover:text-secondary transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={24} className={`shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-accent' : 'text-primary/30'}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-text/70 leading-relaxed font-sans">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <p className="text-text/70 mb-6">Não encontrou o que procurava?</p>
          <a 
            href={WP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-secondary transition-colors"
          >
            Fale conosco no WhatsApp
          </a>
        </FadeIn>
          <p className="text-text/30 text-[10px] mt-12 text-center">*As avaliações e dados do site são de caráter ilustrativo.</p>
      </div>
    </div>
  );
}
