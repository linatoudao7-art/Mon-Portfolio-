import Navbar from './components/Navbar.jsx'
import { Hero, About, Skills, Journey, Projects, Value, Contact, Footer } from './sections/index.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#apropos">Aller au contenu</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Journey /><Projects /><Value /><Contact />
      </main>
      <Footer />
    </>
  )
}
