import ColorComponentsShowcase from "./ColorComponentsShowcase";
import { useState } from "react";
import {
  generateRandomColor,
  calculateContrast,
  getContrastRating,
} from "../utils/colorUtils";
import { Check, X } from "lucide-react";

const ColorCard = ({ color, label }) => (
  <div className="p-4 rounded-lg flex flex-row gap-4 items-center">
    <div
      className="md:w-24 w-12 h-10 mb-2 rounded"
      style={{ backgroundColor: color }}
    ></div>
    <div className="text-center">
      <p className="font-bold">{label}</p>
      <p className="italic">{color}</p>
    </div>
  </div>
);

const ContrastInfo = ({ contrast, rating }) => {
  return (
    <section className="flex flex-row items-center justify-center gap-6 p-4 w-3/3 rounded-lg">
      <div className="flex flex-row gap-6 items-center">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">{contrast.toFixed(2)}:1</p>
          <h2 className="text-md text-gray-700 font-light text-center">
            Contrast Ratio
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-xl">{rating}</p>
          <p className="text-md text-gray-700 font-light text-center">
            WCAG Rating:
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex items-center text-green-600">
            <Check className="mr-2" />
            <span className="font-semibold">AA</span>
          </div>
          {contrast >= 7 && (
            <div className="flex items-center text-green-600">
              <Check className="mr-2" />
              <span className="font-semibold">AAA</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Button = ({ onClick, icon, label, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 border rounded-lg px-4 py-2 ${className}`}
  >
    {icon && <span className="w-6 h-6">{icon}</span>}
    {label && <span>{label}</span>}
  </button>
);

export default function ColorContrastGenerator() {
  const generateValidColorPair = () => {
    let color1, color2, contrast;
    do {
      color1 = generateRandomColor();
      color2 = generateRandomColor();
      contrast = calculateContrast(color1, color2);
    } while (contrast < 4.5);
    return { color1, color2, contrast };
  };

  const initialColors = generateValidColorPair();
  const [color1, setColor1] = useState(initialColors.color1);
  const [color2, setColor2] = useState(initialColors.color2);
  const [contrast, setContrast] = useState(initialColors.contrast);
  const [rating, setRating] = useState(
    getContrastRating(initialColors.contrast)
  );

  const generateColors = () => {
    const newColors = generateValidColorPair();
    setColor1(newColors.color1);
    setColor2(newColors.color2);
    setContrast(newColors.contrast);
    setRating(getContrastRating(newColors.contrast));
  };

  const swapColors = () => {
    setColor1(color2);
    setColor2(color1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-4 rounded-lg w-full">
        <ContrastInfo contrast={contrast} rating={rating} />
        <div className="flex flex-row gap-2 items-center">
          <ColorCard color={color1} label="" />
          <Button
            onClick={swapColors}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-switch-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
                <path d="M18 4l3 3l-3 3" />
                <path d="M3 7h5l7 10h6" />
                <path d="M18 20l3 -3l-3 -3" />
              </svg>
            }
            label=""
          />
          <ColorCard color={color2} label="" />
        </div>
        <Button
          onClick={generateColors}
          label="New Color"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          }
        />
      </div>
      <ColorComponentsShowcase color1={color1} color2={color2} />
    </div>
  );
}
