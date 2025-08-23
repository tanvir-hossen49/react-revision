import { useState } from "react";

const colors = ["red", "green", "blue", "gray", "yellow", "purple", "black", "white"];

// function to calculate brightness & return white/black text
function getContrastColor(color) {
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  const hex = ctx.fillStyle; // normalize color name → hex
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
}

function App() {
  const [bgColor, setBgColor] = useState("red");

  return (
    <div
      className="flex items-end justify-center min-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full mx-10 p-4 rounded-4xl flex justify-between mb-10 bg-green-100 flex-wrap gap-4">
        {colors.map((c, index) => {
          const textColor = getContrastColor(c);
          return (
            <div
              key={index}
              style={{ "--my-color": c }}
              className="w-1/12 h-20 rounded-lg bg-[var(--my-color)] hover:opacity-80 transition-colors duration-300 flex"
              onClick={() => setBgColor(c)}
            >
              <button
                style={{ color: textColor }}
                className="w-full h-full font-bold cursor-pointer capitalize"
              >
                {c}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;