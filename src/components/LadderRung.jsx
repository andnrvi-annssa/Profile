// Motif khas website ini: diagram ladder PLC. Dua rel vertikal, setiap anak tangga berisi
// satu "kontak" [ ] dan satu "koil" ( ). Saat halaman dibuka, arus mengalir satu kali
// lalu node menyala — itulah satu-satunya animasi otomatis di hero.
const rungs = [
  ['AUTOMATION', 'PLC'],
  ['ELECTRONICS', 'CREATIVE THINKING'],
]

export default function LadderRung() {
  let nodeIndex = 0
  return (
    <div
      className="flex w-full max-w-md items-stretch"
      role="img"
      aria-label="Diagram ladder: Automation, PLC, Electronics, Creative Thinking"
    >
      <span aria-hidden="true" className="w-[3px] rounded-full bg-ink/60" />
      <div className="flex flex-1 flex-col justify-center gap-5 py-3">
        {rungs.map(([contact, coil], r) => {
          const ci = nodeIndex++
          const oi = nodeIndex++
          return (
            <div key={contact} className="flex items-center" aria-hidden="true">
              <span className="h-[2px] w-2 bg-ink/50 sm:w-4" />
              <span
                style={{ '--i': ci }}
                className="rung-node whitespace-nowrap border-x-2 border-ink/55 px-2 py-1 text-[10px] font-semibold tracking-wider text-ink sm:px-3 sm:text-xs"
              >
                {contact}
              </span>
              <span style={{ '--r': r }} className="rung-current h-[2px] min-w-4 flex-1 bg-ink/40" />
              <span
                style={{ '--i': oi }}
                className="rung-node whitespace-nowrap rounded-full border-2 border-ink/55 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-ink sm:px-3.5 sm:text-xs"
              >
                {coil}
              </span>
              <span className="h-[2px] w-2 bg-ink/50 sm:w-4" />
            </div>
          )
        })}
      </div>
      <span aria-hidden="true" className="w-[3px] rounded-full bg-ink/60" />
    </div>
  )
}
