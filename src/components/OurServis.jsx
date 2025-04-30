import React from 'react'
import ourservesimg from '../img/ourservesimg.png'
function OurServis() {
    const serves = [
        {
            id: 1,
            image: ourservesimg,
            title: 'Islamic Fund  Management',
            description: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
        },
        {
            id: 2,
            image: ourservesimg,
            title: 'Islamic Fund Management',
            description: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
        },
        {
            id: 3,
            image: ourservesimg,
            title: 'Islamic Fund Management',
            description: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
        },
        {
            id: 4,
            image: ourservesimg,
            title: 'Islamic Fund Management',
            description: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
        },
        {
            id: 5,
            image: ourservesimg,
            title: 'Islamic Fund Management',
            description: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
        },
        {
            id: 6,
            image: ourservesimg,
            title: 'Islamic Fund Management',
            description: 'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
        },

    ]
    const bgColors = [
        'bg-[#DEEAFF]', 'bg-[#D5F6ED]', 'bg-[#FBE2F4]',
        'bg-[#E2DBF9]', 'bg-[#EBEFF3]', 'bg-[#FFEDB6]'
    ];
    return (
        <div className='py-8'>
            <h2 className='pt-4 text-xl font-bold text-center md:text-3xl'>Our services </h2>
            <p className='py-2 font-normal text-center'>Expert guidance for managing funds in alignment with Islamic <br /> principles, helping you make informed, <br /> halal investment  decisions.</p>
            <div>
                <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                    {serves.map((key, index) => (
                        <div
                            key={index}
                            className={`transition duration-300 border rounded-lg shadow-md p-7 ${bgColors[index % bgColors.length]} hover:shadow-lg`}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <img src={key.image} alt={key.title} className="object-contain w-20 h-20 mr-4" />
                                <h2 className="text-lg font-bold text-center text-gray-800">{key.title}</h2>
                            </div>
                            <p className="mb-4 text-sm font-normal text-center text-gray-600">{key.description}</p>
                            <button className="w-full py-2 text-white font-bold transition duration-300 bg-[#152032] rounded-lg hover:bg-gray-900">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default OurServis