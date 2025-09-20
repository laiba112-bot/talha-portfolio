import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {id:1, title:'Motion Reel — Title Sequence', desc:'Advanced title animation + VFX', tags:['Motion','VFX']},
  {id:2, title:'UI Animation Pack', desc:'Micro-interactions for apps', tags:['UI','Animation']},
  {id:3, title:'Promo Edit — Short Film', desc:'Color grading + cinematic edit', tags:['Editing','Color']},
  {id:4, title:'3D Logo Reveal', desc:'Stylized 3D reveal with particles', tags:['3D','Logo']},
  {id:5, title:'Trailer Montage', desc:'Dynamic cuts, sound design', tags:['Editing','Montage']},
  {id:6, title:'Animated Character Loop', desc:'Looping character animation', tags:['Character','Loop']},
]

export default function PortfolioGrid(){
  return (
    <div className="grid">
      {items.map((it, idx) => (
        <motion.article
          key={it.id}
          className="card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.08, duration: 0.6 }}
        >
          <div className="card-media" aria-hidden="true">
            <div className="media-placeholder">{it.title.split(' ')[0]}</div>
          </div>
          <div className="card-body">
            <h3>{it.title}</h3>
            <p className="muted">{it.desc}</p>
            <div className="tags">
              {it.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
