import { useState, createContext, useEffect} from 'react';

import { clientsHeading as clientsPageHeading } from '../data/clientsData';



import { getAboutMeData } from '../data/aboutMeData';

import { getClientsData } from '../data/clientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {

	const [aboutMe, setAboutMe] = useState(null);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(null);


	useEffect(() => {

		const fetchAboutMeData = async () => {
			//Get the about me data
			const aboutMeData = await getAboutMeData();

			//Set the about me data
			setAboutMe(aboutMeData);

			
		};

		fetchAboutMeData();
	}, []);

	useEffect(() => {
		
		const fetchClientsData = async () => {
			//Get the clients data
			const clientsData = await getClientsData();

			//Set the clients data
			setClientsData(clientsData);

		}

		fetchClientsData();
	}, []);

	

	return (
		<AboutMeContext.Provider 
			value={{
				aboutMe,
				setAboutMe,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
