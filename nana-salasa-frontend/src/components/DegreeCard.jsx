import { useNavigate } from 'react-router-dom'

const iconMap = {
  cs: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6zM9 3v6h6" />
    </svg>
  ),
  medicine: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" />
    </svg>
  ),
  engineering: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    </svg>
  ),
  default: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
}

const colorMap = {
  purple: { bg: 'bg-[#4e44c0]/15', text: 'text-[#a89ef5]' },
  teal:   { bg: 'bg-[#1d9e75]/12', text: 'text-[#5dcaa5]' },
  amber:  { bg: 'bg-[#ef9f27]/12', text: 'text-[#ef9f27]' },
  blue:   { bg: 'bg-[#378add]/12', text: 'text-[#85b7eb]' },
  pink:   { bg: 'bg-[#d4537e]/12', text: 'text-[#ed93b1]' },
}

export default function DegreeCard({ degree }) {
  const navigate = useNavigate()
  const color = colorMap[degree.color] || colorMap.purple
  const icon = iconMap[degree.icon] || iconMap.default

  return (
    <div
      onClick={() => navigate(`/degrees/${degree.id}`)}
      className="bg-[#14121f] border border-white/[0.07] rounded-xl p-4 flex gap-4 items-start cursor-pointer hover:border-[#a89ef5]/30 transition-colors group"
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-lg ${color.bg} ${color.text} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-[#e0deee] mb-1 truncate group-hover:text-white transition-colors">
          {degree.name}
        </h4>
        <p className="text-xs text-[#5c5a6e] mb-2">
          {degree.university} · {degree.stream}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-block bg-[#a89ef5]/10 text-[#a89ef5] rounded-md px-2 py-0.5 text-xs">
            Z-score: {degree.zscore}+
          </span>
          {degree.duration && (
            <span className="inline-block bg-white/5 text-[#6e6c7e] rounded-md px-2 py-0.5 text-xs">
              {degree.duration} yrs
            </span>
          )}
        </div>
      </div>
    </div>
  )
}