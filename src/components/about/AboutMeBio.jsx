//import { useContext } from 'react';
//import AboutMeContext from '../../context/AboutMeContext';

import axios from "axios";
import React from "react";

//import { getAboutMeData, getClientsData } from "../../services/aboutMeServices";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

class AboutMeBio extends React.Component {

	///const { aboutMe } = useContext(AboutMeContext);

	state = { abouts:[], };


	componentDidMount(){
		let data;

		axios.get(`${baseUrl}/about/?format=json`)
		.then((response) => {
			data = response.data;
			this.setState({ abouts: data });
		}).catch((error) => {
			console.log(error);
		});
	}

	render(){
		return (
			<div className="flex flex-col items-center mt-10 sm:mt-20">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
						ABOUT ME
					</p>
				</div>
				{ this.state.abouts.length > 0 ? (
				
					this.state.abouts.map((data) => (
						<div key={data.id} className="block sm:flex sm:gap-10  items-center mt-3 sm:mt-10">
						
								
							<div className="w-full flex sm:w-1/4 mb-7  sm:mb-0">
								<img  className="w-64 h-64 rounded-full" alt="" src = {data.profile_picture} />
							</div>

							<div className="font-general-regular w-full sm:w-3/4 text-left">
								<div 
									className='mb-4 text-ternary-dark dark:text-ternary-light text-lg' 
								>
									
									{data.about}
										
								</div>
							</div>
						</div>
					))
					) : (
						<div className="flex items-center justify-center">
							<div className="animate-spin  rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-dark dark:border-primary-light"></div>
						</div>
					)

				}
			</div>
		);
	}
};

export default AboutMeBio;
