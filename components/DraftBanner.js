import { useEffect, useState } from 'react';

export default function DraftBanner() {
	return (
		<div>
			<span
				id="draft-banner"
				className={`fixed left-0 top-0 h-9 w-full bg-primary-500/50 text-center align-middle font-medium leading-9 backdrop-blur transition-transform duration-150`}
			>
				You are reading a working draft
			</span>
		</div>
	);
}
