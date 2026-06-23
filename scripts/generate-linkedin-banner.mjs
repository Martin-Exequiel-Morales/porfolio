import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const outDir = path.join(rootDir, "documents", "generated");

/** LinkedIn recommended banner size */
const W = 1584;
const H = 396;

/** Clear of desktop profile photo overlap (bottom-left) */
const TEXT_X = 392;

const variants = [
	{
		file: "linkedin-banner-es.png",
		greeting: "> hola, soy",
		role: "Full Stack Developer",
		stack: "TypeScript · Next.js · React · PostgreSQL · Redis",
		badge: "Disponible para trabajo remoto",
		meta: "GMT-3 · Argentina",
	},
	{
		file: "linkedin-banner-en.png",
		greeting: "> hi, I'm",
		role: "Full Stack Developer",
		stack: "TypeScript · Next.js · React · PostgreSQL · Redis",
		badge: "Available for remote work",
		meta: "GMT-3 · Argentina",
	},
];

function escapeXml(value) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

function badgeWidth(label) {
	return Math.min(520, Math.max(420, label.length * 11 + 72));
}

function buildSvg({ greeting, role, stack, badge, meta }) {
	const gridLines = Array.from({ length: 14 }, (_, i) => {
		const x = 80 + i * 110;
		return `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#ffffff" stroke-opacity="0.028" stroke-width="1"/>`;
	}).join("");

	const badgeW = badgeWidth(badge);
	const badgeX = W - badgeW - 72;
	const badgeY = 156;
	const badgeH = 44;

	// Vertically balanced block (uses ~78% of banner height)
	const greetingY = 96;
	const nameY = 162;
	const roleY = 224;
	const stackY = 272;
	const accentY = nameY + 14;

	return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1020"/>
      <stop offset="55%" stop-color="#0c0c10"/>
      <stop offset="100%" stop-color="#101018"/>
    </linearGradient>
    <radialGradient id="glow" cx="72%" cy="50%" r="52%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${gridLines}

  <text x="${TEXT_X}" y="${greetingY}" fill="#818cf8" font-family="Consolas, 'Courier New', monospace" font-size="30" letter-spacing="0.02em">${escapeXml(greeting)}</text>
  <text x="${TEXT_X}" y="${nameY}" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="700" letter-spacing="-0.02em">${escapeXml("Martín Morales")}</text>
  <rect x="${TEXT_X}" y="${accentY}" width="560" height="4" rx="2" fill="url(#accent)"/>
  <text x="${TEXT_X}" y="${roleY}" fill="#cbd5e1" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="600">${escapeXml(role)}</text>
  <text x="${TEXT_X}" y="${stackY}" fill="#e4e4e7" font-family="Segoe UI, Arial, sans-serif" font-size="26" letter-spacing="0.01em">${escapeXml(stack)}</text>

  <rect x="${badgeX}" y="${badgeY}" rx="22" ry="22" width="${badgeW}" height="${badgeH}" fill="#064e3b" fill-opacity="0.62" stroke="#10b981" stroke-opacity="0.5" stroke-width="1.5"/>
  <circle cx="${badgeX + 26}" cy="${badgeY + badgeH / 2}" r="6" fill="#10b981"/>
  <text x="${badgeX + 44}" y="${badgeY + 29}" fill="#86efac" font-family="Segoe UI, Arial, sans-serif" font-size="21" font-weight="700">${escapeXml(badge)}</text>
  <text x="${badgeX + 44}" y="${badgeY + badgeH + 34}" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="21">${escapeXml(meta)}</text>
</svg>`;
}

if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir, { recursive: true });
}

for (const variant of variants) {
	const svg = buildSvg(variant);
	const outPath = path.join(outDir, variant.file);
	await sharp(Buffer.from(svg)).png().toFile(outPath);
	console.log(`Created ${path.relative(rootDir, outPath)}`);
}

console.log("\nSubí el PNG a LinkedIn → Foto de portada (1584×396).");
