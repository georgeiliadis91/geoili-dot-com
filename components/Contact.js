import Link from 'next/link';
import { useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-grid';
import Recaptsa from "react-recaptcha";
import { ToastContainer, toast } from 'react-toastify';

const recaptchaRef = React.createRef();

const initialMessage = {
	name: '',
	email: '',
	message: ''
}

const Contact = () => {
	const [message, setMessage] = useState(initialMessage)
	const [verified, setVerified] = useState(false);

	// function onChange(value) {
	// 	console.log("Captcha value:", value);
	// }


	const handleChange = event => {
		setMessage({
			...message,
			[event.target.id]: event.target.value
		});

	};

	const callback = () => {
		console.log('captcha loaded');
	}


	const verifyCallback = function (response) {
		// console.log('response', response);
		if (response) {
			setVerified(true);
			// console.log('verified')
		}
	};


	const handleSubmit = async (e) => {
		e.preventDefault();


		if (!verified || message.name == '' || message.email == '' || message.message == '') {
			// console.log('haha');
			alert('You have not finished validating')

		} else {


			try {
				await axios
					.post(process.env.apiUrl + '/messages', message)
					.then((response) => {
						toast("Thanks for contacting me!", {
							position: "bottom-center",
							autoClose: 5000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: false,
							draggable: true,
							progress: undefined,
						})
						// console.log(response.message);
					})
					.catch((error) => {
						console.log(error.message);
					});

			} catch (error) {
				// alert.error(error.message);
				console.log(error.message);
			}

			setMessage(initialMessage);
		}


	};



	return (
		<div id="contact-block">
			<h2>Contact Me</h2>
			<form onSubmit={handleSubmit}>
				<Row>
					<Col xs={12} md={6}>
						<label>
							Name
				</label>
						<input id="name" type="text" name="name" value={message.name} onChange={(event) => handleChange(event)} />

					</Col>
					<Col xs={12} md={6}>

						<label>
							Email
				</label>
						<input id="email" type="text" name="email" value={message.email} onChange={(event) => handleChange(event)} />
					</Col>


				</Row>
				<label>
					Message
				</label>
				<textarea id="message" type="text" name="text" value={message.message} onChange={(event) => handleChange(event)} />
				<button type="submit">Submit</button>
				<Recaptsa
					sitekey={process.env.captchaKey}
					render="explicit"
					verifyCallback={verifyCallback}
					onloadCallback={callback}
				/>

			</form>
			<ToastContainer position="bottom-center"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false} />

			<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
		</div>

	)
};

export default Contact;