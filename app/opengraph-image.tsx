import { ImageResponse } from "next/og";

export const alt = "Seacoast Home Partners. Your home, Handled.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f1ea",
          color: "#26343a",
          padding: "72px 80px",
          borderBottom: "24px solid #26343a",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, color: "#3d4c52" }}>
          RYE · NEW CASTLE · PORTSMOUTH · NORTH HAMPTON
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700 }}>Your home, Handled.</div>
          <div style={{ fontSize: 38, marginTop: 20, color: "#3d4c52" }}>
            Home management, concierge, and project coordination
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 34 }}>
          <span style={{ fontWeight: 700 }}>Seacoast Home Partners</span>
          <span>(603) 396-7828</span>
        </div>
      </div>
    ),
    size,
  );
}
