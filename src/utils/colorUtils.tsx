// utils/colorUtils.tsx

export function generateRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

export function calculateContrast(color1: string, color2: string): number {
  const luminance = (color: string): number => {
    const rgb =
      color
        .replace("#", "")
        .match(/.{2}/g)
        ?.map((hex) => parseInt(hex, 16) / 255) || [];
    const [r, g, b] = rgb.map((val) =>
      val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = luminance(color1);
  const l2 = luminance(color2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

export function getContrastRating(contrast: number): string {
  if (contrast >= 7) return "AAA";
  if (contrast >= 4.5) return "AA";
  return "Fail";
}
