import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-inner"
      >
        <div className="profile">
          <div className="avatar" aria-hidden="true">
            {/* stylized avatar */}
            <svg viewBox="0 0 120 120" className="avatar-svg">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#00ff99"/>
                  <stop offset="1" stopColor="#00cc66"/>
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="58" stroke="url(#g)" strokeWidth="3" fill="#050505"/>
              <text x="50%" y="55%" textAnchor="middle" fill="#e6ffe9" fontSize="36" fontFamily="sans-serif">T</text>
            </svg>
          </div>

          <div className="intro">
            <h1>Talha Minhas</h1>
            <p className="role">Designer · Animator · Video Editor</p>
            <p className="bio">
              I craft advanced animated interfaces, motion graphics and cinematic edits.
              My work blends bold, dark aesthetics with neon green accents and fluid motion.
            </p>

            <div className="cta">
              <a href="#work" className="btn">View Work</a>
              <a href="#contact" className="btn ghost">Hire Me</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
