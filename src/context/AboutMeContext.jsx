import { useState, createContext, useEffect} from 'react';

import { clientsHeading as clientsPageHeading } from '../data/clientsData';



import { getAboutMeData } from '../data/aboutMeData';

import { getClientsData } from '../data/clientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {

	const [aboutMe, setAboutMe] = useState(null);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(null);
	

	async function fetchAboutMeData (){

		try{
			const aboutMeData = await getAboutMeData();
			setAboutMe(aboutMeData);
			//console.log("About Me Data: ", aboutMeData);
		}
		catch(error){
			console.log("Error on fetching the about data:",error);
		}
	};

	async function fetchClientsData (){
		try{
			const clientsData = await getClientsData();
			setClientsData(clientsData);
			//console.log("Clients Data: ",clientsData);
		}
		catch(error){
			console.log("Error on fetching the client data: ", error);
		}
	};


	useEffect(() => {
		fetchAboutMeData();
		fetchClientsData();
	}, [aboutMe, clientsData]);

	

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
