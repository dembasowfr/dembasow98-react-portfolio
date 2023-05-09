function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex flex-col justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()} Made with{' '}
				<a
					href="https:/reactjs.com"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					React
				</a>
				{' '}&{' '}
				<a
					href="https://tailwindcss.com"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Tailwind CSS
				</a>
			</div>
			<div className="text-lg text-ternary-dark dark:text-ternary-light w-[80%] h-1"></div>
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				<a 
					href="https://dembasow98.github.io"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					DEMBA SOW
				</a>
				. All Rights Reserved
			</div>
		</div>
	);
}

export default AppFooterCopyright;
