import profileImage from '../../images/about.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="flex flex-col items-center mt-10 sm:mt-20">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					About me
				</p>
			</div>
			<div className="block sm:flex sm:gap-10  items-center mt-3 sm:mt-10">
				<div className="w-full sm:w-1/4 mb-7  sm:mb-0">
					<img src={profileImage} className="rounded-full" alt="" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					{aboutMe.map((bio) => (
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
							key={bio.id}
						>
							{bio.bio}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
