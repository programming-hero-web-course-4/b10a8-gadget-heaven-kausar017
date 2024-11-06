import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const About = () => {

    const aboutUs = useLoaderData();
    console.log(aboutUs.mission);

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>about</title>
                    <link rel="canonical" href="https://www.example.com/" />
                </Helmet>

                <div className="text-center py-10 bg-[#9538E2] text-white space-y-5">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p>Learn more about our mission, vision, and team who made this project possible.</p>
                </div>

                {
                    aboutUs.map((data, i) => <>
                        <div key={i} className='py-10 px-3'>
                            <div>
                                <h1 className='text-4xl font-bold text-[#9538E2] shadow-xl'>Our Mission: </h1>
                                <h1 className='text-lg font-bold mt-2 text-gray-500'>{data.mission}</h1>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-4xl font-bold text-[#9538E2] shadow-xl'>Our Vision: </h1>
                                <h1 className='text-lg font-bold mt-2 text-gray-500'>{data.vision}</h1>
                            </div>
                        </div>
                        <div>
                            <h1  className='text-4xl font-bold text-[#9538E2] shadow-xl'>Meet the Team:</h1>
                            <div className='my-5'>
                                {
                                    data.team.map((tem, i) =>
                                        <div key={i}>
                                            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                                                <figure>
                                                    <img
                                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                                        alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">Shoes!</h2>
                                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-primary">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </>)
                }

                <section className="py-10 px-5">
                    <h2 className="text-2xl font-semibold">Meet the Team</h2>
                    <div className="team-member">
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p>Project Lead</p>
                    </div>
                    <div className="team-member">
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p>Frontend Developer</p>
                    </div>
                </section>

                <section className="py-10 px-5">
                    <h2 className="text-2xl font-semibold">Technologies Used</h2>
                    <p>React, Node.js, MongoDB, Express</p>
                </section>

                <section className="py-10 px-5 text-center">
                    <button className="btn bg-[#9538E2] text-white rounded-full">Contact Us</button>
                </section>
            </div>
        </HelmetProvider>
    );
};

export default About;
