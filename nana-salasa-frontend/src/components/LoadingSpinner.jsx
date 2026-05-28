export default function LoadingSpinner({ size = 'md', text = 'Loading…' }) {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16">
      <div
        className={`${sizes[size]} rounded-full border-2 border-[#2e2c40] border-t-[#a89ef5] animate-spin`}
      />
      {text && (
        <p className="text-sm text-[#5c5a6e]">{text}</p>
      )}
    </div>
  )
}