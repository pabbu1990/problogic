import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('ProbLogic | Send us a message')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        // e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        e.preventDefault();

        emailjs.sendForm('service_e580jip', 'template_8syp4e5', e.target, 'sYQjYlcZeOLgk1tD5')
        .then((response) => {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            clearInput();
            // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        }, (error) => {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            //handle error
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }
            console.log(error.text);
        });

        // axios({
        //     method: "post",
        //     url: process.env.REACT_APP_CONTACT_API,
        //     data: fData,
        //     headers: {
        //         'Content-Type':  'multipart/form-data'
        //     }
        // })
        // .then(function (response) {
            // document.getElementById('submitBtn').disabled = false;
            // document.getElementById('submitBtn').innerHTML = 'send message';
            // clearInput()
            // //handle success
            // Notiflix.Report.success(
            //     'Success',
            //     response.data.message,
            //     'Okay',
            // );
        // })
        // .catch(function (error) {
            // document.getElementById('submitBtn').disabled = false;
            // document.getElementById('submitBtn').innerHTML = 'send message';
            // //handle error
            // const { response } = error;
            // if(response.status === 500) {
            //     Notiflix.Report.failure(
            //         'An error occurred',
            //         response.data.message,
            //         'Okay',
            //     );
            // }
            // if(response.data.errors !== null) {
            //     setErrors(response.data.errors)
            // }
            
        // });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                <form onSubmit={sendEmail}>

                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input 
                                        name="first_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <input 
                                        name="last_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>

                                <div>
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        onKeyUp={clearErrors}   
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e)=> setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    }
                                </div>
                        </div>
                        <div className="my-4">
                            <textarea 
                                name="message" 
                                placeholder="Message*" 
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                value={message}
                                onChange={(e)=> setMessage(e.target.value)}
                                onKeyUp={clearErrors}
                            ></textarea>
                            {errors && 
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            }
                        </div>
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                </div>
                </form>
                        <div
                            className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                            <div className="flex flex-col text-white">
                                
                                <div className="flex my-4 w-2/3 lg:w-3/4">
                                    <div className="flex flex-col">
                                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Office Address</h2>
                                        <p className="text-gray-400">5956 W BREEZEWAY DR N RIDGEVILLE OH 44039</p>
                                    </div>
                                </div>
                    
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <div className="flex flex-col">
                        <i className="fas fa-phone-alt pt-2 pr-2" />
                        </div>

                        <div className="flex flex-col">
                        <h2 className="text-2xl">Call Us</h2>
                        <p className="text-gray-400">Tel: 5053580510</p>
                        <p className="text-gray-400">Mob: 8063176023</p>
                        
                            <div className='mt-5'>
                                <h2 className="text-2xl">Send an E-mail</h2>
                                <p className="text-gray-400">hr@problogic.com</p>
                            </div>
                       
                        </div>
                    </div>
                    
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <a href="https://twitter.com/Prob_Logic" target="_blank" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/problogic/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Contact;