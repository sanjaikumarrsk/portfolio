import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Award, BadgeCheck, BrainCircuit, Check, ChevronDown, Cloud, Code2, Database,
  Download, ExternalLink, FileText, Globe2, GraduationCap, Mail,
  MapPin, Menu, MessageCircle, Monitor, Pause, Phone, Play, Rocket, Send, Server, Sparkles, Trophy,
  X, Zap,
} from 'lucide-react'
import { achievements, assetPath, certifications, college, education, focusAreas, profile, projects, skillGroups } from './data'

const navItems = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['education', 'Education'], ['achievements', 'Achievements'], ['certifications', 'Certifications'], ['contact', 'Contact'],
]

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function Icon({ name, size = 18 }) {
  const icons = {
    windows: <span className="brand-mark windows-mark"><i /><i /><i /><i /></span>,
    google: <span className="brand-mark google-mark">G</span>,
    trophy: <Trophy size={size} />, medal: <Award size={size} />, award: <Sparkles size={size} />,
    code: <Code2 size={size} />, layout: <Monitor size={size} />, server: <Server size={size} />,
    database: <Database size={size} />, cloud: <Cloud size={size} />,
  }
  return icons[name] || <Sparkles size={size} />
}

function SocialGlyph({ type }) {
  const source = type === 'in' ? assetPath('assets/brands/linkedin.svg') : assetPath('assets/brands/github.svg')
  return <span className={`social-brand-wrap social-brand-${type}`}><img className="social-brand-image" src={source} alt={`${type === 'in' ? 'LinkedIn' : 'GitHub'} logo`} /></span>
}

function SkillLogo({ skill }) {
  return <span className="skill-logo-wrap"><img src={skill.logo} alt={`${skill.name} logo`} /><BadgeCheck className="skill-verified" size={12} aria-label="Verified technology logo" /></span>
}

function IssuerLogo({ certification }) {
  return <span className={`issuer-logo issuer-${certification.issuer.toLowerCase().replace(/\s+/g, '-')}`}><img src={certification.logo} alt={`${certification.issuer} logo`} /></span>
}

function Reveal({ children, className = '', delay = 0 }) {
  return <div data-reveal style={{ '--delay': `${delay}ms` }} className={className}>{children}</div>
}

function SectionHeading({ kicker, title, detail }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span className="orange-square" /> {kicker}</div>
      <h2>{title}</h2>
      {detail && <p>{detail}</p>}
    </div>
  )
}

function Navbar({ active, open, setOpen }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }
  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => goTo('home')} aria-label="Back to home">
          <span className="brand-dot" /> <span className="brand-name">RSK</span>
        </button>
        <nav className={open ? 'nav-menu nav-menu-open' : 'nav-menu'}>
          {navItems.map(([id, label]) => (
            <button key={id} className={active === id ? 'nav-link active' : 'nav-link'} onClick={() => goTo(id)}>{label}</button>
          ))}
          <a className="resume-button nav-resume" href={profile.resume} download="Sanjai-Kumar-R-Resume.pdf"><Download size={15} /> Download Resume</a>
        </nav>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  )
}

function Socials() {
  return (
    <div className="socials">
      <a className="social linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialGlyph type="in" /></a>
      <a className="social github" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialGlyph type="gh" /></a>
      <a className="social email" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
      <a className="social phone" href="tel:+919655920225" aria-label="Phone"><Phone size={17} /></a>
      <a className="social resume" href={profile.resume} download="Sanjai-Kumar-R-Resume.pdf" aria-label="Resume"><FileText size={17} /></a>
    </div>
  )
}

function StatusCard() {
  const lines = ['STATUS:  ONLINE', 'ROLE:    AI & DS STUDENT', 'FOCUS:   JAVA | AI | CLOUD', 'BUILDING: REAL-WORLD SYSTEMS', 'MODE:    ALWAYS LEARNING']
  return (
    <div className="status-card">
      <div className="terminal-title"><span>sanjai@portfolio:~$</span><span className="terminal-dots"><i /><i /><i /></span></div>
      <div className="terminal-lines">
        {lines.map((line, index) => <div key={line} className="terminal-line" style={{ '--line-delay': `${800 + index * 270}ms` }}><span>›</span>{line}</div>)}
      </div>
      <div className="terminal-cursor">_</div>
    </div>
  )
}

function Portrait() {
  return (
    <div className="portrait-stage">
      <div className="portrait-label label-one">AI / DS</div>
      <div className="portrait-label label-two">KARUR · TN</div>
      <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
      <img className="portrait-art" src={assetPath('assets/profile-blended.png')} alt="Sanjai Kumar R profile artwork" />
      <div className="floating-square square-a" /><div className="floating-square square-b" /><div className="floating-square square-c" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="grid-lines hero-grid" />
      <div className="hero-copy">
        <Reveal className="hero-hello"><span className="orange-square" /> HELLO, I'M</Reveal>
        <Reveal className="hero-title" delay={120}><h1><span>SANJAI</span><span>KUMAR <i>R</i></span></h1></Reveal>
        <Reveal className="hero-role" delay={250}>AI &amp; DATA SCIENCE STUDENT</Reveal>
        <Reveal className="hero-tagline" delay={380}>BUILDING SMART SYSTEMS<br /><b>FOR A BETTER TOMORROW.</b></Reveal>
        <Reveal className="hero-actions" delay={500}>
          <a className="button button-orange" href="#contact">Let's Connect <ArrowRight size={17} /></a>
          <a className="button button-outline" href="#projects">View My Work <ArrowDownRight size={17} /></a>
        </Reveal>
        <Reveal delay={620}><Socials /></Reveal>
      </div>
      <div className="hero-visual">
        <Portrait />
        <Reveal className="hero-status" delay={420}><StatusCard /></Reveal>
        <div className="hero-quote">“ DISCIPLINE TURNS IDEAS<br /> INTO RESULTS. ”</div>
      </div>
      <div className="scroll-cue"><span>SCROLL</span><div className="mouse-shape"><i /></div></div>
    </section>
  )
}

function About() {
  const identity = [
    [BrainCircuit, 'AI EXPLORER'], [Code2, 'JAVA BUILDER'], [Cloud, 'CLOUD LEARNER'],
    [Zap, 'PROBLEM SOLVER'], [Rocket, 'FAST LEARNER'], [Globe2, 'IMPACT DRIVEN'],
  ]
  return (
    <section className="section-shell section-block about" id="about">
      <SectionHeading kicker="ABOUT ME" title="MORE THAN JUST A STUDENT" detail="A curious builder turning ideas into reliable, real-world systems." />
      <div className="about-layout">
        <Reveal className="identity-panel">
          <div className="panel-top"><span className="orange-square" /> WHO AM I?</div>
          <p className="identity-intro">I’m an AI &amp; Data Science undergraduate who likes going deep into how systems work — from the first line of code to the final deployment.</p>
          <div className="identity-list">{identity.map(([IconComponent, label]) => <div key={label}><IconComponent size={15} /><span>{label}</span></div>)}</div>
        </Reveal>
        <Reveal className="about-statement" delay={100}><BrainCircuit size={45} /><strong>I TURN<br />IDEAS INTO<br /><em>REAL-WORLD<br />SOLUTIONS.</em></strong><ArrowDownRight size={19} /></Reveal>
        <Reveal className="journey-card" delay={180}>
          <div className="panel-top"><span className="orange-square" /> MY JOURNEY</div>
          <div className="journey-track">
            {[['2024', 'Started B.Tech in AI & DS'], ['2025', 'Built real-world projects'], ['2026', 'Exploring Cloud & DevOps'], ['NOW', 'Building a better tomorrow']].map(([year, text]) => <div className="journey-step" key={year}><span>{year}</span><i /><p>{text}</p></div>)}
          </div>
        </Reveal>
        <Reveal className="focus-card" delay={260}>
          <div className="panel-top"><span className="orange-square" /> CURRENTLY FOCUSED ON</div>
          <ul>{focusAreas.map((area) => <li key={area}><Check size={14} /> {area}</li>)}</ul>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  const [selected, setSelected] = useState(0)
  const group = skillGroups[selected]
  return (
    <section className="section-shell section-block skills" id="skills">
      <SectionHeading kicker="SKILLS" title="TOOLS I USE TO BUILD" detail="A practical toolkit across product development, intelligent systems, and delivery." />
      <div className="skill-tabs">{skillGroups.map((item, index) => <button key={item.name} className={selected === index ? 'selected' : ''} onClick={() => setSelected(index)}><Icon name={item.icon} size={15} />{item.name}</button>)}</div>
      <div className="skill-display">
        <div className="skill-group-title"><span className="orange-square" /><div><small>SELECTED CATEGORY</small><h3>{group.name}</h3></div><span className="skill-count">{String(group.skills.length).padStart(2, '0')} tools</span></div>
        <div className="skill-grid" key={group.name}>{group.skills.map((skill, index) => <div className="skill-card is-visible" style={{ '--delay': `${index * 70}ms` }} key={skill.name}><SkillLogo skill={skill} /><strong>{skill.name}</strong><span className="skill-index">{String(index + 1).padStart(2, '0')}</span></div>)}</div>
      </div>
    </section>
  )
}

function ProjectVisual({ project }) {
  return <div className="visual-art repository-art"><img src={project.image} alt={`${project.name} project visual`} /><span className="repository-source"><SocialGlyph type="gh" /> GITHUB REPOSITORY</span></div>
}

function ProjectCard({ project, index }) {
  return <Reveal className={`project-card card-${index + 1}`} delay={index * 80}>
    <div className="project-visual"><ProjectVisual project={project} /><span className="project-corner">{String(index + 1).padStart(2, '0')}</span></div>
    <span className="project-separator" aria-hidden="true" />
    <div className="project-content"><div className="project-eyebrow">{project.eyebrow}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.github} target="_blank" rel="noreferrer">View Repository <ArrowRight size={15} /></a></div>
  </Reveal>
}

function Projects() {
  return (
    <section className="section-shell section-block projects" id="projects">
      <div className="projects-head"><SectionHeading kicker="PROJECTS" title="REAL PROJECTS. REAL IMPACT." detail="A selected wall of systems I’ve designed, built, and shipped." /></div>
      <div className="project-wall">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      <a className="button button-orange projects-cta" href={profile.github} target="_blank" rel="noreferrer">View All on GitHub <ArrowRight size={16} /></a>
    </section>
  )
}

function ProjectsLegacy() {
  return (
    <section className="section-shell section-block projects" id="projects">
      <div className="projects-head"><SectionHeading kicker="PROJECTS" title="REAL PROJECTS. REAL IMPACT." detail="A selected wall of systems I’ve designed, built, and shipped." /><div className="project-filters">{filters.map((item) => <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <div className="project-wall">{visible.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      <a className="button button-orange projects-cta" href={profile.github} target="_blank" rel="noreferrer">View All on GitHub <ArrowRight size={16} /></a>
    </section>
  )
}

function Education() {
  const schoolCards = [education.schools[1], education.schools[0]].map((entry, index) => ({
    ...entry,
    academicYear: index === 0 ? '2021-2022' : '2022-2024',
  }))
  const companions = [
    { title: 'START WITH', emphasis: 'CURIOSITY.', text: 'Strong foundations turn small questions into bigger possibilities.' },
    { title: 'LEARN. TEST.', emphasis: 'GROW.', text: 'Every challenge is a chance to sharpen the way you think.' },
    { title: 'BUILD WHAT', emphasis: 'MATTERS.', text: 'Turn technical knowledge into useful systems with lasting impact.' },
  ]
  return (
    <section className="section-shell section-block education" id="education">
      <SectionHeading kicker="EDUCATION" title="WHERE THE FOUNDATION STARTED" detail="Learning the theory, then pushing it into practice." />
      <div className="education-cards">
        {schoolCards.map((entry, index) => (
          <div className="education-row" key={entry.level}>
            <Reveal className="education-card education-school-card" delay={index * 90}>
            <div className="education-card-top">
              <div className="education-icon education-school-logo"><img src={education.schoolLogo} alt="Mount Giris school logo" /></div>
              <div><div className="education-meta">{entry.level}</div><h3>{entry.school}</h3></div>
            </div>
            <div className="education-details"><span>Academic year: {entry.academicYear}</span><strong>{entry.percentage}</strong></div>
            </Reveal>
            <Reveal className="education-note education-companion" delay={index * 90 + 45}>
              <span className="orange-square" /><strong>{companions[index].title}<br /><em>{companions[index].emphasis}</em></strong><p>{companions[index].text}</p>
            </Reveal>
          </div>
        ))}
        <div className="education-row">
          <Reveal className="education-card education-btech-card" delay={180}>
          <div className="education-card-top">
            <div className="education-icon education-college-logo"><img src={college.logo} alt="M. Kumarasamy College of Engineering official logo" /></div>
            <div><div className="education-meta">BATCH: 2024-2028 · B.TECH PROGRAM</div><h3>B.Tech in Artificial Intelligence<br />&amp; Data Science</h3><p>{college.name}<br />Karur, Tamil Nadu</p></div>
          </div>
          <div className="education-details education-btech-details"><span>Current academic year: 2026-2027</span><strong>CGPA {education.cgpa}</strong><small>{education.cgpaNote}</small></div>
          </Reveal>
          <Reveal className="education-note education-companion" delay={225}>
            <span className="orange-square" /><strong>{companions[2].title}<br /><em>{companions[2].emphasis}</em></strong><p>{companions[2].text}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  const achievementImages = {
    MICROSOFT: { src: assetPath('assets/organizations/microsoft.png'), alt: 'Microsoft logo' },
    GOOGLE: { src: assetPath('assets/organizations/google-student-ambassador.jpg'), alt: 'Google Student Ambassador Program image' },
    'M. KUMARASAMY COLLEGE OF ENGINEERING': { src: assetPath('assets/mkce-logo.png'), alt: 'M. Kumarasamy College of Engineering logo' },
    'UNSTOP IGNITERS CLUB': { src: assetPath('assets/brands/unstop.svg'), alt: 'Unstop logo' },
    SYNTAX2CODE: { src: assetPath('assets/organizations/syntax2code.jpg'), alt: 'Syntax2Code logo' },
  }
  const achievementItems = achievements.filter((item) => item.meta !== 'GDSC').concat({ title: "1st Place — Genesis'26", meta: 'SYNTAX2CODE', text: "1st place as an individual in the Genesis'26 hackathon organized by Syntax2Code.", icon: 'award' })
  return <section className="section-shell section-block achievements" id="achievements"><SectionHeading kicker="ACHIEVEMENTS" title="MILESTONES THAT MATTER" detail="A few moments that made the work feel bigger than the screen." /><div className="achievement-grid">{achievementItems.map((item, index) => { const asset = achievementImages[item.meta]; return <Reveal className="achievement-card" delay={index * 80} key={item.title}><div className="achievement-icon">{asset ? <img className="achievement-logo" src={asset.src} alt={asset.alt} /> : <Icon name={item.icon} size={23} />}</div><div><span>{item.meta}</span><h3>{item.title}</h3><p>{item.text}</p></div><ArrowDownRight className="achievement-arrow" size={17} /></Reveal> })}</div></section>
}

function Certifications() {
  return <section className="section-shell section-block certifications" id="certifications"><SectionHeading kicker="CERTIFICATIONS" title="LEARNING, VERIFIED" detail="Credentials listed on my public LinkedIn profile." /><div className="certification-grid">{certifications.map((certification, index) => <Reveal className="certification-card" delay={index * 55} key={`${certification.issuer}-${certification.name}`}><IssuerLogo certification={certification} /><div className="certification-copy"><span className="cert-issuer">{certification.issuer}</span><h3>{certification.name}</h3><p>{certification.date} · Credential {certification.credential}</p></div><a className="certification-link" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={15} /></a></Reveal>)}</div></section>
}

function GithubStats() {
  return <section className="section-shell section-block github-section" id="github"><div className="github-panel"><div className="github-copy"><div className="section-kicker"><span className="orange-square" /> GITHUB</div><h2>QUIETLY BUILDING.<br /><em>RELIABLY IMPROVING.</em></h2><p>Explore the public work, experiments, and systems behind this portfolio.</p><a className="button button-light" href={profile.github} target="_blank" rel="noreferrer"><SocialGlyph type="gh" /> View My GitHub <ArrowRight size={16} /></a></div><div className="github-visual"><div className="github-mark-large"><SocialGlyph type="gh" /></div><div className="github-orbit orbit-a" /><div className="github-orbit orbit-b" /><span className="github-code code-a">git commit -m “keep building”</span><span className="github-code code-b">15+ public repositories</span></div></div></section>
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const submit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact — ${fields.name}`)
    const body = encodeURIComponent(`Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    setSent(true)
  }
  return <section className="section-shell section-block contact" id="contact"><div className="contact-layout"><Reveal className="contact-copy"><SectionHeading kicker="LET'S CONNECT" title={<>LET'S BUILD<br /><em>SOMETHING<br />AMAZING.</em></>} detail="Have an opportunity, project idea, or just want to say hi? I’d love to hear from you." /><div className="contact-details"><a href="tel:+919655920225"><Phone size={16} /> +91 9655920225</a><a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a><span><MapPin size={16} /> Karur, Tamil Nadu</span></div><Socials /></Reveal><Reveal className="contact-form-wrap" delay={160}><div className="form-header"><span><MessageCircle size={18} /> START A CONVERSATION</span><span className="form-signal">● AVAILABLE</span></div><form onSubmit={submit}><label>Name<input required value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} placeholder="Your name" /></label><label>Email<input required type="email" value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} placeholder="you@example.com" /></label><label>Message<textarea required value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })} placeholder="Tell me a little about your idea..." rows="4" /></label><button className="button button-orange" type="submit">{sent ? 'Opening Mail Client' : 'Send Message'} <Send size={16} /></button><small className="form-note">This form opens your email client with a pre-filled message.</small></form></Reveal></div></section>
}

function FloatingCubes() {
  return <div className="floating-cubes" aria-hidden="true">{Array.from({ length: 20 }, (_, index) => <span className="page-cube" key={index} />)}</div>
}

function BackgroundMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    audio.volume = 0.15
    audio.loop = true

    const syncPlayingState = () => setIsPlaying(!audio.paused)
    const attemptPlay = () => {
      const playPromise = audio.play()
      if (playPromise?.then) {
        return playPromise.then(() => true).catch(() => false)
      }
      return Promise.resolve(!audio.paused)
    }
    const interactionEvents = ['pointerdown', 'click']
    const removeInteractionListeners = () => interactionEvents.forEach((eventName) => document.removeEventListener(eventName, startAfterInteraction, true))
    const startAfterInteraction = () => {
      removeInteractionListeners()
      attemptPlay().then(syncPlayingState)
    }

    audio.addEventListener('play', syncPlayingState)
    audio.addEventListener('pause', syncPlayingState)
    audio.addEventListener('ended', syncPlayingState)
    interactionEvents.forEach((eventName) => document.addEventListener(eventName, startAfterInteraction, true))
    attemptPlay().then(syncPlayingState)

    return () => {
      audio.removeEventListener('play', syncPlayingState)
      audio.removeEventListener('pause', syncPlayingState)
      audio.removeEventListener('ended', syncPlayingState)
      removeInteractionListeners()
    }
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <audio ref={audioRef} src={assetPath('I Could Be.mp3')} autoPlay loop preload="auto" aria-hidden="true" />
      <button className="music-control" type="button" onClick={toggleMusic} aria-label={isPlaying ? 'Pause background music' : 'Play background music'} title={isPlaying ? 'Pause background music' : 'Play background music'}>
        <span className={isPlaying ? 'music-bars is-playing' : 'music-bars'} aria-hidden="true"><i /><i /><i /></span>
        <span className="music-control-icon" aria-hidden="true">{isPlaying ? <Pause size={13} /> : <Play size={13} />}</span>
        <span className="music-control-label">MUSIC</span>
      </button>
    </>
  )
}

function Footer() {
  return <footer className="footer"><div className="footer-main"><button className="brand footer-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><span className="brand-dot" /> <span className="brand-name">RSK</span></button><span className="footer-role">AI &amp; DATA SCIENCE STUDENT</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer"><SocialGlyph type="gh" /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><SocialGlyph type="in" /> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail size={15} /> Email</a><a href="tel:+919655920225"><Phone size={15} /> Phone</a></div><button className="top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ChevronDown size={18} /></button></div><div className="footer-bottom"><span>© 2026 Sanjai Kumar R</span><span>Build · Learn · Improve · Repeat</span><span>Designed with intent.</span></div></footer>
}

export default function App() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()
  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -65% 0px', threshold: [0.05, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <><BackgroundMusic /><Navbar active={active} open={menuOpen} setOpen={setMenuOpen} /><main><FloatingCubes /><Hero /><About /><Skills /><Projects /><Education /><Achievements /><Certifications /><GithubStats /><Contact /></main><Footer /></>
}
