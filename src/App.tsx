import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, CheckCircle2, Shield, Wrench, 
  ThermometerSnowflake, Droplets, PenTool, Star, MapPin, 
  MessageCircle, Phone, Instagram, Facebook, Send,
  ArrowRight, Clock
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form states para conversão avançada via WhatsApp
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: 'Instalação Essencial',
    mensagem: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, servico, mensagem } = formData;
    
    // Constrói uma mensagem formatada profissionalmente
    let text = `Olá, equipe Clima Perfeito! Vim pelo site. ❄️\n\n`;
    if (nome) text += `Meu nome é *${nome.trim()}*.\n`;
    text += `Tenho interesse no serviço de: *${servico}*.\n`;
    if (mensagem) text += `\n*Detalhes do ambiente/problema:* \n${mensagem.trim()}`;
    
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    { icon: Wrench, title: "Instalação", desc: "Projetos residenciais e comerciais com layout impecável e precisão geométrica." },
    { icon: Shield, title: "Manutenção Preventiva", desc: "Antecipe o desgaste sistêmico e evite paradas repentinas dos equipamentos." },
    { icon: Droplets, title: "Limpeza e Higienização", desc: "Ar puro e contínuo, livre de ácaros, fungos e bactérias prejudiciais." },
    { icon: ThermometerSnowflake, title: "Carga de Gás", desc: "Ajuste milimétrico para o rendimento térmico máximo do seu ambiente." },
    { icon: PenTool, title: "Conserto Avançado", desc: "Diagnóstico técnico aprofundado para placas eletrônicas e compressores." },
    { icon: CheckCircle2, title: "Contrato Empresarial", desc: "Gestão técnica contínua focada em durabilidade para empresas e clínicas." }
  ];

  const faqs = [
    { q: "Vocês atendem urgências?", a: "Sim, possuímos equipe especializada pronta para resolver interrupções críticas que não podem esperar, garantindo o retorno rápido do seu conforto." },
    { q: "Emitem nota fiscal?", a: "Absolutamente. Todos os nossos serviços acompanham Nota Fiscal Eletrônica e relatório técnico detalhado da intervenção." },
    { q: "Qual a garantia do serviço?", a: "Oferecemos garantia documentada de 1 ano para instalações novas e prazos rigorosos para reparos técnicos específicos." },
    { q: "Atendem condomínios comerciais?", a: "Sim, somos especialistas em sistemas VRF/Multi-split e emitimos as ARTs e TRTs exigidas pela administração do condomínio." },
    { q: "Com quais marcas trabalham?", a: "Somos capacitados nas marcas de elite do mercado tecnológico atual, englobando Daikin, Fujitsu, LG, Samsung, Midea e Carrier." },
    { q: "Quanto tempo leva a instalação?", a: "Uma instalação padrão residencial é concluída em cerca de 2 a 3 horas, garantindo o máximo de limpeza e preservação do ambiente local." }
  ];

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-accent selection:text-primary scroll-smooth relative">
      {/* Global Film Grain Overlay - Pentagram/Awwwards touch */}
      <div className="pointer-events-none fixed inset-0 z-[999] h-full w-full opacity-[0.035] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <SignatureLine />

      {/* Floating CTA */}
      <a 
        href={WP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:opacity-0 hover:before:opacity-100 border border-white/20 backdrop-blur-sm group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
        <MessageCircle size={32} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* HEADER */}
      <header className="fixed top-[3px] left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-primary/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded overflow-hidden">
               <img src={LOGO_URL} alt="Clima Perfeito" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-medium text-xl tracking-tight text-primary">Clima Perfeito</span>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 ml-4 bg-background border border-primary/5 rounded-full text-[10px] font-mono uppercase tracking-widest text-primary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Sistemas Online
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium hover:text-secondary transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium hover:text-secondary transition-colors">Sobre</a>
            <a href="#atendimento" className="text-sm font-medium hover:text-secondary transition-colors">Área de atendimento</a>
            <a href="#contato" className="text-sm font-medium hover:text-secondary transition-colors">Contato</a>
          </nav>

          <a 
            href={WP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-white font-medium text-sm hover:bg-secondary hover:shadow-lg transition-all duration-300"
          >
            Solicitar orçamento
          </a>

          <button className="md:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-primary/5 px-6 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-6">
                <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">Serviços</a>
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">Sobre</a>
                <a href="#atendimento" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">Área de atendimento</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-base font-medium">Contato</a>
                <a href={WP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 rounded-lg bg-primary text-white font-medium w-full mt-2">
                  WhatsApp Agora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <NoiseTexture />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00D2D310_1px,transparent_1px),linear-gradient(to_bottom,#00D2D310_1px,transparent_1px)] bg-[size:4rem_4rem] mix-blend-multiply opacity-[0.4]" />
        
        {/* Ambient Glows - Editorial Tech touch */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-secondary/20 shadow-sm rounded-full text-[11px] font-semibold tracking-wider uppercase text-secondary mb-6 relative hover:border-accent transition-colors duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping absolute left-3 opacity-75" />
                <span className="w-1.5 h-1.5 rounded-full bg-accent ml-[2px]" />
                <span className="ml-1">Alto Padrão em Climatização</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <span className="flex items-center gap-3 text-primary/70 font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
                <span className="w-10 h-[2px] bg-accent"></span>
                Engenharia Térmica
              </span>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.98] tracking-tighter text-primary mb-6 max-w-[800px]">
                Controle o clima. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-[#0057B7] relative inline-block mt-2">
                  Domine o ambiente.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="font-sans text-lg md:text-xl text-text/80 max-w-lg leading-relaxed font-light mb-10">
                Esqueça o calor e os problemas recorrentes.<br/>
                Entregamos a temperatura exata, no silêncio absoluto.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-white font-medium text-base hover:bg-secondary hover:shadow-[0_15px_30px_rgba(0,87,183,0.3)] transition-all duration-300">
                WhatsApp agora <ArrowRight size={18} />
              </a>
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-primary border border-primary/20 font-medium text-base hover:border-primary hover:bg-background transition-all duration-300">
                Ver serviços
              </a>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-primary/10 text-sm font-medium text-primary/70">
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> 10 Anos de Experiência</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> +2000 Atendimentos</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Garantia de 1 Ano</span>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-[45%] lg:w-1/2">
            <FadeIn delay={0.2} className="relative group">
              <div className="absolute top-6 left-6 w-full h-full border border-primary/10 rounded-2xl bg-secondary/5 -z-10 transition-all duration-700 ease-out group-hover:top-8 group-hover:left-8" />
              <div className="bg-white border border-primary/10 rounded-2xl p-2 shadow-[0_30px_60px_-15px_rgba(10,25,47,0.15)] relative overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[3/4] xl:aspect-[4/5] flex flex-col">
                <div className="w-full h-full bg-[#E2E8F0] rounded-xl flex items-center justify-center border-2 border-dashed border-[#CBD5E1] text-[#64748B] font-medium text-center p-6">
                  Foto do técnico trabalhando
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-primary/10 rounded-xl p-4 flex items-center justify-between shadow-xl">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-text/50 font-bold mb-1">Diagnóstico</span>
                    <strong className="block text-primary font-display">Precisão Milimétrica</strong>
                  </div>
                  <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-accent">
                    <ThermometerSnowflake size={20} />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
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
                  
                  <div className="w-full h-32 bg-[#0A192F] border border-dashed border-white/20 rounded-xl mb-6 flex items-center justify-center text-white/30 font-mono text-xs text-center px-4 relative overflow-hidden group-hover:border-accent/30 transition-colors">
                    <span className="absolute top-2 left-2 text-[8px] opacity-50">CAM_0{i + 1}</span>
                    &lt; Visualização: {svc.title.toLowerCase()} /&gt;
                  </div>

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

          <FadeIn delay={0.4}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[80px]" />
              <div className="relative z-10">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Deseja um projeto de alta complexidade?</h3>
                <p className="text-white/60">Sistemas VRF, Dutos Inverter e climatização de grandes áreas comerciais.</p>
              </div>
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="relative z-10 shrink-0 inline-flex items-center justify-center h-14 px-8 rounded-full bg-accent text-primary font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,210,211,0.3)]">
                Falar com Engenharia
              </a>
            </div>
          </FadeIn>
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

      {/* GALERIA (ANTES E DEPOIS) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary mb-3 block">Nosso Trabalho</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">Resultados na prática.</h2>
            </div>
          </FadeIn>
          
          <div className="flex gap-6 w-full overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll">
            {[
              { id: 1, text: "Antes", desc: "Instalação Residencial de Alto Padrão - Sala de Estar" },
              { id: 2, text: "Depois", desc: "Instalação Residencial de Alto Padrão - Sala de Estar" },
              { id: 3, text: "Antes", desc: "Manutenção Preventiva - Escritório Corporativo" },
              { id: 4, text: "Depois", desc: "Manutenção Preventiva - Escritório Corporativo" }
            ].map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1} className="shrink-0 w-[85vw] sm:w-[500px] snap-center">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-white p-2 border border-primary/10 group">
                  <div className="w-full h-full bg-[#E2E8F0] rounded-xl border-2 border-dashed border-[#CBD5E1] flex flex-col items-center justify-center text-[#64748B] transition-transform duration-700 group-hover:scale-[1.02]">
                    <span className="font-display font-bold text-2xl mb-2">{item.text}</span>
                    <span className="text-sm px-6 text-center">{item.desc}</span>
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
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                  <div className="flex text-accent mb-6">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" /> )}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-8 italic">"Atendimento impecável! O técnico chegou no horário exato, trabalhou em silêncio e deixou o ambiente completamente limpo após a instalação. Recomendo de olhos fechados."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex flex-col items-center justify-center shrink-0 text-[10px] text-white/50 font-medium leading-tight text-center">
                      <span>Foto<br/>Cliente</span>
                    </div>
                    <div>
                      <strong className="block font-display text-lg">Cliente {i}</strong>
                      <span className="text-sm text-white/50">Via Google Reviews</span>
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
                Atuamos em toda a região de <strong className="text-primary font-bold">Uberlândia</strong>, oferecendo deslocamento ágil para garantir a climatização quando você mais precisa.
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
                         <span className="font-display font-bold text-primary mt-2 relative z-10 bg-white/80 px-3 py-1 rounded backdrop-blur-sm border border-primary/10">Uberlândia-MG</span>
                      </div>
                   </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background border-t border-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">Perguntas Frequentes</h2>
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
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
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
                <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
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
                      <option>Contratos para Empresas</option>
                      <option>Projeto de Alta Complexidade (VRF/Dutos)</option>
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

                  <button 
                    type="submit"
                    className="w-full h-14 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all hover:scale-[1.02] active:scale-95 group"
                  >
                    Solicitar Orçamento no WhatsApp
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços Técnicos</a></li>
                <li><a href="#sobre" className="hover:text-accent transition-colors">Nossa Engenharia</a></li>
                <li><a href="#atendimento" className="hover:text-accent transition-colors">Área de Cobertura</a></li>
                <li><a href="#contato" className="hover:text-accent transition-colors">Fale Conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Serviços Específicos</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-accent transition-colors">Instalação Residencial</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Manutenção Preventiva</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Manutenção Corretiva</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contrato Empresarial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Informações Legais</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
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
    </div>
  );
}
