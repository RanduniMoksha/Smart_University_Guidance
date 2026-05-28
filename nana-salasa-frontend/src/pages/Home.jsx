import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import DegreeCard from '../components/DegreeCard'

// ── Static Data ──────────────────────────────────────────────────────────────

const STATS = [
  { num: '15+', label: 'Universities' },
  { num: '200+', label: 'Degree Programs' },
  { num: '6', label: 'A/L Streams' },
  { num: '25', label: 'Districts' },
]

const FEATURES = [
  {
    icon: '🧠',
    color: { bg: 'bg-[#4e44c0]/15', text: 'text-[#a89ef5]' },
    title: 'Smart recommendations',
    desc: 'Get personalized course suggestions based on your Z-score, stream, and district cutoff marks.',
  },
  {
    icon: '🔍',
    color: { bg: 'bg-[#1d9e75]/12', text: 'text-[#5dcaa5]' },
    title: 'Degree search & filter',
    desc: 'Search across all state universities, filter by faculty, stream, or district with live results.',
  },
  {
    icon: '📊',
    color: { bg: 'bg-[#ef9f27]/12', text: 'text-[#ef9f27]' },
    title: 'Cutoff mark analysis',
    desc: 'Compare historical cutoff marks and see your chance level — safe, moderate, or competitive.',
  },
  {
    icon: '🏛️',
    color: { bg: 'bg-[#d4537e]/12', text: 'text-[#ed93b1]' },
    title: 'University profiles',
    desc: 'Explore faculties, intake numbers, and degree details for every state university.',
  },
  {
    icon: '🔖',
    color: { bg: 'bg-[#378add]/12', text: 'text-[#85b7eb]' },
    title: 'Save & track',
    desc: 'Bookmark your favourite degree programs and revisit your recommendations anytime.',
  },
  {
    icon: '📱',
    color: { bg: 'bg-[#a89ef5]/10', text: 'text-[#a89ef5]' },
    title: 'Fully responsive',
    desc: 'Works seamlessly on desktop, tablet, and mobile — access from anywhere.',
  },
]

const POPULAR_DEGREES = [
  {
    id: 1,
    name: 'BSc Computer Science',
    university: 'University of Colombo',
    stream: 'Physical Science',
    zscore: '1.8',
    duration: 3,
    color: 'purple',
    icon: 'cs',
  },
  {
    id: 2,
    name: 'MBBS Medicine',
    university: 'University of Peradeniya',
    stream: 'Bioscience',
    zscore: '2.1',
    duration: 5,
    color: 'teal',
    icon: 'medicine',
  },
  {
    id: 3,
    name: 'BSc Engineering',
    university: 'University of Moratuwa',
    stream: 'Physical Science',
    zscore: '1.9',
    duration: 4,
    color: 'amber',
    icon: 'engineering',
  },
  {
    id: 4,
    name: 'LLB Law',
    university: 'University of Colombo',
    stream: 'Arts',
    zscore: '1.6',
    duration: 4,
    color: 'blue',
    icon: 'default',
  },
]

// ── HOW IT WORKS steps ───────────────────────────────────────────────────────

const STEPS = [
  { step: '01', title: 'Enter your results', desc: 'Add your A/L stream, subjects, grades, and Z-score.' },
  { step: '02', title: 'Select your district', desc: 'Cutoff marks vary by district — choose yours for accuracy.' },
  { step: '03', title: 'Get recommendations', desc: 'Receive a ranked list of eligible degree programs instantly.' },
  { step: '04', title: 'Explore & apply', desc: 'View full university details and save your favourites.' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#0f0f13] text-[#e8e6f0] min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="text-center py-20 px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#a89ef5]/10 border border-[#a89ef5]/30 rounded-full px-4 py-1.5 text-xs text-[#a89ef5] mb-6">
          <span>✦</span>
          Smart University Guidance for Sri Lanka
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-medium text-[#f0eeff] leading-tight mb-5">
          Find Your Perfect{' '}
          <span className="text-[#a89ef5]">Degree</span>{' '}
          with Confidence
        </h1>

        {/* Sub-text */}
        <p className="text-[#8c8a9e] text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          Enter your A/L results and Z-score to discover eligible university courses
          tailored to your stream, district, and academic profile.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => navigate('/recommend')}
            className="bg-[#4e44c0] text-[#e0dcff] rounded-xl px-7 py-3 text-sm hover:bg-[#5c52d0] transition-colors flex items-center gap-2"
          >
            ✦ Get Recommendations
          </button>
          <button
            onClick={() => navigate('/search')}
            className="border border-[#a89ef5]/40 text-[#a89ef5] rounded-xl px-7 py-3 text-sm hover:bg-[#a89ef5]/10 transition-colors"
          >
            Browse Degrees
          </button>
        </div>
      </section>
      {/* ── Search Bar ── */}
      <div className="max-w-4xl mx-auto px-6 mb-14">
        <SearchBar />
      </div>

      {/* ── Stats Strip ── */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex bg-[#14121f] border border-white/[0.06] rounded-xl overflow-hidden divide-x divide-white/[0.06]">
          {STATS.map(({ num, label }) => (
            <div key={label} className="flex-1 text-center py-5 px-3">
              <div className="text-xl font-medium text-[#a89ef5]">{num}</div>
              <div className="text-xs text-[#5c5a6e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ── */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-xs text-[#5c5a6e] uppercase tracking-widest mb-2">Features</div>
        <h2 className="text-2xl font-medium text-[#f0eeff] mb-8">Everything you need to choose wisely</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-[#14121f] border border-white/[0.07] rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-xl ${f.color.bg} flex items-center justify-center text-xl mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-sm font-medium text-[#e0deee] mb-2">{f.title}</h3>
              <p className="text-xs text-[#6e6c7e] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular Degrees ── */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-xs text-[#5c5a6e] uppercase tracking-widest mb-2">Popular degrees</div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium text-[#f0eeff]">Trending programs this year</h2>
          <button
            onClick={() => navigate('/search')}
            className="text-sm text-[#a89ef5] hover:text-[#c4bcff] transition-colors"
          >
            View all →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {POPULAR_DEGREES.map((degree) => (
            <DegreeCard key={degree.id} degree={degree} />
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-xs text-[#5c5a6e] uppercase tracking-widest mb-2">How it works</div>
        <h2 className="text-2xl font-medium text-[#f0eeff] mb-10">Get started in 4 steps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {STEPS.map(({ step, title, desc }) => (
            <div key={step} className="bg-[#14121f] border border-white/[0.07] rounded-2xl p-5">
              <div className="text-3xl font-medium text-[#2e2c40] mb-4">{step}</div>
              <h4 className="text-sm font-medium text-[#e0deee] mb-2">{title}</h4>
              <p className="text-xs text-[#6e6c7e] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-[#1d1a2e] border border-[#a89ef5]/20 rounded-2xl p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-[#f0eeff] mb-3">
            Ready to find your path?
          </h2>
          <p className="text-[#7a788e] text-base mb-8 max-w-md mx-auto">
            Create a free account, enter your A/L results, and get personalized degree recommendations in seconds.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => navigate('/register')}
              className="bg-[#4e44c0] text-[#e0dcff] rounded-xl px-8 py-3 text-sm hover:bg-[#5c52d0] transition-colors"
            >
              Create free account
            </button>
            <button
              onClick={() => navigate('/login')}
              className="border border-white/10 text-[#9d9bac] rounded-xl px-8 py-3 text-sm hover:border-white/20 hover:text-[#e8e6f0] transition-colors"
            >
              Already have an account?
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}