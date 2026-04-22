import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Martín Morales · Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "80px 100px",
				backgroundColor: "#0c0c0e",
				fontFamily: "serif",
			}}
		>
			{/* Left: text */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<span
					style={{
						fontSize: "20px",
						color: "#6366f1",
						letterSpacing: "0.15em",
						fontFamily: "monospace",
					}}
				>
					martin-morales-portfolio.vercel.app
				</span>
				<span
					style={{
						fontSize: "64px",
						fontWeight: 700,
						color: "#f0f0f0",
						lineHeight: 1.1,
					}}
				>
					Martín Morales
				</span>
				<span
					style={{
						fontSize: "28px",
						color: "#8a8a8f",
						fontWeight: 400,
					}}
				>
					Systems Analyst · Full Stack Developer
				</span>

				{/* Accent line */}
				<div
					style={{
						marginTop: "24px",
						width: "80px",
						height: "3px",
						backgroundColor: "#6366f1",
						borderRadius: "2px",
					}}
				/>
			</div>

			{/* Right: monogram */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "200px",
					height: "200px",
					borderRadius: "50%",
					border: "2px solid #2a2a2e",
					backgroundColor: "#141416",
				}}
			>
				<span
					style={{
						fontSize: "100px",
						fontWeight: 700,
						color: "#f0f0f0",
						fontFamily: "serif",
						lineHeight: 1,
					}}
				>
					M
				</span>
			</div>
		</div>,
		size,
	);
}
