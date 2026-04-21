type SectionTitleProps = {
	title: string;
	subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
	return (
		<div className="mb-12">
			<h2 className="text-3xl font-bold text-foreground tracking-tight">
				{title}
			</h2>
			{subtitle && <p className="mt-2 text-muted text-base">{subtitle}</p>}
			<div className="mt-4 h-px w-12 bg-accent" />
		</div>
	);
}
