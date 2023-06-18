const AboutClientSingle = ({id, profile, name, surname, job, nationality, feedback }) => {
	return (
		<section key = {id} class="rounded overflow-hidden shadow-lg max-w-sm text-primary-dark dark:text-primary-light bg-primary-light dark:bg-ternary-dark">
			<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
				<figure class="max-w-screen-md mx-auto">
					<figcaption class="flex flex-col items-center justify-center mt-6 space-x-3">
						<img class="w-20 rounded-full" src={profile} alt={name + surname}/>
						<div class="flex items-center py-2">
							<div class="pr-3 ">{name} {surname}</div>
						</div>
					</figcaption>
					<svg class="h-12 my-2 mx-auto" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
					</svg> 
					<blockquote>
						<p class="text-2xl font-medium ">{feedback}</p>
					</blockquote>
					<div class="flex items-center justify-center mt-6 space-x-3">
						<div class="flex items-center divide-x-2 ">
							<div class="px-2 ">{job}</div>
							<div class=" px-2 ">{nationality}</div>
						</div>
					</div>
				</figure>
			</div>
	  </section>
	);
};

export default AboutClientSingle;
