export default function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="particle" />
      ))}
    </div>
  );
}