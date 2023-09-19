const AboutClientSingle = ({profile, name, surname, job, nationality, feedback }) => {
	return (
		<section className="w-full rounded text-primary-dark dark:text-primary-light">
			<div className="w-full max-w-screen	 px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
				<figure className="w-full ">

					
					<figcaption className="flex flex-col items-center justify-center mt-6 space-x-3">
						<img className="w-20 h-20 rounded-full" src={profile} alt={name + surname}/>
						<div className="flex items-center py-2">
							<div className="pr-3 ">{name} {	surname}</div>
						</div>
					</figcaption>


					<svg className="h-12 my-2 mx-auto" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
					</svg> 
					<blockquote>
						<p className="text-2xl font-medium ">{feedback}</p>
					</blockquote>
					<div className="flex items-center justify-center mt-6 space-x-3">
						<div className="flex items-center divide-x-2 ">
							<div className="px-2 ">{job}</div>
							<div className=" px-2 ">{nationality}</div>
						</div>
					</div>
				</figure>
			</div>
	  </section>
	);
};

export default AboutClientSingle;
