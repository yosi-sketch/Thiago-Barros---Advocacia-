import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#0e100e", color: "#ffe0a0", fontFamily: "serif", fontSize: 80, border: "8px solid #c09040" }}>TB</div>, size);
}
