import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutClients = () => {

	const { clientsData, clientsHeading } = useContext(AboutMeContext);


	//Check if aboutMe has data
	if (!clientsData || clientsData.length === 0) {
		// Render null or a loading indicator if aboutMe is empty
		return null; 
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows:false
		
	};

	return (
		<div className="w-full  flex flex-col items-center justify-center mt-10 sm:mt-20">
			
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="max-w-[380px] mt-10 sm:mt-14">
				<Slider {...settings}>
					{clientsData.map((client) => (
						<AboutClientSingle
							key={client.id}
							profile={client.profile}
							name={client.name}
							surname={client.surname}
							job={client.job}
							nationality = {client.nationality}
							feedback = {client.feedback}
						/>
					))}

				</Slider>
			</div>
		</div>
	);
};

export default AboutClients;