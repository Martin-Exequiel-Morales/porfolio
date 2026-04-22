import {
	siReact,
	siNextdotjs,
	siTypescript,
	siJavascript,
	siCss,
	siTailwindcss,
	siNodedotjs,
	siPhp,
	siPython,
	siPrisma,
	siZod,
	siPostgresql,
	siMysql,
	siDocker,
	siNginx,
	siGit,
	siJest,
	siPopos,
	siDbeaver,
	siVscodium,
	siArduino,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const iconMap: Record<string, SimpleIcon> = {
	React: siReact,
	"Next.js": siNextdotjs,
	TypeScript: siTypescript,
	JavaScript: siJavascript,
	CSS: siCss,
	"Tailwind CSS": siTailwindcss,
	"Node.js": siNodedotjs,
	PHP: siPhp,
	Python: siPython,
	Prisma: siPrisma,
	Zod: siZod,
	PostgreSQL: siPostgresql,
	MySQL: siMysql,
	Docker: siDocker,
	Nginx: siNginx,
	Git: siGit,
	Jest: siJest,
	"Linux (Pop OS)": siPopos,
	DBeaver: siDbeaver,
	"VS Code": siVscodium,
	Arduino: siArduino,
};

export function TechIcon({ name, size = 13 }: { name: string; size?: number }) {
	const icon = iconMap[name];
	if (!icon) return null;

	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="currentColor"
			aria-label={icon.title}
			className="shrink-0 opacity-60"
		>
			<path d={icon.path} />
		</svg>
	);
}
