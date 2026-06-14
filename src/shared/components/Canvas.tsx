import { applyHoverEffect } from "hover-effects-ts";
import { useEffect, useRef } from "react";
import { useMainContext } from "../../context/MainContext/useMainContext";
export function Canvas() {
  const { imageCanvasUrl } = useMainContext();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const effect = applyHoverEffect(imageRef.current, {
        effect: "pixel",
        radius: 500,
        blockSize: 200,
      });

      return () => {
        if (effect && typeof effect.destroy === "function") {
          effect.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="effect-wrapper">
      <img
        ref={imageRef}
        id="canvas"
        style={{ width: "100%", height: "100%", borderRadius: "36px" }}
        src={imageCanvasUrl}
        alt="About Me"
      />
    </div>
  );
}
