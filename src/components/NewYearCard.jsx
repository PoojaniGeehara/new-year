import { useEffect, useRef } from "react";
import OilLamp from "./OilLamp";
import Year from "./Year";
import Greetings from "./Greetings";
import Divider from "./Divider";
import Message from "./Message";
import Pills from "./Pills";
import Closing from "./Closing";

const GOOGLE_FONTS = `...`; // keep your font imports
const styles = `...`;        // keep all your CSS

export default function NewYearCard() {
  const styleRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = styles;
    document.head.appendChild(tag);
    styleRef.current = tag;
    return () => tag.remove();
  }, []);

  return (
    <div className="ny-root">
      <div className="ny-bg" />
      <div className="ny-ring" />
      <div className="ny-ring" />
      <div className="ny-ring" />

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