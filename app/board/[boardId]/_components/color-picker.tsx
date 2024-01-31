"use client";

import { Color } from "@/types/canvas";
import { colorToCss } from "@/lib/utils";

interface ColorPickerProps {
  onChange: (color: Color) => void;
};

export const ColorPicker = ({
  onChange,
}: ColorPickerProps) => {
  const colorList: Color[] = [
    { r: 243, g: 82, b: 35 },
    { r: 255, g: 249, b: 177 },
    { r: 68, g: 202, b: 99 },
    { r: 39, g: 142, b: 237 },
    { r: 155, g: 105, b: 245 },
    { r: 252, g: 142, b: 42 },
    { r: 0, g: 0, b: 0 },
    { r: 255, g: 255, b: 255 },
    // Add more colors here...
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
    { r: 128, g: 128, b: 128 },
    // Additional colors:
    { r: 255, g: 0, b: 255 },
    { r: 0, g: 255, b: 255 },
    { r: 255, g: 255, b: 0 },
    { r: 128, g: 0, b: 128 },
    { r: 0, g: 128, b: 128 },
    { r: 128, g: 128, b: 0 },
    { r: 192, g: 192, b: 192 },
    { r: 128, g: 0, b: 0 },
    { r: 0, g: 128, b: 0 },
    { r: 0, g: 0, b: 128 },
    { r: 128, g: 128, b: 128 },
    { r: 255, g: 128, b: 0 },
    { r: 128, g: 255, b: 0 },
    { r: 0, g: 128, b: 255 },
    { r: 255, g: 0, b: 128 },
    { r: 128, g: 0, b: 255 },
    { r: 0, g: 255, b: 128 },
    { r: 255, g: 128, b: 255 },
    { r: 128, g: 255, b: 255 },
    { r: 255, g: 255, b: 128 },
    { r: 192, g: 128, b: 0 },
    { r: 0, g: 192, b: 128 },
    { r: 128, g: 0, b: 192 },
    { r: 192, g: 0, b: 128 },
    { r: 128, g: 192, b: 0 },
    { r: 0, g: 128, b: 192 },
    { r: 128, g: 0, b: 128 },
    { r: 192, g: 128, b: 128 },
    { r: 128, g: 192, b: 128 },
    { r: 128, g: 128, b: 192 },
    { r: 255, g: 192, b: 128 },
    { r: 192, g: 255, b: 128 },
    { r: 128, g: 192, b: 255 },
    { r: 255, g: 128, b: 192 },
    { r: 192, g: 128, b: 255 },
    { r: 128, g: 255, b: 192 },
    { r: 255, g: 192, b: 255 },
    { r: 192, g: 255, b: 192 },
    { r: 255, g: 255, b: 192 },
    { r: 224, g: 192, b: 128 },
    { r: 128, g: 224, b: 192 },
    { r: 192, g: 128, b: 224 },
    { r: 224, g: 128, b: 192 },
    { r: 128, g: 192, b: 224 },
    { r: 192, g: 224, b: 128 },
    { r: 128, g: 192, b: 128 },
    { r: 224, g: 192, b: 192 },
    { r: 192, g: 224, b: 192 },
    { r: 192, g: 192, b: 224 },
  ];

  return (
    <div
      className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200"
    >
      {colorList.map((color, index) => (
        <ColorButton key={index} color={color} onClick={onChange} />
      ))}
    </div>
  )
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
};

const ColorButton = ({
  onClick,
  color,
}: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div 
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  )
}
