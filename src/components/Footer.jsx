import { Link } from 'react-router-dom'
import { APPS } from '../data/apps'

export default function Footer() {
  return (
    <footer className="bg-cherry text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/cherri-logo-white.png" alt="Cherri" className="h-16 object-contain mb-4" />
            <p className="text-white text-sm leading-relaxed font-body">
              Where daydreams work! An innovation hub born from the imagination of a curious 9-year-old. Where challenges become apps and wild ideas become reality.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="/#story" className="text-white hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/research" className="text-white hover:text-white transition-colors">The Research</a></li>
              <li><a href="/#apps" className="text-white hover:text-white transition-colors">Daydreams Built</a></li>
              <li><a href="/#ideas" className="text-white hover:text-white transition-colors">Ideas Lab</a></li>
            </ul>
            <h4 className="font-display font-bold text-lg mb-4 mt-6">Our Apps</h4>
            <ul className="space-y-2 text-sm font-body">
              {APPS.map(app => (
                <li key={app.id}>
                  <a href={app.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors">
                    {app.emoji} {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm font-body mb-6">
              <li><Link to="/privacy" className="text-white hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white hover:text-white transition-colors">Terms and Conditions</Link></li>
            </ul>

            <h4 className="font-display font-bold text-lg mb-4">Say Hello</h4>
            <ul className="space-y-2 text-sm text-white font-body">
              <li><a href="mailto:daydream@cherri.group" className="hover:text-white transition-colors">daydream@cherri.group</a></li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 space-y-3">
          <p className="text-white text-xs text-center font-body">
            She spoke. He listened. He started building. A <strong className="text-white">CHERRI GROUP</strong> initiative by <strong className="text-white">Anthra Rajesh</strong>, built by her Dada, <strong className="text-white">Rajesh Balasubramaniyan</strong>
          </p>
          <p className="text-white text-xs text-center font-body">
            Built with 🍒 in Bengaluru &middot; &copy; {new Date().getFullYear()} CHERRI GROUP. Where Daydreams Work!
          </p>
        </div>
      </div>
    </footer>
  )
}
