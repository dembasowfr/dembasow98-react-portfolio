import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<div className="w-full flex flex-col justify-center content-center">
			<div className="w-full flex items-center justify-center mt-20 text-center">
				<p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Get in Touch
				</p>
			</div>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-8 lg:mt-8"
		>
			
			<ContactForm />
			<ContactDetails />
		</motion.div>
		</div>
	);
};

export default Contact;
