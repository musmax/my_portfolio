import { useEffect, useState } from 'react';
import {
  education,
  experience,
  profile,
  projects,
  skills,
  stats,
} from './data';
import './App.css';

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      <header className={`nav${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
        <div className="container nav__inner">
          <a className="nav__brand" href="#top" onClick={closeMenu}>
            <span className="mark" aria-hidden="true">
              M
            </span>
            {profile.brand}
          </a>

          <nav className="nav__links" aria-label="Primary">
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </nav>

          <a className="nav__cta" href={`mailto:${profile.email}`}>
            Let's Talk <span aria-hidden="true">→</span>
          </a>

          <button
            className="nav__toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="hero__eyebrow">
              <span className="mark mark--soft" aria-hidden="true">
                M
              </span>
              Backend Engineer · Fintech & Enterprise Systems
            </p>
            <h1 className="hero__title">
              I build the systems that <span className="accent">move things.</span>
            </h1>
            <div className="mark hero__mark" aria-hidden="true">
              M
            </div>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__scroll" aria-hidden="true" />
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <div className="section__head reveal">
              <h2 className="section__title">Selected work.</h2>
            </div>
            <div className="work-grid">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className={`work-card work-card--${project.tone} reveal`}
                >
                  <div>
                    <h3 className="work-card__title">{project.title}</h3>
                    <p className="work-card__copy">{project.description}</p>
                    <ul className="work-card__tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="work-card__links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact" id="impact">
          <div className="container impact__grid">
            {stats.map((stat) => (
              <div key={stat.value} className="reveal">
                <p className="impact__value">{stat.value}</p>
                <p className="impact__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about">
            <div className="reveal">
              <h2 className="about__title">
                Practical engineering. <span className="accent">Meaningful outcomes.</span>
              </h2>
              <p className="about__copy">{profile.about}</p>
              <ul className="skills">
                {skills.map((skill) => (
                  <li className="skill" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="about__meta reveal">
              <h3>Details</h3>
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>GitHub</dt>
                  <dd>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      github.com/musmax
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>LinkedIn</dt>
                  <dd>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      Akande Musa Ojo
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section__head reveal">
              <h2 className="section__title">Experience.</h2>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article key={`${item.company}-${item.period}`} className="experience-item reveal">
                  <div>
                    <h3 className="experience-item__company">{item.company}</h3>
                    <p className="experience-item__role">{item.role}</p>
                  </div>
                  <p className="experience-item__summary">{item.summary}</p>
                  <p className="experience-item__period">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <div className="section__head reveal">
              <h2 className="section__title">Education.</h2>
            </div>
            <div className="edu-grid">
              {education.map((item) => (
                <article key={item.title} className="edu-card reveal">
                  <h3>{item.title}</h3>
                  <p>
                    {item.org} · {item.period}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container reveal">
            <h2 className="contact__title">
              Let's build something <span className="accent">solid.</span>
            </h2>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
