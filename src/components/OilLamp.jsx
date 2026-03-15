export default function OilLamp() {
  return (
    <div className="ny-lamp">
      <style>
        {`
        .ny-lamp { 
        animation: lampFloat 3.5s ease-in-out infinite; }
.ny-flame {
  animation: flicker 0.85s ease-in-out infinite alternate;
  transform-origin: 50% 100%;
}
        @keyframes lampFloat {
             0%,100% { transform: translateY(0); }
             50%      { transform: translateY(-10px); }
        }
          @keyframes flicker {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          .ny-flame { animation: flicker 3s infinite ease-in-out; transform-origin: center bottom; }
        `}
      </style>
      <svg width="76" height="96" viewBox="0 0 76 96" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' }}>
        <g className="ny-flame">
          <ellipse cx="38" cy="20" rx="6" ry="10" fill="#ffe066" />
          <ellipse cx="38" cy="24" rx="4" ry="6.5" fill="#ffaa22" />
        </g>
        <path d="M24 37 Q22 50 20 59 Q18 65 21 69 Q24 73 38 74 Q52 73 55 69 Q58 65 56 59 Q54 50 52 37 Z" fill="#8b6914" />
        <ellipse cx="38" cy="74" rx="19" ry="4.5" fill="#5c450b" />
        <rect x="36" y="78" width="4" height="10" rx="2" fill="#5c450b" />
        <ellipse cx="38" cy="89" rx="16" ry="4" fill="#8b6914" />
      </svg>
    </div>
  );


}
