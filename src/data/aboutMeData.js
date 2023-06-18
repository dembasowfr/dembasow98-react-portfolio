//Get the data from the database
const baseUrl = process.env.REACT_APP_API_BASE_URL;


//Function to get about data:
export const getAboutMeData = async () => {
	try {
		const response = await fetch(`${baseUrl}/about/?format=json`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);	
	}
};