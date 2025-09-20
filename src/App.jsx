import React from 'react'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">Talha Minhas</div>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <section id="work" className="section">
          <h2 className="section-title">Selected Work</h2>
          <PortfolioGrid />
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <Experience />
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Talha Minhas — Designer · Animator · Editor</div>
        <div className="thank">Nave mein bhi — Thank you ✨</div>
      </footer>
    </div>
  )
}
