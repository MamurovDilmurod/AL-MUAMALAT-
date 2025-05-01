import React from 'react'
import ourexpertimg from '../img/ourexperetimg.png'
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const expertData = [
    {
        img: ourexpertimg,
        name: "Dr. Mezbah Uddin Ahmed",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        img: ourexpertimg,
        name: "Dr. Aisha Khan",
        desc: "Experienced professional in Islamic finance and legal consulting. She brings innovative solutions with a client-centric approach."
    },
    {
        img: ourexpertimg,
        name: "Sheikh Omar Farooq",
        desc: "A renowned figure in Islamic Sharia advisory with years of experience in product development and ethical investments."
    }
]

function OurExpert() {
    return (
        <div className="py-10">
            <h2 className='pt-4 text-xl font-bold text-center md:text-3xl'>Our Expert Team</h2>
            <p className='py-2 font-normal text-center'>
                Our team consists of seasoned professionals with extensive experience <br />
                in Islamic finance and management. Each member brings a unique set of <br />
                skills and expertise
            </p>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                navigation
                pagination={{ clickable: true }}
                className="max-w-5xl mx-auto"
            >
                {expertData.map((expert, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#c8e0e0] rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-md">
                            {/* Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src={expert.img}
                                    alt={expert.name}
                                    className="object-cover rounded-lg h-80 w-72"
                                />
                            </div>

                            {/* Text & Icons */}
                            <div className="space-y-4 text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-[#0c1e35]">{expert.name}</h3>
                                <p className="max-w-xl leading-relaxed text-slate-900">{expert.desc}</p>

                                <div className="flex justify-center md:justify-start gap-5 text-[#0c1e35] text-xl">
                                    <FaTelegram className="text-xl transition cursor-pointer hover:text-blue-500" />
                                    <FaInstagram className="text-xl transition cursor-pointer hover:text-pink-500" />
                                    <FaFacebook className="text-xl transition cursor-pointer hover:text-blue-600" />
                                    <FaTwitter className="text-xl transition cursor-pointer hover:text-sky-500" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default OurExpert;
