'use client'

import { useState } from 'react'

export default function RevealCode({ masked, full }: { masked: string; full: string }) {
  const [revealed, setRevealed] = useState(false)
  const shown = revealed ? full : masked
  const copy = async () => {
    try { await navigator.clipboard.writeText(shown) } catch {}
  }
  return (
    <div className="flex items-center gap-3">
      <code className="card px-3 py-2 text-lg">{shown}</code>
      <button className="btn btn-secondary" onClick={() => setRevealed(v => !v)}>
        {revealed ? 'Hide' : 'Reveal'}
      </button>
      <button className="btn btn-ghost" onClick={copy}>Copy</button>
    </div>
  )
}

