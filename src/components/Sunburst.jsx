export default function Sunburst() {
  const rays = Array.from({ length: 36 });

  return (
    <div className="sunburst">
      {rays.map((_, i) => (
        <div
          key={i}
          className="sun-ray"
          style={{ transform: `rotate(${i * 10}deg)` }}
        />
      ))}
    </div>
  );
}