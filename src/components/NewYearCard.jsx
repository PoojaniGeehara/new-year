import { useEffect } from "react";
import Background from "./Background";
import Sunburst from "./Sunburst";
import KolamDots from "./KolamDots";
import OilLamp from "./OilLamp";
import Year from "./Year";
import Greetings from "./Greetings";
import Divider from "./Divider";
import Message from "./Message";
import Pills from "./Pills";
import Closing from "./Closing";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Noto+Sans+Sinhala:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

  .ny-root {
    --gold: #d4af37;
    --light-gold: #f5e6ab;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, #1a1405 0%, #050401 100%);
    color: var(--light-gold);
    font-family: 'Playfair Display', serif;
    padding: 40px 20px;
    text-align: center;
  }

  .ny-page {
    max-width: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  .ny-year {
    font-family: 'Cinzel', serif;
    font-size: clamp(4rem, 10vw, 6rem);
    font-weight: 700;
    background: linear-gradient(to bottom, #f5e6ab, #b8860b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: -15px 0;
  }

  .ny-sinhala, .ny-tamil { font-size: 1.7rem; margin-bottom: 5px; }
  .ny-eng { font-size: 1.1rem; font-style: italic; letter-spacing: 4px; color: var(--gold); text-transform: uppercase; margin-top: 5px;}

  .ny-divider { display: flex; align-items: center; gap: 15px; width: 80%; margin: 15px 0; }
  .ny-divider-line { height: 1px; flex-grow: 1; background: linear-gradient(to right, transparent, var(--gold), transparent); }
  .ny-divider-dot { width: 6px; height: 6px; background: var(--gold); border-radius: 50%; box-shadow: 0 0 10px var(--gold); }

  .ny-message { font-size: 1.1rem; line-height: 1.8; color: #e0d5b0; max-width: 600px; }
  .ny-message strong { color: var(--gold); }

  .ny-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin: 15px 0; }
  .ny-pill { 
    padding: 6px 18px; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 25px; 
    font-size: 0.85rem; background: rgba(212, 175, 55, 0.05); display: flex; align-items: center; gap: 8px;
  }
  .ny-pill-icon { color: var(--gold); }

  .ny-closing-main { font-family: 'Cinzel', serif; font-size: 1.6rem; letter-spacing: 5px; color: var(--gold); margin-top: 20px; }
  .ny-closing-sub { font-size: 0.85rem; opacity: 0.4; letter-spacing: 3px; margin-top: 3px; }
`;

export default function NewYearCard() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = styles;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);

  return (
    <div className="ny-root">
       {/* Background Animations */}
      <Background />
      <Sunburst />
      <KolamDots />
      <div className="ny-page">
        <OilLamp />
        <Year />
        <Greetings />
        <Divider />
        <Message />
        <Pills />
        <Closing />
      </div>
    </div>
  );
}