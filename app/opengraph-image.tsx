import { ImageResponse } from "next/og";
export const alt = "Faith Nte — AI automation consultant in Didcot, Oxfordshire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "72px", background: "#f6f0e8", color: "#30171d" }}><div style={{ fontSize: 32 }}>Faith Nte</div><div style={{ fontSize: 78, lineHeight: 1.05, maxWidth: 1000 }}>AI automation consulting for marketing and CRM.</div><div style={{ fontSize: 26 }}>Didcot, Oxfordshire · faithnte.com</div></div>, size);
}
