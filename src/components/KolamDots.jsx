export default function KolamDots() {

  const rings = [80,120,160,200,240]; 
  const dots = 24;

  return (
    <div className="kolam-container">
      {rings.map((radius, rIndex) =>
        Array.from({ length: dots }).map((_, i) => {
          const angle = (360 / dots) * i;
          const x = Math.cos(angle * Math.PI/180) * radius;
          const y = Math.sin(angle * Math.PI/180) * radius;

          return (
            <div
              key={`${rIndex}-${i}`}
              className="kolam-dot"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            />
          );
        })
      )}
    </div>
  );
}