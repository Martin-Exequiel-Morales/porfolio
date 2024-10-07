interface Props {
	title: string;
	date: string;
	place: string;
	children: string | React.ReactNode;
}

export function TimelineCard({ title, date, place, children }: Props) {
	return (
		<article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-vanilla-700 dark:bg-rich_black-300 p-4 rounded border shadow-md shadow-rich_black-600 dark:shadow-rufous">
			<div className="flex items-center justify-between space-x-2 mb-1">
				<h2 className="font-bold text-rich_black-100 dark:text-rufous text-[2.3vmax] xl:text-[2.1vmax]">{title}</h2>
				<time className="font-medium text-rich_black-600 dark:text-rufous-600 text-[1.2vmax] xl:text-[1vmax]">{date}</time>
			</div>
			<h3 className="flex items-center justify-start text-rich_black-600 dark:text-rufous-700 text-[1.4vmax] xl:text-[1.2vmax]">
				{place}
			</h3>
			<div className="pt-5 text-rich_black-100 dark:text-rufous text-[1.6vmax]  xl:text-[1.4vmax]">
				{children}
			</div>
		</article>
	);
}
