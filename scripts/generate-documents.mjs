import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const sourcesDir = path.join(rootDir, "documents", "sources");
const generatedDir = path.join(rootDir, "documents", "generated");
const publicDir = path.join(rootDir, "public");

const documents = [
	{
		source: "cv-es.txt",
		output: "Martin-Morales-CV-ES.pdf",
		copyToPublic: true,
		kind: "cv",
	},
	{
		source: "cv-en.txt",
		output: "Martin-Morales-CV-EN.pdf",
		copyToPublic: true,
		kind: "cv",
	},
	{
		source: "cover-letter-es.txt",
		output: "Martin-Morales-Cover-Letter-ES.pdf",
		copyToPublic: false,
		kind: "letter",
	},
	{
		source: "cover-letter-en.txt",
		output: "Martin-Morales-Cover-Letter-EN.pdf",
		copyToPublic: false,
		kind: "letter",
	},
];

function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
}

function isSectionHeader(line) {
	return /^---\s+.+\s+---$/.test(line.trim());
}

function isJobTitle(line, nextLine) {
	if (!line.trim() || line.startsWith("•") || line.startsWith("-")) return false;
	if (isSectionHeader(line)) return false;
	return Boolean(nextLine && nextLine.includes("|"));
}

function isCompanyLine(line) {
	return line.includes("|") && !line.startsWith("•") && !line.startsWith("-");
}

function isBullet(line) {
	const trimmed = line.trim();
	return trimmed.startsWith("•") || trimmed.startsWith("-");
}

function hrefForToken(token) {
	const value = token.trim();
	if (!value) return null;
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
		return `mailto:${value}`;
	}
	if (/^https?:\/\//i.test(value)) {
		return value;
	}
	if (/^[\w-]+(\.[\w-]+)+([\/?#].*)?$/i.test(value)) {
		return `https://${value}`;
	}
	return null;
}

/** Renders a line with clickable mailto/https links; keeps full URL text for ATS. */
function writeLineWithLinks(
	doc,
	line,
	{ fontSize = 10, color = "#333333", linkColor = "#1a5fb4", underline = true } = {},
) {
	const parts = line.includes("|")
		? line.split(/\s*\|\s*/)
		: line.split(/(\s+)/).filter(Boolean);

	doc.font("Helvetica").fontSize(fontSize);

	const segments = [];
	if (line.includes("|")) {
		for (let i = 0; i < parts.length; i += 1) {
			if (i > 0) segments.push({ text: " | ", href: null });
			segments.push({ text: parts[i], href: hrefForToken(parts[i]) });
		}
	} else {
		for (const part of parts) {
			if (/^\s+$/.test(part)) {
				segments.push({ text: part, href: null });
				continue;
			}
			segments.push({ text: part, href: hrefForToken(part) });
		}
	}

	segments.forEach((segment, index) => {
		const isLink = Boolean(segment.href);
		doc.fillColor(isLink ? linkColor : color).text(segment.text, {
			link: segment.href ?? undefined,
			underline: isLink && underline,
			continued: index < segments.length - 1,
		});
	});

	doc.fillColor("#000000");
}

function lineHasLinks(line) {
	return /https?:\/\//i.test(line) || /[\w.+-]+@[\w.-]+\.\w+/.test(line);
}

function bottomLimit(doc) {
	return doc.page.height - doc.page.margins.bottom;
}

function remainingHeight(doc) {
	return bottomLimit(doc) - doc.y;
}

function ensureSpace(doc, minHeight) {
	if (remainingHeight(doc) < minHeight) {
		doc.addPage();
	}
}

function sectionMinSpace(title) {
	if (/^EDUCACI|^EDUCATION/i.test(title)) return 95;
	if (/IDIOMA|^LANGUAGE/i.test(title)) return 36;
	if (/PROYECT|PROJECT/i.test(title)) return 110;
	return 44;
}

function writeCvPdf(content, pdfPath) {
	const doc = new PDFDocument({
		size: "A4",
		margins: { top: 48, bottom: 48, left: 48, right: 48 },
		info: {
			Title: "Martin Exequiel Morales - CV",
			Author: "Martin Exequiel Morales",
		},
	});
	const stream = fs.createWriteStream(pdfPath);
	doc.pipe(stream);

	const bodySize = 10;
	const sectionSize = 11;
	const nameSize = 16;
	const lineGap = 1.5;
	const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
	const lines = content.split("\n");
	let index = 0;

	// Header block: name, title, contact lines, location (first 5 non-empty lines)
	const headerLines = [];
	while (headerLines.length < 5 && index < lines.length) {
		const line = lines[index];
		index += 1;
		if (line.trim() !== "") headerLines.push(line);
	}

	if (headerLines[0]) {
		doc.font("Helvetica-Bold").fontSize(nameSize).text(headerLines[0], { lineGap: 2 });
	}
	if (headerLines[1]) {
		doc
			.moveDown(0.15)
			.font("Helvetica")
			.fontSize(10.5)
			.fillColor("#222222")
			.text(headerLines[1]);
	}
	for (const contactLine of headerLines.slice(2, 4)) {
		if (contactLine) {
			writeLineWithLinks(doc, contactLine, { fontSize: 9 });
		}
	}
	if (headerLines[4]) {
		doc.fontSize(9.5).fillColor("#333333").text(headerLines[4]);
	}
	doc.moveDown(0.75).fillColor("#000000");

	for (; index < lines.length; index += 1) {
		const line = lines[index];
		const nextLine = lines[index + 1] ?? "";

		if (line.trim() === "") {
			doc.moveDown(0.28);
			continue;
		}

		if (isSectionHeader(line)) {
			const title = line.replace(/^---\s*|\s*---$/g, "").trim();
			ensureSpace(doc, sectionMinSpace(title));
			doc
				.moveDown(0.5)
				.font("Helvetica-Bold")
				.fontSize(sectionSize)
				.text(title.toUpperCase(), { lineGap: 1 });
			doc.moveDown(0.2);
			continue;
		}

		if (isJobTitle(line, nextLine)) {
			ensureSpace(doc, 48);
			doc.font("Helvetica-Bold").fontSize(bodySize).text(line.trim(), { lineGap });
			continue;
		}

		if (isCompanyLine(line)) {
			doc
				.font("Helvetica-Oblique")
				.fontSize(9.5)
				.fillColor("#444444")
				.text(line.trim(), { lineGap });
			doc.fillColor("#000000").font("Helvetica");
			doc.moveDown(0.18);
			continue;
		}

		if (isBullet(line)) {
			ensureSpace(doc, 20);
			const text = line.trim().replace(/^[•-]\s*/, "");
			doc.font("Helvetica").fontSize(bodySize);
			if (lineHasLinks(text)) {
				doc.text("• ", { indent: 12, continued: true });
				writeLineWithLinks(doc, text, { fontSize: bodySize, underline: false });
			} else {
				doc.text(`• ${text}`, {
					indent: 12,
					lineGap,
					width: contentWidth,
				});
			}
			continue;
		}

		if (lineHasLinks(line.trim())) {
			ensureSpace(doc, 16);
			writeLineWithLinks(doc, line.trim(), { fontSize: bodySize, underline: false });
			continue;
		}

		ensureSpace(doc, 16);
		doc.font("Helvetica").fontSize(bodySize).text(line.trim(), { lineGap, width: contentWidth });
	}

	doc.end();

	return new Promise((resolve, reject) => {
		stream.on("finish", resolve);
		stream.on("error", reject);
	});
}

function writeLetterPdf(content, pdfPath) {
	const doc = new PDFDocument({
		size: "A4",
		margins: { top: 54, bottom: 54, left: 54, right: 54 },
	});
	const stream = fs.createWriteStream(pdfPath);
	doc.pipe(stream);

	doc.font("Helvetica");
	const lines = content.split("\n");

	for (let i = 0; i < lines.length; i += 1) {
		const line = lines[i];

		if (line.trim() === "") {
			doc.moveDown(0.6);
			continue;
		}

		if (i === 0) {
			doc.fontSize(14).font("Helvetica-Bold").text(line);
			doc.font("Helvetica");
			continue;
		}

		if (i === 1) {
			doc.fontSize(10).fillColor("#444444").text(line);
			doc.fillColor("#000000");
			continue;
		}

		if (
			line.includes("@") ||
			line.startsWith("http") ||
			line.includes("GMT-3")
		) {
			writeLineWithLinks(doc, line, { fontSize: 9.5 });
			continue;
		}

		if (lineHasLinks(line)) {
			doc.fontSize(11);
			writeLineWithLinks(doc, line, { fontSize: 11, underline: false });
			continue;
		}

		doc.fontSize(11).text(line, { align: "left", lineGap: 2 });
	}

	doc.end();

	return new Promise((resolve, reject) => {
		stream.on("finish", resolve);
		stream.on("error", reject);
	});
}

ensureDir(generatedDir);
ensureDir(publicDir);

for (const item of documents) {
	const sourcePath = path.join(sourcesDir, item.source);
	const outputPath = path.join(generatedDir, item.output);

	if (!fs.existsSync(sourcePath)) {
		console.error(`Missing source file: ${sourcePath}`);
		process.exitCode = 1;
		continue;
	}

	const content = fs.readFileSync(sourcePath, "utf8");
	if (item.kind === "cv") {
		await writeCvPdf(content, outputPath);
	} else {
		await writeLetterPdf(content, outputPath);
	}

	console.log(`Created ${path.relative(rootDir, outputPath)}`);

	if (item.copyToPublic) {
		const publicPath = path.join(publicDir, item.output);
		fs.copyFileSync(outputPath, publicPath);
		console.log(`Copied to ${path.relative(rootDir, publicPath)}`);
	}
}

console.log("\nSources: documents/sources/");
console.log("Generated PDFs: documents/generated/ (gitignored except .gitkeep)");
console.log("Public CVs: public/Martin-Morales-CV-*.pdf");
