import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── PALETTE (tirée des vidéos) ───────────────────────────────
   Hero vidéo  → avg rgb(117,97,82)  : ambre chaud, sable doré, cuivre
   Scroll vidéo → avg rgb(63,51,43)  : charbon brun profond, ambre foncé
   ─────────────────────────────────────────────────────────────── */
const C = {
  bg:         '#FAF7F3',
  bgAlt:      '#F3EBE1',
  bgDark:     '#2C1F17',
  text:       '#2C1F17',
  textMid:    '#7C5438',
  textLight:  '#9A6B4E',
  border:     '#E8D9CA',
  accent:     '#C2884A',
  accentDeep: '#A0522D',
  accentLight:'#FAF0E4',
  white:      '#FFFFFF',
};

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = ['Pourquoi Nous ?','Avantages','Comment ça marche','FAQ'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? `rgba(250,247,243,0.96)` : `rgba(250,247,243,0.75)`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled || menuOpen ? `1px solid ${C.border}` : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(44,31,23,0.07)' : 'none',
      }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: C.bgDark }}>a</div>
          <span className="font-sans font-semibold text-lg tracking-tight" style={{ color: C.text }}>autotasq</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(item => (
            <a key={item} href="#"
              className="font-sans text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: C.textMid }}>{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200"
            style={{ background: C.bgDark, color: C.white }}>
            Réserver un Appel
          </a>
          {/* Hamburger */}
          <button className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-lg"
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'transparent', border: `1px solid ${C.border}` }}
            aria-label="Menu">
            <span className="block w-5 h-0.5 mx-auto transition-all duration-200"
              style={{ background: C.text, transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
            <span className="block w-5 h-0.5 mx-auto transition-all duration-200"
              style={{ background: C.text, opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 mx-auto transition-all duration-200"
              style={{ background: C.text, transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-1"
          style={{ borderTop: `1px solid ${C.border}` }}>
          {navLinks.map(item => (
            <a key={item} href="#"
              onClick={() => setMenuOpen(false)}
              className="block font-sans text-sm font-medium py-3 transition-colors duration-200"
              style={{ color: C.textMid, borderBottom: `1px solid ${C.border}` }}>{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ─────────────────────────────────────────
   HERO — image gauche, texte droite
───────────────────────────────────────── */
const Hero = () => {
  const heroRef  = useRef(null);
  const imgRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', { y: 40, opacity: 0, stagger: 0.12, duration: 1, ease: 'power3.out', delay: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!imgRef.current) return;
    const st = gsap.to(imgRef.current, {
      y: 40, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
    });
    return () => st.scrollTrigger?.kill();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center pt-16"
      style={{ background: C.bg }}>
      <div className="w-full max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center py-10 md:py-16">

        {/* Image */}
        <div className="hero-anim relative rounded-2xl md:rounded-3xl overflow-hidden"
          style={{ aspectRatio: '16/10', boxShadow: '0 32px 80px rgba(44,31,23,0.22)' }}>
          <img
            ref={imgRef}
            src="/hero-image.jpg"
            alt="Dominez Google Maps avec Autotasq"
            className="w-full h-full object-cover"
            style={{ willChange: 'transform', transform: 'scale(1.05) translateY(0)' }}
          />
        </div>

        {/* Texte */}
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="hero-anim inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm self-start"
            style={{ background: C.white, border: `1px solid ${C.border}` }}>
            <span className="text-base">⭐</span>
            <span className="font-sans font-semibold text-xs uppercase tracking-widest" style={{ color: C.textMid }}>
              Le futur de la réputation
            </span>
          </div>

          <h1 className="hero-anim font-sans font-extrabold leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)', color: C.text }}>
            Votre Réputation<br />
            <span style={{
              background: `linear-gradient(135deg, ${C.accent} 0%, ${C.accentDeep} 100%)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Amplifiée.</span>
          </h1>

          <p className="hero-anim font-sans text-base md:text-lg leading-relaxed" style={{ color: C.textMid }}>
            Obtenez des avis Google 5 étoiles optimisés pour le SEO sans lever le petit doigt.
            Pendant que d'autres négligent leur réputation en ligne, construisez la vôtre
            stratégiquement avec notre système.
          </p>

          <div className="hero-anim flex items-center gap-3">
            <div className="flex -space-x-2">
              {[C.accent, '#B8726A', '#8B6A5C'].map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2" style={{ background: c, borderColor: C.white }} />
              ))}
            </div>
            <span className="font-sans text-sm" style={{ color: C.textMid }}>
              Rejoint par <strong style={{ color: C.text }}>plusieurs</strong> entreprises locales
            </span>
          </div>

          <div className="hero-anim flex flex-wrap gap-2 md:gap-3">
            {[
              { icon: '🛡️', label: 'Conforme RGPD' },
              { icon: '✅', label: 'API Google Certifiée' },
              { icon: '⭐', label: 'Satisfaction 4.9/5' },
            ].map(b => (
              <div key={b.label} className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-2 shadow-sm"
                style={{ background: C.white, border: `1px solid ${C.border}` }}>
                <span className="text-sm">{b.icon}</span>
                <span className="font-sans text-xs font-medium" style={{ color: C.textMid }}>{b.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-anim">
            <a href="#contact"
              className="inline-flex items-center gap-3 font-sans font-bold text-base px-7 md:px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: C.bgDark, color: C.white, boxShadow: `0 8px 32px rgba(44,31,23,0.25)` }}>
              Réserver Mon Appel Gratuit <span className="text-lg">→</span>
            </a>
            <p className="mt-3 font-sans text-xs" style={{ color: C.textLight }}>
              Aucune carte bancaire requise · Places limitées ce mois-ci
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   SCROLL ANIMATION
───────────────────────────────────────── */
const TOTAL_FRAMES = 73;

const ScrollAnimation = () => {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const frameRef   = useRef(0);
  const imagesRef  = useRef([]);
  const [loaded, setLoaded]   = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    let count = 0;
    const images = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = `/frames/frame_${String(i + 1).padStart(4, '0')}.jpeg`;
      img.onload = () => { count++; if (count === TOTAL_FRAMES) setLoaded(true); };
      return img;
    });
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = (i) => {
      const img = imagesRef.current[i];
      if (!img) return;
      if (isMobile) {
        const container = canvas.parentElement;
        if (!container) return;
        const cw = container.clientWidth;
        const ch = container.clientHeight;
        if (!cw || !ch) return;
        canvas.width  = cw;
        canvas.height = ch;
        const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
        const dw = img.naturalWidth  * scale;
        const dh = img.naturalHeight * scale;
        ctx.clearRect(0, 0, cw, ch);
        // Aligner par le haut pour éviter le crop du dessus
        ctx.drawImage(img, (cw - dw) / 2, 0, dw, dh);
      } else {
        canvas.width  = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    };

    draw(0);
    const st = ScrollTrigger.create({
      trigger: sectionRef.current, start: 'top top', end: 'bottom bottom', scrub: 1.2,
      onUpdate: self => {
        const idx = Math.min(TOTAL_FRAMES - 1, Math.floor(self.progress * (TOTAL_FRAMES - 1)));
        if (idx !== frameRef.current) { frameRef.current = idx; draw(idx); }
      },
    });
    return () => st.kill();
  }, [loaded, isMobile]);

  const panels = [
    { num: '01', title: 'Vos processus analysés.',  body: 'Nous cartographions chaque flux et identifions les opportunités de croissance sur Google Maps.' },
    { num: '02', title: 'Système IA activé.',        body: 'Notre algorithme génère des avis authentiques et optimisés SEO en pilote automatique, 24h/24.' },
    { num: '03', title: 'Résultats mesurables.',     body: 'Classement #1 sur Google Maps. ROI visible dès les 45 premiers jours, garanti.' },
  ];

  return (
    <section ref={sectionRef} className="relative"
      style={{ height: `${TOTAL_FRAMES * 55}px`, background: C.bgAlt }}>

      {/* Gradients haut/bas — petits sur mobile pour ne pas couvrir la vidéo */}
      <div className="absolute top-0 inset-x-0 z-10 pointer-events-none"
        style={{ height: isMobile ? '28px' : '96px', background: `linear-gradient(to bottom, ${C.bg}, transparent)` }} />
      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none"
        style={{ height: isMobile ? '28px' : '96px', background: `linear-gradient(to top, ${C.bg}, transparent)` }} />

      {/* Sticky container — layout adapté mobile/desktop via isMobile */}
      <div className="sticky top-0 h-screen overflow-hidden"
        style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center' }}>

        {/* Canvas container */}
        <div style={isMobile ? {
          position: 'relative', flexShrink: 0,
          width: '100%', height: '60%',
        } : {
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
        }}>
          <canvas ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', willChange: 'transform' }} />
        </div>

        {/* Gradient latéral (desktop seulement) */}
        {!isMobile && (
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
            style={{ background: `linear-gradient(to left, rgba(243,235,225,0.55) 0%, rgba(243,235,225,0.25) 60%, transparent 100%)` }} />
        )}

        {/* Panels */}
        <div style={isMobile ? {
          position: 'relative', flex: 1, zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0.75rem 1.25rem',
          background: 'rgba(243,235,225,0.95)',
        } : {
          position: 'relative', zIndex: 10,
          width: '100%', maxWidth: '72rem',
          margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        }}>
          <ScrollPanels panels={panels} sectionRef={sectionRef} mobile={isMobile} />
        </div>
      </div>
    </section>
  );
};

const ScrollPanels = ({ panels, sectionRef, mobile }) => {
  const panelRefs  = useRef([]);
  const lineRefs   = useRef([]);
  const activeRef  = useRef(-1);

  useEffect(() => {
    const triggers = panelRefs.current.map((el, i) => {
      if (!el) return null;
      const start = i / panels.length;
      const end   = (i + 1) / panels.length;

      // État initial caché
      gsap.set(el, { opacity: 0, y: 48, scale: 0.94, filter: 'blur(6px)' });
      if (lineRefs.current[i]) gsap.set(lineRefs.current[i], { scaleX: 0, transformOrigin: 'left' });

      return ScrollTrigger.create({
        trigger: sectionRef.current, start: 'top top', end: 'bottom bottom',
        onUpdate: self => {
          const visible = self.progress >= start && self.progress < end;
          const wasVisible = activeRef.current === i;

          if (visible && !wasVisible) {
            // Entrée percutante
            activeRef.current = i;
            gsap.killTweensOf(el);
            gsap.to(el, {
              opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
              duration: 0.55, ease: 'power3.out',
            });
            if (lineRefs.current[i]) {
              gsap.killTweensOf(lineRefs.current[i]);
              gsap.to(lineRefs.current[i], {
                scaleX: 1, duration: 0.55, ease: 'power2.out', delay: 0.1,
              });
            }
          } else if (!visible && wasVisible) {
            // Sortie vers le haut
            activeRef.current = -1;
            gsap.killTweensOf(el);
            gsap.to(el, {
              opacity: 0, y: -32, scale: 0.96, filter: 'blur(4px)',
              duration: 0.3, ease: 'power2.in',
            });
            if (lineRefs.current[i]) {
              gsap.killTweensOf(lineRefs.current[i]);
              gsap.to(lineRefs.current[i], { scaleX: 0, duration: 0.2, ease: 'power2.in' });
            }
          }
        },
      });
    });
    return () => triggers.forEach(t => t?.kill());
  }, []);

  return (
    <div style={{
      position: 'relative', width: '100%',
      maxWidth: mobile ? 'none' : '24rem',
      height: mobile ? '200px' : '260px',
    }}>
      {panels.map((panel, i) => (
        <div key={i} ref={el => (panelRefs.current[i] = el)}
          className="absolute inset-0"
          style={{
            padding: mobile ? '1.25rem 1.25rem 1rem' : '2rem',
            opacity: 0,
            ...(mobile ? {} : {
              background: 'rgba(250,247,243,0.30)',
              backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '1.5rem',
            }),
          }}>
          {/* Trait coloré animé */}
          <div ref={el => (lineRefs.current[i] = el)}
            style={{
              position: 'absolute', top: mobile ? '1.25rem' : '2rem',
              left: mobile ? '1.25rem' : '2rem',
              width: mobile ? '2.5rem' : '3rem',
              height: '3px',
              background: '#C0392B',
              borderRadius: '2px',
              transformOrigin: 'left',
              transform: 'scaleX(0)',
            }} />
          <span className="font-sans font-bold block"
            style={{
              fontSize: mobile ? '1.875rem' : '2.5rem',
              color: '#C0392B',
              marginTop: '1rem',
              marginBottom: '0.4rem',
              lineHeight: 1,
            }}>{panel.num}</span>
          <h3 className="font-sans font-bold leading-tight"
            style={{
              fontSize: mobile ? '1.15rem' : '1.3rem',
              color: '#111111',
              marginBottom: '0.5rem',
            }}>{panel.title}</h3>
          <p className="font-sans leading-relaxed"
            style={{ fontSize: mobile ? '0.85rem' : '0.9rem', color: '#333333' }}>{panel.body}</p>
        </div>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────
   PROBLEM
───────────────────────────────────────── */
const Problem = () => (
  <section id="problem" className="py-16 md:py-24" style={{ background: C.white }}>
    <div className="max-w-6xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div>
        <span className="inline-block font-sans font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
          style={{ background: C.accentLight, color: C.accentDeep }}>
          Pourquoi nous ?
        </span>
        <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-tight mb-5 md:mb-6" style={{ color: C.text }}>
          Le Potentiel Inexploité
        </h2>
        <p className="font-sans text-base md:text-lg leading-relaxed mb-5 md:mb-6" style={{ color: C.textMid }}>
          Chaque jour, des clients potentiels recherchent votre service sur Google Maps.
          Ils comparent votre entreprise avec celle de vos concurrents avant de faire leur choix.
        </p>
        <p className="font-sans text-base leading-relaxed mb-2 font-medium" style={{ color: C.text }}>
          Les entreprises avec <strong>4.8+ étoiles et des avis récents</strong> captent naturellement plus d'attention.
        </p>
        <p className="font-sans text-base font-semibold" style={{ color: C.accent }}>
          C'est une opportunité mesurable d'augmenter votre visibilité.
        </p>
        <div className="mt-8 md:mt-10 space-y-5">
          {[
            { icon: '📈', title: 'Opportunité de Croissance', body: "Google Maps privilégie les entreprises avec des avis récents et fréquents. Vous pouvez améliorer votre positionnement." },
            { icon: '👥', title: 'Facteur de Confiance',      body: "78% des consommateurs font autant confiance aux avis qu'aux recommandations personnelles." },
          ].map(item => (
            <div key={item.title} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: C.bgAlt, border: `1px solid ${C.border}` }}>{item.icon}</div>
              <div>
                <p className="font-sans font-semibold text-sm mb-1" style={{ color: C.text }}>{item.title}</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: C.textMid }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Concurrent Direct — gagnant */}
        <div className="rounded-2xl p-5"
          style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(44,31,23,0.07)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans font-bold text-sm" style={{ color: C.text }}>Concurrent Direct</span>
            <span style={{ color: C.accent }}>📍</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            {'★★★★★'.split('').map((s, i) => <span key={i} className="text-base" style={{ color: '#F59E0B' }}>{s}</span>)}
            <span className="font-sans text-xs ml-1" style={{ color: C.textLight }}>(128 avis)</span>
          </div>
          <span className="font-sans text-xs font-semibold" style={{ color: '#16A34A' }}>#1 · Leader du secteur</span>
        </div>

        {/* Concurrent 2 */}
        <div className="rounded-2xl p-5"
          style={{ background: C.bgAlt, border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(44,31,23,0.05)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans font-bold text-sm" style={{ color: C.textMid }}>Concurrent</span>
            <span style={{ color: C.textLight }}>📍</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            {'★★★★☆'.split('').map((s, i) => <span key={i} className="text-base" style={{ color: '#F59E0B' }}>{s}</span>)}
            <span className="font-sans text-xs ml-1" style={{ color: C.textLight }}>(47 avis)</span>
          </div>
          <span className="font-sans text-xs font-semibold" style={{ color: C.textMid }}>#3 · Visible</span>
        </div>

        {/* Votre magasin — grisé, invisible, problème visible */}
        <div className="rounded-2xl p-5 relative overflow-hidden"
          style={{ background: '#F0EFEE', border: `1px solid #D8D5D2`, boxShadow: 'none', opacity: 0.72 }}>
          <div className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-xs font-sans font-bold"
            style={{ background: '#FEE2E2', color: '#DC2626' }}>Invisible</div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans font-bold text-sm" style={{ color: '#888' }}>Votre magasin</span>
            <span style={{ color: '#C0B8B0' }}>📍</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            {'★★☆☆☆'.split('').map((s, i) => <span key={i} className="text-base" style={{ color: '#CCC' }}>{s}</span>)}
            <span className="font-sans text-xs ml-1" style={{ color: '#AAA' }}>(3 avis)</span>
          </div>
          <span className="font-sans text-xs font-semibold" style={{ color: '#DC2626' }}>7ème position · Vos clients ne vous trouvent pas</span>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   BENEFITS
───────────────────────────────────────── */
const Benefits = () => (
  <section id="avantages" className="py-16 md:py-24" style={{ background: C.bgAlt }}>
    <div className="max-w-6xl mx-auto px-5 md:px-6">
      <div className="text-center mb-10 md:mb-16">
        <span className="inline-block font-sans font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border mb-4"
          style={{ background: C.white, color: C.accentDeep, borderColor: C.border }}>
          Avantages
        </span>
        <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-tight" style={{ color: C.text }}>
          Pourquoi Autotasq Change Tout
        </h2>
        <p className="mt-4 font-sans text-base md:text-lg max-w-xl mx-auto" style={{ color: C.textMid }}>
          Ne jouez plus avec les règles du hasard. Prenez le contrôle scientifique de votre image en ligne.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {[
          { icon: '🏆', title: 'Domination Locale',  body: "L'algorithme de Google favorise la fraîcheur et la pertinence. En générant un flux régulier d'avis authentiques et bien formulés, nous propulsons votre fiche en haut des résultats Maps." },
          { icon: '⭐', title: 'Autorité Sociale',   body: "Les consommateurs jugent en une seconde. Avec une note parfaite et des avis élogieux, vous devenez l'option évidente face à vos concurrents." },
          { icon: '🔍', title: 'SEO Local Boosté',   body: "Ce ne sont pas juste des étoiles. Les avis collectés contiennent les termes que vos clients recherchent, renforçant votre visibilité locale." },
        ].map(card => (
          <div key={card.title} className="p-6 md:p-8 rounded-2xl"
            style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(44,31,23,0.07)', transition: 'all 0.3s' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 md:mb-5"
              style={{ background: C.bgAlt, border: `1px solid ${C.border}` }}>{card.icon}</div>
            <h3 className="font-sans font-bold text-lg mb-3" style={{ color: C.text }}>{card.title}</h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: C.textMid }}>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────── */
const HowItWorks = () => (
  <section id="comment-ca-marche" className="py-16 md:py-24 overflow-hidden" style={{ background: C.white }}>
    <div className="max-w-6xl mx-auto px-5 md:px-6">
      <div className="mb-10 md:mb-16">
        <h2 className="font-serif font-normal leading-tight mb-3" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: C.text }}>
          Complexe en interne.
        </h2>
        <h2 className="font-serif italic font-normal leading-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: C.accent }}>
          Invisible pour vous.
        </h2>
        <p className="mt-5 md:mt-6 font-sans text-base md:text-lg max-w-xl" style={{ color: C.textMid }}>
          Nous avons supprimé la friction. Pas de tableau de bord compliqué. Pas d'équipe à former. Juste des résultats.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-8">
        {[
          { num: '1.', title: 'Activation', body: "Connectez votre fiche Google Business. C'est la seule action requise de votre part." },
          { num: '2.', title: 'Collecte',   body: "Notre système identifie vos clients satisfaits et leur demande poliment via SMS ou QR Code au moment optimal." },
          { num: '3.', title: 'Croissance', body: "Les avis 5 étoiles s'accumulent. Notre système rédige les réponses. Votre classement grimpe." },
        ].map((step, idx) => (
          <div key={step.num} className={idx < 2 ? 'pb-8 md:pb-0 border-b md:border-b-0' : ''} style={{ borderColor: C.border }}>
            <div className="font-serif text-5xl md:text-6xl font-normal mb-3 md:mb-4 leading-none" style={{ color: C.border }}>{step.num}</div>
            <h3 className="font-sans font-bold text-xl mb-2 md:mb-3" style={{ color: C.text }}>{step.title}</h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: C.textMid }}>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   OFFER
───────────────────────────────────────── */
const Offer = () => (
  <section id="offre" className="py-16 md:py-24" style={{ background: C.white }}>
    <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
      <h2 className="font-serif font-normal leading-tight mb-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.75rem)', color: C.text }}>
        Le Défi 45 Jours
      </h2>
      <p className="font-sans text-base md:text-lg mb-10 md:mb-12" style={{ color: C.textMid }}>
        Je suis tellement confiant dans le système <em className="font-serif">Autotasq</em> que je prends tous les risques.
      </p>
      <div className="rounded-2xl md:rounded-3xl p-7 md:p-10 text-left"
        style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 12px 40px rgba(44,31,23,0.10)' }}>
        <div className="inline-block font-sans font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
          style={{ background: C.accentLight, color: C.accentDeep }}>
          Offre de Lancement
        </div>
        <div className="space-y-3 mb-8">
          {[
            { label: '10 Avis Optimisés', original: null },
            { label: 'Configuration & Formation', original: '99€' },
            { label: 'Support 24/7 (45j)', original: '99€' },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between py-2"
              style={{ borderBottom: `1px solid ${C.border}` }}>
              <span className="font-sans text-sm flex items-center gap-2" style={{ color: C.textMid }}>
                <span style={{ color: '#16A34A' }}>✓</span> {item.label}
              </span>
              {item.original && <span className="font-sans text-sm line-through" style={{ color: C.border }}>{item.original}</span>}
            </div>
          ))}
        </div>
        <div className="flex items-end gap-3 mb-8">
          <span className="font-sans font-extrabold leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 3.75rem)', color: C.text }}>0€</span>
          <div className="mb-2">
            <p className="font-sans text-sm line-through" style={{ color: C.textLight }}>Valeur : 198€</p>
            <p className="font-sans text-sm" style={{ color: C.textMid }}>Pendant 45 jours · Sans engagement</p>
          </div>
        </div>
        <a href="#contact"
          className="w-full flex items-center justify-center gap-3 font-sans font-bold text-base py-4 rounded-full transition-all duration-200"
          style={{ background: C.bgDark, color: C.white, boxShadow: '0 8px 32px rgba(44,31,23,0.20)' }}>
          Démarrer Gratuitement →
        </a>
        <p className="mt-3 text-center font-sans text-xs" style={{ color: C.textLight }}>
          Aucune carte bancaire requise · Places limitées
        </p>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   FAQ
───────────────────────────────────────── */
const FAQ = () => {
  const [open, setOpen] = useState(null);
  const items = [
    { q: 'Est-ce conforme aux règles de Google ?',         a: "Oui. Autotasq respecte strictement les directives de Google Business Profile. Nous sollicitons uniquement de vrais clients après leur achat ou service." },
    { q: 'Combien de temps avant de voir des résultats ?', a: "La plupart de nos clients constatent leurs premiers avis dans les 48-72h. Des résultats significatifs sur le classement sont visibles sous 45 jours." },
    { q: "Dois-je m'impliquer au quotidien ?",             a: "Non. Une fois votre fiche connectée, notre système fonctionne en autonome. Vous recevez des rapports hebdomadaires, c'est tout." },
    { q: 'Que se passe-t-il après les 45 jours ?',        a: "Vous choisissez librement de continuer ou non. Si vous êtes satisfait, nous proposons des plans à partir de 97€/mois. Aucune obligation." },
  ];
  return (
    <section id="faq" className="py-16 md:py-24" style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-3xl mx-auto px-5 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm mb-6"
            style={{ background: C.white, border: `1px solid ${C.border}` }}>
            <span className="text-base">❓</span>
            <span className="font-sans font-semibold text-xs uppercase tracking-widest" style={{ color: C.textMid }}>Questions fréquentes</span>
          </div>
          <h2 className="font-serif font-normal text-3xl md:text-5xl" style={{ color: C.text }}>Vos Questions, Nos Réponses</h2>
          <p className="mt-4 font-sans text-base" style={{ color: C.textMid }}>Tout ce que vous devez savoir avant de commencer</p>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-sm"
              style={{ background: C.white, border: `1px solid ${C.border}` }}>
              <button className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-sans font-semibold text-sm pr-4" style={{ color: C.text }}>{item.q}</span>
                <span className="text-xl flex-shrink-0 transition-transform duration-200"
                  style={{ color: C.textLight, transform: open === i ? 'rotate(180deg)' : 'none' }}>∨</span>
              </button>
              {open === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="font-sans text-sm leading-relaxed" style={{ color: C.textMid }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */
const Contact = () => (
  <section id="contact" className="py-16 md:py-24" style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
    <div className="max-w-2xl mx-auto px-5 md:px-6 text-center">
      <h2 className="font-serif font-normal text-3xl md:text-5xl mb-4" style={{ color: C.text }}>Démarrer Maintenant</h2>
      <p className="font-sans text-base md:text-lg mb-8 md:mb-10" style={{ color: C.textMid }}>Réservez votre appel de découverte gratuit de 30 minutes.</p>
      <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 text-left"
        style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(44,31,23,0.07)' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: C.bgDark }}>a</div>
          <div>
            <p className="font-sans font-bold text-sm" style={{ color: C.text }}>Appel de Découverte</p>
            <p className="font-sans text-xs" style={{ color: C.textMid }}>30 minutes · Gratuit · Sans engagement</p>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          {[
            'Analyse personnalisée de votre réputation actuelle',
            'Démonstration du système Autotasq en direct',
            "Plan d'action sur mesure pour votre secteur",
          ].map(item => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 text-sm" style={{ color: '#16A34A' }}>✓</span>
              <span className="font-sans text-sm" style={{ color: C.textMid }}>{item}</span>
            </li>
          ))}
        </ul>
        <a href="mailto:contact@autotasq.com"
          className="w-full flex items-center justify-center gap-3 font-sans font-bold text-base py-4 rounded-full transition-all duration-200"
          style={{ background: C.bgDark, color: C.white, boxShadow: '0 8px 32px rgba(44,31,23,0.20)' }}>
          Réserver Mon Appel Gratuit →
        </a>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
const Footer = () => (
  <footer className="py-10 md:py-12 text-center" style={{ background: C.bgDark }}>
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
        style={{ background: 'rgba(255,255,255,0.10)', color: C.white }}>a</div>
      <span className="font-sans font-semibold text-base" style={{ color: C.white }}>autotasq</span>
    </div>
    <p className="font-sans text-sm" style={{ color: 'rgba(250,247,243,0.4)' }}>© 2026 Autotasq. Tous droits réservés.</p>
  </footer>
);

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
  return (
    <div className="font-sans" style={{ background: C.bg, color: C.text }}>
      <Navbar />
      <Hero />
      <ScrollAnimation />
      <Problem />
      <Benefits />
      <HowItWorks />
      <Offer />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
