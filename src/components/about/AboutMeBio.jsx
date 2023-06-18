import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';


const AboutMeBio = () => {


	const { aboutMe } = useContext(AboutMeContext);

	//Check if aboutMe has data
	if (!aboutMe || aboutMe.length === 0) {
		// Render null or a loading indicator if aboutMe is empty
		return null; 
	}

	//Get the first item from the array
	const about = aboutMe[0];

	return (
		<div className="flex flex-col items-center mt-10 sm:mt-20">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					ABOUT ME
				</p>
			</div>
			<div className="block sm:flex sm:gap-10  items-center mt-3 sm:mt-10">
				
				<div className="w-full sm:w-1/4 mb-7  sm:mb-0">
					<img src={about.profile_picture} className="rounded-full" alt="" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					
					<div 
						className='mb-4 text-ternary-dark dark:text-ternary-light text-lg' 

					>
						<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">{about.about}</p>
						
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
