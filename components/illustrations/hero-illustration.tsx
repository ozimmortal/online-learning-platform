export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="400" cy="300" r="250" fill="#E2F5E9" />
      <path
        d="M300 200 L500 200 L400 400 Z"
        fill="#22C55E"
        opacity="0.8"
      />
      <circle cx="400" cy="180" r="60" fill="#16A34A" />
      <rect x="320" y="280" width="160" height="100" rx="10" fill="#86EFAC" />
      <circle cx="280" cy="420" r="40" fill="#22C55E" opacity="0.6" />
      <circle cx="520" cy="420" r="40" fill="#22C55E" opacity="0.6" />
      <path
        d="M360 180 Q400 140 440 180"
        stroke="#FFFFFF"
        strokeWidth="8"
        fill="none"
      />
      {/* Abstract learning symbols */}
      <g transform="translate(340, 300)">
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={i * 30}
            width="20"
            height="60"
            rx="4"
            fill="#FFFFFF"
            opacity={0.8 - i * 0.2}
          />
        ))}
      </g>
    </svg>
  );
}