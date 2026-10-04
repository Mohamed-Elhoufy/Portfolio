// Subtle technical backdrop for the dark hero: grid + soft glows + a faint network graph
// (a nod to pipe networks and AI agent graphs). Purely decorative.
const nodes = [
  [90, 60], [210, 130], [340, 70], [470, 150], [590, 90],
  [150, 250], [290, 230], [420, 290], [560, 250], [670, 330],
  [70, 380], [220, 400], [360, 420], [500, 410], [640, 470],
]
const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 6], [2, 6], [3, 7], [4, 8],
  [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [5, 11], [6, 12], [7, 13], [8, 14], [10, 11], [11, 12], [12, 13], [13, 14],
]

export default function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-pattern absolute inset-0" />
      <div className="animate-drift absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="animate-drift absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl [animation-delay:-9s]" />
      <svg
        viewBox="0 0 740 520"
        className="absolute right-[-60px] top-1/2 hidden w-[760px] -translate-y-1/2 opacity-60 lg:block"
        fill="none"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="rgba(120,190,255,0.16)"
            strokeWidth="1"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 4 === 0 ? 4 : 2.5}
            fill="#38c6dc"
            className="animate-pulse-soft"
            style={{ animationDelay: `${(i % 5) * -1.1}s` }}
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper/0 to-transparent" />
    </div>
  )
}
