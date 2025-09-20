import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Lead Motion Designer',
    company: 'Freelance / Various Studios',
    period: '2021 — Present',
    details: [
      'Concepted and executed title sequences, promos, and motion assets.',
      'Delivered tight deadlines for commercial and short film projects.',
      'Collaborated with directors on visual language & color grading.'
    ]
  },
  {
    role: 'Video Editor',
    company: 'CreativeLabs Studio',
    period: '2019 — 2021',
    details: [
      'Edited promotional videos and social content.',
      'Implemented grade and audio mixes for final delivery.'
    ]
  }
]

export default function Experience(){
  return (
    <div className="experience">
      {experiences.map((ex, i) => (
        <motion.div key={i} className="exp-card" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: i*0.12}}>
          <div className="exp-head">
            <h3>{ex.role}</h3>
            <div className="muted">{ex.company} · <span>{ex.period}</span></div>
          </div>
          <ul>
            {ex.details.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
