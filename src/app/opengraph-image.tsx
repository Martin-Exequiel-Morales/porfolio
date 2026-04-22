import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const alt = "Martín Morales · Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
	// @vercel/og (Satori) does not support image/webp — convert to JPEG first
	const rawBuffer = await readFile(
		join(process.cwd(), "public/personal_photo.webp"),
	);
	const jpegBuffer = await sharp(rawBuffer).jpeg({ quality: 85 }).toBuffer();
	const photoSrc = `data:image/jpeg;base64,${jpegBuffer.toString("base64")}`;

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
					Tech Lead · Full Stack Developer
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

			{/* Right: photo */}
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={photoSrc}
				width={220}
				height={220}
				style={{
					borderRadius: "50%",
					border: "3px solid #6366f1",
					objectFit: "cover",
				}}
				alt=""
			/>
		</div>,
		size,
	);
}
