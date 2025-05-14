import React from 'react'
import true1 from '../img/true.png'
import nuqta from '../img/nuqta.png'
import MostPopular from '../components/MostPopular'
import OurServis from '../components/OurServis'
import Form from '../components/Form'

function InternationalEducationalPrograms() {
    return (
        <div className="py-10 max-w-[1320px] mx-auto px-4">
            <h2 className='pt-4 text-xl font-bold text-center md:text-3xl'>Our Expert Team</h2>
            <p className='py-2 font-normal text-center text-gray-600'>
                Our team consists of seasoned professionals with extensive experience <br />
                in Islamic finance and management. Each member brings a unique set of <br />
                skills and expertise.
            </p>

            {/* left + right section container */}
            <div className='flex flex-col gap-6 pt-14 md:flex-row'>

                {/* left section */}
                <div className='bg-[#F3F8FF] p-9 md:w-1/2 space-y-4 rounded-lg shadow transition hover:shadow-md'>
                    <h2 className="mb-4 text-xl font-semibold text-center md:text-2xl">What you’ll learn</h2>

                    {[
                        "Gain a comprehensive understanding of Islamic finance principles and ethics.",
                        "Build a portfolio with 10+ real-world projects in Islamic financial services.",
                        "Learn to develop and manage Sharia-compliant financial products.",
                        "Master key concepts in Islamic banking, investment, and wealth management.",
                        "Understand the fundamentals of risk management in Islamic finance.",
                        "Develop skills to work as an Islamic finance consultant."
                    ].map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <img src={true1} alt="check" className='w-5 h-5 mt-1' />
                            <p className="text-gray-700 max-w-[400px]">{item}</p>
                        </div>
                    ))}
                </div>

                {/* right section */}
                <div className='bg-[#F3F8FF] p-9 md:w-1/2 rounded-lg shadow transition hover:shadow-md space-y-4'>
                    <h2 className="mb-4 text-xl font-semibold text-center md:text-2xl">
                        Why should you study at <br /> "AL-MUAMALAT"?
                    </h2>

                    {[
                        "Lifetime access",
                        "Video lessons",
                        "Tests",
                        "Projects",
                        "Downloadable resources",
                        "Access via mobile device"
                    ].map((item, index) => (
                        <div key={index} className='flex items-start gap-3'>
                            <img src={nuqta} alt="dot" className='object-cover mt-2' />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>

            </div>
            {/* keyingi qisim */}
            {/* <h2>Brief information about the course</h2> */}
            <MostPopular />
            <OurServis />
            <Form />
        </div>
    )
}

export default InternationalEducationalPrograms
