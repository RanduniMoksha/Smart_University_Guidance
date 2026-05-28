import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const navLinks = [
    { label: 'Search Degrees', to: '/search' },
    { label: 'Universities', to: '/universities' },
    { label: 'How it works', to: '/how-it-works' },
  ]

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-[#0f0f13]/95 backdrop-blur border-b border-white/[0.06]">
      {/* Logo */}
      <Link to="/" className="text-[#a89ef5] text-xl font-medium tracking-tight no-underline">
        නැණ<span className="text-white">SALASA</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-7 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm no-underline transition-colors ${
              location.pathname === link.to
                ? 'text-[#a89ef5]'
                : 'text-[#9d9bac] hover:text-[#e8e6f0]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-3 items-center">
        <Link to="/login">
          <button className="border border-[#a89ef5]/40 text-[#a89ef5] rounded-lg px-4 py-2 text-sm hover:bg-[#a89ef5]/10 transition-colors">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-[#4e44c0] text-[#e0dcff] rounded-lg px-4 py-2 text-sm hover:bg-[#5c52d0] transition-colors">
            Register
          </button>
        </Link>
      </div>
    </nav>
  )
}