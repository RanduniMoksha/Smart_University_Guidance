import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
      <Link to="/" className="text-[#a89ef5] text-base font-medium no-underline">
        නැණ<span className="text-white">SALASA</span>
      </Link>
      <p className="text-xs text-[#3e3c50]">
        © 2025 නැණSALASA · Smart Student Guidance System · Sri Lanka
      </p>
      <div className="flex gap-5">
        {['Privacy', 'About', 'Contact'].map((item) => (
          <span key={item} className="text-xs text-[#3e3c50] hover:text-[#7a788e] cursor-pointer transition-colors">
            {item}
          </span>
        ))}
      </div>
    </footer>
  )
}