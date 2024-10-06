interface Props {
	title: string;
	date: string;
	place: string;
	children: string | React.ReactNode;
}

export function TimelineCard({ title, date, place, children }: Props) {
	return (
		<article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-rich_black-300 p-4 rounded border shadow-md shadow-rufous">
			<div className="flex items-center justify-between space-x-2 mb-1">
				<h2 className="font-bold text-rufous text-lg md:text-2xl lg:text-4xl">
					{title}
				</h2>
				<time className="font-medium text-rufous-600 text-base md:text-xl lg:text-2xl">
					{date}
				</time>
			</div>
			<h3 className="flex items-center justify-start text-rufous-700">
				{place}
			</h3>
			<div className="pt-5 text-rufous text-base md:xl lg:text-2xl">
				{children}
			</div>
		</article>
	);
}
