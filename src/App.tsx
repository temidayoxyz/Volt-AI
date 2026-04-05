import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Capabilities } from './pages/Capabilities';
import { Docs } from './pages/Docs';
import { Philosophy } from './pages/Philosophy';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/docs/*" element={<Docs />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-vercel-black rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-white rotate-45" />
                  </div>
                  <span className="font-semibold text-lg tracking-tightest">VOLT</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  High-performance automation and optimization agent for modern engineering teams.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-4">Product</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/capabilities" className="hover:text-vercel-black transition-colors">Capabilities</Link></li>
                  <li><Link to="/docs" className="hover:text-vercel-black transition-colors">Documentation</Link></li>
                  <li><Link to="/pricing" className="hover:text-vercel-black transition-colors">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-4">Company</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/philosophy" className="hover:text-vercel-black transition-colors">Philosophy</Link></li>
                  <li><Link to="/about" className="hover:text-vercel-black transition-colors">About</Link></li>
                  <li><a href="#" className="hover:text-vercel-black transition-colors">Careers</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold mb-4">Legal</h5>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link to="/privacy" className="hover:text-vercel-black transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-vercel-black transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-400">© 2026 Volt AI. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-vercel-black transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-vercel-black transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
