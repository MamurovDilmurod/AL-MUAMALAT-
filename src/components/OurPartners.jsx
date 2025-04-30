import React from 'react'
import ourpartners1 from '../img/ourpartners1.png'
import ourpartners2 from '../img/ourpartners2.png'
import ourpartners3 from '../img/ourpartners3.png'
import ourpartners4 from '../img/ourpartners4.png'
import ourpartners5 from '../img/ourpartners5.png'

const OurPartners = () => {
    const images = [ourpartners1, ourpartners2, ourpartners3, ourpartners4, ourpartners5];

    return (
        <div className='py-10 overflow-hidden'>
            <h2 className='pt-4 text-xl font-bold text-center md:text-3xl'>Our Partners</h2>
            <p className='py-2 font-normal text-center'>
                Our partners are trusted institutions and organizations <br />
                that share our commitment to ethical and halal investments.
            </p>

            <div className='w-full mt-10 overflow-hidden'>
                <div className='flex gap-10 animate-slide w-max'>
                    {images.concat(images).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Our Partners"
                            className='object-cover w-48 h-auto transition duration-300 ease-in-out transform hover:scale-110'
                        />
                    ))}
                </div>
                <br />
                <div className='flex gap-10 animate-slide1 w-max'>
                    {images.concat(images).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Our Partners"
                            className='object-cover w-48 h-auto transition duration-300 ease-in-out transform hover:scale-110'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
