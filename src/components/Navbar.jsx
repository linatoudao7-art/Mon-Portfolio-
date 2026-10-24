import { useState } from 'react'
import { profile } from '../data/site.js'

const links = [['accueil', 'Accueil'], ['apropos', 'À propos'], ['competences', 'Compétences'], ['parcours', 'Parcours'], ['projets', 'Projets'], ['contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#accueil" className="brand">{profile.firstName} {profile.lastName}</a>
        <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          {open ? 'Fermer' : 'Menu'}
        </button>
        <nav id="menu" className={open ? 'open' : ''} aria-label="Navigation principale">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}
