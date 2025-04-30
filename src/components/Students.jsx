import React from 'react';
import studentsimg from '../img/studentsimg.png';

function Students() {
    const studentsobject = [
        {
            img: studentsimg,
            name: 'Finlay Kirk',
            position: 'Web Designer',
            title: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
        },
        {
            img: studentsimg,
            name: 'Sarah Ahmed',
            position: 'Frontend Developer',
            title: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
        },
        {
            img: studentsimg,
            name: 'Omar Yusuf',
            position: 'UX Specialist',
            title: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
        }
    ];

    return (
        <div className="px-4 bg-white py-14 md:px-20">
            <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:text-4xl">
                What Students Say
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-center text-gray-600">
                Our team consists of seasoned professionals with extensive experience
                in Islamic finance and management. Each member brings a unique set of skills and expertise.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
                {studentsobject.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 transition shadow-lg rounded-xl hover:shadow-xl bg-gray-50"
                    >
                        <p className="mb-4 text-sm leading-relaxed text-gray-700">
                            “{item.title}”
                        </p>
                        <div className="flex items-center gap-4">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="object-cover w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="font-bold text-gray-800 text-md">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Students;
