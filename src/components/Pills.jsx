const pills = [
  "☀ Health & Longevity",
  "★ Wealth & Prosperity",
  "♡ Love & Togetherness",
  "✦ Peace & Harmony",
  "◈ Wisdom & Blessings",
];

export default function Pills() {
  return (
    <div className="ny-pills">
      {pills.map((p) => (
        <span key={p} className="ny-pill">{p}</span>
      ))}
    </div>
  );
}