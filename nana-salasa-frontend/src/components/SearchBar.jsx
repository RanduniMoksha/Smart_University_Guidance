import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ placeholder = 'Search degree programs, universities or faculties…' }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="flex bg-[#1a1926] border border-white/10 rounded-xl overflow-hidden items-center px-4 py-1.5 gap-2 w-full">
      {/* Search Icon */}
      <svg className="w-4 h-4 text-[#5c5a6e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-[#e8e6f0] text-sm placeholder-[#5c5a6e] py-2"
      />

      <button
        onClick={handleSearch}
        className="bg-[#4e44c0] text-[#e0dcff] rounded-lg px-5 py-2 text-sm hover:bg-[#5c52d0] transition-colors flex items-center gap-2 flex-shrink-0"
      >
        Search
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  )
}