import Nav from '../components/Nav'
import Science from '../components/Science'
import Footer from '../components/Footer'

export default function Research() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Nav />
      <div className="flex-1">
        <Science />
      </div>
      <Footer />
    </div>
  )
}
