import React from "react";

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen gap-12 p-8 md:flex-row md:p-16 max-w-[1320px] mx-auto">
            {/* Left section */}
            {/* Left section */}
            <div className="space-y-10 md:w-1/2">
                <div>
                    <h1 className="mb-4 text-4xl font-bold text-gray-900">Let’s Talk</h1>
                    <p className="max-w-md leading-relaxed text-gray-600">
                        Have some big idea or brand to develop and need help?
                        Then reach out — we’d love to hear about your project
                        and provide help.
                    </p>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold text-gray-800">📧 Email</h2>
                    <p className="text-base text-gray-700">khan10@gmail.com</p>
                </div>

                <div>
                    <h2 className="mb-2 text-xl font-semibold text-gray-800">🔗 Socials</h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-teal-600 transition duration-200 hover:underline"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-teal-600 transition duration-200 hover:underline"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-teal-600 transition duration-200 hover:underline"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Right section */}
            <div className="space-y-5 md:w-1/2">
                <div>
                    <label className="text-sm text-gray-700">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 mt-1 bg-gray-100 border rounded-md"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 mt-1 bg-gray-100 border rounded-md"
                        placeholder="Your email"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-700">What service are you interested in</label>
                    <select className="w-full p-3 mt-1 bg-gray-100 border rounded-md">
                        <option>Select project type</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm text-gray-700">Budget</label>
                    <select className="w-full p-3 mt-1 bg-gray-100 border rounded-md">
                        <option>Select project budget</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm text-gray-700">Message</label>
                    <textarea
                        rows="5"
                        className="w-full p-3 mt-1 bg-gray-100 border rounded-md"
                        placeholder="Your message"
                    ></textarea>
                </div>

                <button className="w-full py-3 text-white transition bg-teal-600 rounded-md hover:bg-teal-700">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Contact;
