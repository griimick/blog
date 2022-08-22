import { useEffect, useState } from 'react';

export default function ReadingProgress() {
	const completion = useReadingProgress();
	console.log(completion);
	return (
		<div>
			<div className="sticky top-0 z-50">
				<span
					id="progress-bar"
					style={{
						transform: `translateX(${completion - 100}%)`,
					}}
					className={`fixed left-0 top-0 h-1 w-full bg-primary-400 transition-transform duration-150`}
				/>
			</div>
		</div>
	);
}

/* get ratio of current scroll position to total scroll length */

function useReadingProgress() {
	const [completion, setCompletion] = useState(0);
	useEffect(() => {
		function updateScrollCompletion() {
			const currentProgress = window.scrollY;
			let scrollHeight = document.body.scrollHeight - window.innerHeight;
			if (scrollHeight) {
				setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
			}
		}
		window.addEventListener('scroll', updateScrollCompletion);

		return () => {
			window.removeEventListener('scroll', updateScrollCompletion);
		};
	}, []);
	return completion;
}
