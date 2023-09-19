import React from 'react';
import axios from 'axios';
import AboutClientSingle from './AboutClientSingle';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const baseUrl = process.env.REACT_APP_API_BASE_URL;

/*
const clientsHeading = process.env.REACT_APP_CLIENTS_HEADING;
const clientsDescription = process.env.REACT_APP_CLIENTS_DESCRIPTION;
*/

class AboutClients extends React.Component {

	state = { clients:[], };


	componentDidMount(){
		let data;

		axios.get(`${baseUrl}/clients/?format=json`)
		.then((response) => {
			data = response.data;
			this.setState({ clients: data });
			console.log("Clients Data: ", data);
		}).catch((error) => {
			console.log(error);
		});
	}
	
	
	render(){

		const settings = {
			dots: true,
			infinite: true,
			speed: 500,	
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows:true
		};

		

		return (
			<div className="w-full flex flex-col items-center justify-center mt-10 sm:mt-20">
				
				<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
					Our Clients
				</p>
				<p className="font-medium text-lg sm:text-xl mt-4 text-center text-primary-dark dark:text-primary-light">
				 Following are the Clients we've helped grow their business and achieve their goals.<br/>
				  This is what they say about us
				</p>
				<div className="w-full  mt-5">
				{this.state.clients.length > 0 ? (
					<Slider {...settings}>
						{
							this.state.clients.map((client) => (
								<div key={client.id}>
									<AboutClientSingle
										profile={client.profile}
										name={client.name}
										surname={client.surname}
										job={client.job}
										nationality = {client.nationality}
										feedback = {client.feedback}
									/>
								</div>
							))
						}
					</Slider> 
				) : (
					<div className="flex items-center justify-center">
						<div className="animate-spin  rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-dark dark:border-primary-light"></div>
					</div>
				)}
				</div>
			</div>
		);
	}
};

export default AboutClients;