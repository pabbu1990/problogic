import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('ProbLogic | Contact Us');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => setErrors([]);
    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Sending...';

        emailjs.sendForm('service_e580jip', 'template_8syp4e5', e.target, 'sYQjYlcZeOLgk1tD5')
            .then((response) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                clearInput();
                Notiflix.Report.success('Success', response.data.message, 'Okay');
            }, (error) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                const { response } = error;
                if (response.status === 500) {
                    Notiflix.Report.failure('An error occurred', response.data.message, 'Okay');
                }
                if (response.data.errors !== null) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <>
            <div className="hero-gradient">
                <NavBar />
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-blue-200 max-w-xl">
                        Tell us about your staffing needs. We'll respond within one business day.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={sendEmail}>
                            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input
                                            name="first_name"
                                            className="w-full bg-gray-50 text-gray-900 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            type="text"
                                            placeholder="John"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input
                                            name="last_name"
                                            className="w-full bg-gray-50 text-gray-900 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            type="text"
                                            placeholder="Smith"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            name="email"
                                            className="w-full bg-gray-50 text-gray-900 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input
                                            name="phone_number"
                                            className="w-full bg-gray-50 text-gray-900 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            type="tel"
                                            placeholder="(555) 000-0000"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                                    <textarea
                                        name="message"
                                        className="w-full h-32 bg-gray-50 text-gray-900 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about the roles you're looking to fill, your tech stack, timeline, etc."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        id="submitBtn"
                                        className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
                                    >
                                        Send Message
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div>
                        <div className="bg-gray-900 rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-6">Contact Info</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Email</div>
                                    <a href="mailto:hr@problogic.com" className="text-white font-medium hover:text-blue-300 transition-colors">
                                        hr@problogic.com
                                    </a>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                                    <a href="tel:5053580510" className="text-white font-medium hover:text-blue-300 transition-colors">
                                        (505) 358-0510
                                    </a>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Location</div>
                                    <p className="text-white font-medium">North Ridgeville, OH</p>
                                </div>

                                <div className="pt-4 border-t border-white border-opacity-10">
                                    <div className="text-sm text-gray-400 mb-3">Connect</div>
                                    <div className="flex gap-3">
                                        <a href="https://www.linkedin.com/company/problogic/" target="_blank" rel="noreferrer"
                                            className="w-9 h-9 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-opacity-20 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                            </svg>
                                        </a>
                                        <a href="https://twitter.com/Prob_Logic" target="_blank" rel="noreferrer"
                                            className="w-9 h-9 bg-white bg-opacity-10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-opacity-20 transition-all">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick note */}
                        <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h4 className="text-sm font-bold text-blue-900 mb-2">Typical Response Time</h4>
                            <p className="text-sm text-blue-700">
                                We respond to all inquiries within one business day. For urgent staffing needs, call us directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
