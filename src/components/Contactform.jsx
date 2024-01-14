import { faArrowRight, faCircle, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { UploadData } from '../tools/Supabase';
import Cookies from 'universal-cookie';
const Contactform = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [loading, setloading] = useState();
    const cookies = new Cookies();
    const [Already, setAlready] = useState(cookies.get('sended')?true:false);
    const sendData = async () => {
        setloading(true);

        if (Name && Email ) {
            try {
                await UploadData(Name, Email, Message);
                alert("Your message has been sent successfully! Thank you for reaching out. We will contact to you shortly.");
                setAlready(true);
                cookies.set("sended",true);
                setEmail("");
                setMessage("");
                setName("");
            } catch (error) {
                console.error(error);
                alert("An error occurred while sending your message. Please try again later.");
            }
        } else {
            alert("Please fill in all the fields.");
        }

        setloading(false);
    }



    return (
        <section className="text-gray-700 body-font relative">
            <div className=" py-10 mx-auto">

                <div className="md:px-16 pt-5 mx-auto text-center">
                    <div className="flex flex-wrap -m-2 mx-auto">
                        <div className="p-2 w-full  md:w-1/2 text-start">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={Name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 md:w-1/2 w-full text-start">
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={Email}
                                    required
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    name="email"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full pt-2 text-start">
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    
                                    value={Message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                         {
                            Already?
                            <button name='Submit' className="bg-accent dark:bg-secondary text-light py-3 px-5 mt-5 mb-10 hover:bg-secondary hover:text-accent hover:-translate-y-1 uppercase transition-transform" onClick={sendData} disabled={loading}>
                            {loading ? "Sending..." : "Send Again"} <FontAwesomeIcon icon={loading ? faTruckLoading : faArrowRight} spin={loading} />
                        </button>
                            :
                            <button name='Submit' className="bg-primary dark:bg-secondary text-light py-3 px-5 mt-5 mb-10 hover:bg-secondary hover:text-primary hover:-translate-y-1 uppercase transition-transform" onClick={sendData} disabled={loading}>
                            {loading ? "Sending..." : "Send"} <FontAwesomeIcon icon={loading ? faTruckLoading : faArrowRight} spin={loading} />
                        </button>
                         }

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactform;