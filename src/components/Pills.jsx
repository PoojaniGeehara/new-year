const pills = [
  { icon: "☀", text: "Health & Longevity" },
  { icon: "★", text: "Wealth & Prosperity" },
  { icon: "♡", text: "Love & Togetherness" },
  { icon: "✦", text: "Peace & Harmony" },
  { icon: "◈", text: "Wisdom & Blessings" },
];

export default function Pills() {
  return (
    <div className="ny-pills">
      {pills.map((p, i) => (
        <span key={i} className="ny-pill">
          <span className="ny-pill-icon">{p.icon}</span>
          {p.text}
        </span>
      ))}
    </div>
  );
}