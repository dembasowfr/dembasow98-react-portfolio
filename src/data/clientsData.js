//Get the data from the database
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const clientsHeading = 'SOME OF THE COMPANIES WE\'VE HELPED GROW';
//Function to get about data:
export const getClientsData = async () => {
	try {
		const response = await fetch(`${baseUrl}/clients/?format=json`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
