type BadgeProps = {
	label: string;
};

export function Badge({ label }: BadgeProps) {
	return (
		<span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-surface-2 text-muted border border-border">
			{label}
		</span>
	);
}
