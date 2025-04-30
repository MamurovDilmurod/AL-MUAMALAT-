import React from 'react';

function Form() {
    return (
        <div className="flex flex-col p-0 m-0 md:flex-row">
            {/* Chap tarafdagi div */}
            <div className="w-full md:w-1/2 bg-[#FAE9D3] p-10 flex flex-col justify-center">
                <h2 className="text-[#D28527] text-2xl font-bold mb-4">
                    Workshops and Spiritual Development
                </h2>
                <p className="text-[#D28527] text-sm leading-relaxed">
                    Participate in our weekly workshops focused on Islamic studies and spiritual growth. <br />
                    These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life.
                </p>
            </div>

            {/* O'ng tarafdagi forma */}
            <form action="#" className="w-full p-10 bg-gray-100 md:w-1/2">
                <h2 className="mb-2 text-xl font-semibold text-gray-800">Free consultation</h2>
                <p className="mb-6 text-sm text-gray-600">
                    Leave your phone number, and we will reach out to provide you with complete information about our courses.
                </p>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009688]"
                    />
                    <input
                        type="text"
                        placeholder="Your phone number"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009688]"
                    />

                    <label className="flex items-start gap-2 text-sm text-gray-700">
                        <input type="radio" className="mt-1 accent-[#009688]" />
                        <span>I agree to the use of my personal information for consultation purposes.</span>
                    </label>

                    <button
                        type="submit"
                        className="bg-[#009688] text-white py-3 rounded-md hover:bg-[#00796b] transition font-medium"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
