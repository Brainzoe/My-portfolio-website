import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the envelope icon

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4j0dwen', 'template_rso9oit', form.current, 'TETN-lhuSQKI17TvW')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message. Please try again.');
            });
    };

    return (
        <section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="p-3 bg-gray-800 rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="p-3 bg-gray-800 rounded-lg"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="p-3 bg-gray-800 rounded-lg"
                        rows="5"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
