import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import Modal from '../components/Modal.jsx'
import { profile, about, skills, originLabel, journey, projects, value } from '../data/site.js'

const Title = ({ id, kicker, children }) => (
  <div className="sec-title"><span className="kicker">{kicker}</span><h2 id={id}>{children}</h2></div>
)

export function Hero() {
  return (
    <section id="accueil" className="hero wrap">
      <div className="hero-text">
        <p className="kicker">Bonjour, je suis</p>
        <h1>{profile.firstName} {profile.lastName}</h1>
        <p className="role">{profile.title}</p>
        <p className="lead">{profile.intro}</p>
        <div className="btns">
          <a className="btn primary" href="#projets">Découvrir mes projets</a>
          <a className="btn" href="#contact">Me contacter</a>
          {profile.cvUrl && <a className="btn ghost" href={profile.cvUrl} download>Télécharger mon CV</a>}
        </div>
      </div>
      <div className="hero-visual" aria-hidden={!profile.photoUrl}>
        {profile.photoUrl
          ? <img src={profile.photoUrl} alt={`Portrait de ${profile.firstName} ${profile.lastName}`} />
          : <div className="monogram"><span>{profile.firstName[0]}{profile.lastName[0]}</span></div>}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="apropos" className="wrap" aria-labelledby="t-about">
      <Reveal><Title id="t-about" kicker="À propos">Qui suis-je ?</Title>
        <div className="about">{about.map((p) => <p key={p}>{p}</p>)}</div></Reveal>
    </section>
  )
}

export function Skills() {
  return (
    <section id="competences" className="wrap" aria-labelledby="t-skills">
      <Reveal><Title id="t-skills" kicker="Compétences">Ce que je sais faire</Title>
        <p className="note">Pas de pourcentages : chaque technologie indique où je l’ai pratiquée.</p></Reveal>
      <div className="grid-3">
        {skills.map((g) => (
          <Reveal key={g.title} className="card">
            <h3>{g.title}</h3>
            <ul className="skill-list">
              {g.items.map((i) => (
                <li key={i.name}><strong>{i.name}</strong> <span className={`tag ${i.origin}`}>{originLabel[i.origin]}</span><br /><span className="muted">{i.desc}</span></li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Journey() {
  return (
    <section id="parcours" className="wrap" aria-labelledby="t-journey">
      <Reveal><Title id="t-journey" kicker="Parcours">Formation et expérience</Title></Reveal>
      <ol className="timeline">
        {journey.map((j) => (
          <Reveal as="li" key={j.title} className="t-item">
            <span className="period">{j.period}</span>
            <h3>{j.title}</h3>
            <p className="muted">{j.place}</p>
            <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

const Shot = ({ p }) => p.image
  ? <img className="shot" src={p.image} alt={`Capture d’écran de ${p.name}`} loading="lazy" />
  : <div className="shot placeholder">Capture d’écran à ajouter</div>

function Links({ p }) {
  if (!p.github && !p.demo) return null
  return (
    <div className="btns">
      {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer">Code source</a>}
      {p.demo && <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">Démonstration</a>}
    </div>
  )
}

function Details({ p }) {
  const list = (arr) => <ul>{arr.map((x) => <li key={x}>{x}</li>)}</ul>
  return (
    <div className="details">
      <Shot p={p} />
      <h4>Le besoin</h4><p>{p.need}</p>
      {p.features.length > 0 && <><h4>Fonctionnalités</h4>{list(p.features)}</>}
      <h4>Technologies</h4><p>{p.tech.join(' · ')}</p>
      {Array.isArray(p.role)
        ? <><h4>Mon rôle</h4><ul>{p.role.map((r) => <li key={r.label}><strong>{r.label} :</strong> {r.text}</li>)}</ul></>
        : p.role && <><h4>Mon rôle</h4><p>{p.role}</p></>}
      {p.difficulties?.length > 0 && <><h4>Difficultés rencontrées</h4>{list(p.difficulties)}</>}
      {p.learnings.length > 0 && <><h4>Ce que j’en retiens</h4>{list(p.learnings)}</>}
      <Links p={p} />
    </div>
  )
}

export function Projects() {
  const [open, setOpen] = useState(null)
  const current = projects.find((p) => p.id === open)
  return (
    <section id="projets" className="wrap" aria-labelledby="t-projects">
      <Reveal><Title id="t-projects" kicker="Projets">Mes deux projets</Title></Reveal>
      <div className="grid-2">
        {projects.map((p) => (
          <Reveal key={p.id} className={`card project ${p.featured ? 'featured' : ''}`}>
            <Shot p={p} />
            <h3>{p.name}</h3>
            <p>{p.short}</p>
            <p className="tech">{p.tech.slice(0, 5).join(' · ')}</p>
            <button className="btn primary" onClick={() => setOpen(p.id)} aria-haspopup="dialog">Voir les détails</button>
          </Reveal>
        ))}
      </div>
      {current && <Modal title={current.name} onClose={() => setOpen(null)}><Details p={current} /></Modal>}
    </section>
  )
}

export function Value() {
  return (
    <section className="wrap" aria-labelledby="t-value">
      <Reveal><Title id="t-value" kicker="Mon apport">Ce que je peux apporter</Title></Reveal>
      <div className="grid-3">
        {value.map((v) => <Reveal key={v.title} className="card"><h3>{v.title}</h3><p className="muted">{v.text}</p></Reveal>)}
      </div>
    </section>
  )
}

export function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const direct = Boolean(profile.formEndpoint)

  const submit = async (e) => {
    e.preventDefault()
    if (!direct) {
      const body = `${f.message}\n\n— ${f.name} (${f.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Contact via le portfolio')}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(f),
      })
      if (res.ok) { setStatus('sent'); setF({ name: '', email: '', message: '' }) } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="wrap" aria-labelledby="t-contact">
      <Reveal><Title id="t-contact" kicker="Contact">Parlons-en</Title></Reveal>
      <div className="contact">
        <Reveal className="card">
          <p>Un stage, une alternance ou un emploi à proposer ? Écrivez-moi.</p>
          <ul className="links">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            {profile.github && <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>}
            {profile.linkedin && <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
          </ul>
        </Reveal>
        <Reveal className="card">
          <form onSubmit={submit}>
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" required value={f.name} onChange={set('name')} autoComplete="name" />
            <label htmlFor="email">Adresse e-mail</label>
            <input id="email" name="email" type="email" required value={f.email} onChange={set('email')} autoComplete="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required value={f.message} onChange={set('message')} />
            <button className="btn primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi…' : direct ? 'Envoyer le message' : 'Écrire par e-mail'}
            </button>
            <p className="note" role="status" aria-live="polite">
              {status === 'sent' && 'Merci, votre message a bien été envoyé.'}
              {status === 'error' && `L’envoi a échoué. Vous pouvez m’écrire directement à ${profile.email}.`}
              {(status === 'idle' || status === 'sending') && (direct
                ? 'Votre message est envoyé directement dans ma boîte e-mail.'
                : 'Ce formulaire ouvre votre application e-mail avec le message prêt à envoyer. Il n’enregistre rien.')}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer"><div className="wrap">
      <p><strong>{profile.firstName} {profile.lastName}</strong> · Développeuse web junior, à la recherche d’opportunités.</p>
      <p className="muted">
        <a href={`mailto:${profile.email}`}>E-mail</a>
        {profile.github && <> · <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></>}
        {profile.linkedin && <> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></>}
        {' '}· © {new Date().getFullYear()}
      </p>
    </div></footer>
  )
}
