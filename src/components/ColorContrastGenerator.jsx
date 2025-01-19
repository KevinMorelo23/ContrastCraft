import ColorComponentsShowcase from "./ColorComponentsShowcase";
import { useState, useEffect } from "react";
import {
  generateRandomColor,
  calculateContrast,
  getContrastRating,
} from "../utils/colorUtils";
import { Check, X } from "lucide-react";

const ColorCard = ({ color, label }) => (
  <div className="p-4 rounded-lg shadow-md flex flex-col  md:flex-row  items-center gap-4 bg-white mr-1 ml-1">
    <div
      className="w-32 h-32 rounded-lg mb-2 "
      style={{ backgroundColor: color }}
    ></div>
    <div className="text-center">
      <p className="font-bold">{label}</p>
      <p className="font-mono">{color}</p>
    </div>
  </div>
);

const ContrastInfo = ({ contrast, rating }) => {
  const isAA = contrast >= 4.5;
  const isAAA = contrast >= 7;

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-md   text-black">Contrast Ratio</h2>
        <p className="text-4xl font-bold ">{contrast.toFixed(2)}:1</p>
      </div>
      <div className="flex flex-col items-center ">
        <p className="text-md   text-black">
          WCAG Rating:{" "}
          <p className="font-bold flex flex-col items-center text-4xl  ">
            {rating}
          </p>
        </p>
      </div>

      <div className=" flex flex-row items-center justify-center gap-4">
        <div
          className={`flex items-center ${
            isAA ? "text-green-600" : "text-red-600"
          }`}
        >
          {isAA ? <Check className="mr-2" /> : <X className="mr-2" />}
          <span className="font-semibold">AA</span>
        </div>
        <div
          className={`flex items-center ${
            isAAA ? "text-green-600" : "text-red-600"
          }`}
        >
          {isAAA ? <Check className="mr-2" /> : <X className="mr-2" />}
          <span className="font-semibold">AAA</span>
        </div>
      </div>
    </div>
  );
};

const Button = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className=" text-black bg-white font-bold py-2 px-4 rounded-lg shadow-md "
  >
    {label}
  </button>
);

export default function ColorContrastGenerator() {
  const [color1, setColor1] = useState(generateRandomColor());
  const [color2, setColor2] = useState(generateRandomColor());

  const contrast = calculateContrast(color1, color2);
  const rating = getContrastRating(contrast);

  const generateColors = () => {
    setColor1(generateRandomColor());
    setColor2(generateRandomColor());
  };

  const swapColors = () => {
    setColor1(color2);
    setColor2(color1);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-4 ">
        <ContrastInfo contrast={contrast} rating={rating} />
        <div className="flex flex-row  gap-4">
          <ColorCard color={color1} label="Color 1" />
          <ColorCard color={color2} label="Color 2" />
        </div>
      </div>
      <div className="flex gap-4 mt-4 mb-4">
        <Button onClick={generateColors} label="Generate New Colors" />
        <Button onClick={swapColors} label="Swap Colors" />
      </div>

      <ColorComponentsShowcase color1={color1} color2={color2} />
    </div>
  );
}
