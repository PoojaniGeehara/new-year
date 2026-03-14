export default function OilLamp() {
  return (
    <div className="ny-lamp">
      <svg width="76" height="96" viewBox="0 0 76 96" xmlns="http://www.w3.org/2000/svg">
        <g className="ny-flame">
          <ellipse cx="38" cy="20" rx="6" ry="10" fill="#ffe066" opacity="0.95" />
          <ellipse cx="38" cy="24" rx="4" ry="6.5" fill="#ffaa22" opacity="0.85" />
          <ellipse cx="38" cy="27" rx="2.2" ry="3.5" fill="#ff6600" opacity="0.7" />
        </g>
        <ellipse cx="38" cy="26" rx="16" ry="10" fill="#f5c842" opacity="0.07" />
        <rect x="36" y="29" width="4" height="7" rx="2" fill="#c8a030" />
        <path d="M24 37 Q22 50 20 59 Q18 65 21 69 Q24 73 38 74 Q52 73 55 69 Q58 65 56 59 Q54 50 52 37 Z" fill="#b8860b" />
        <path d="M24 37 Q22 50 20 59 Q18 65 21 69 Q24 73 38 74 Q52 73 55 69 Q58 65 56 59 Q54 50 52 37 Z" fill="none" stroke="#f5c842" strokeWidth="0.8" opacity="0.35" />
        <path d="M29 43 Q27 51 27 57" stroke="#ffe066" strokeWidth="1.2" fill="none" opacity="0.35" strokeLinecap="round" />
        <ellipse cx="38" cy="74" rx="19" ry="4.5" fill="#8b6914" />
        <rect x="19" y="74" width="38" height="4" rx="2" fill="#7a5c10" />
        <rect x="36" y="78" width="4" height="10" rx="2" fill="#8b6914" />
        <ellipse cx="38" cy="89" rx="16" ry="4" fill="#a07820" />
      </svg>
    </div>
  );
}