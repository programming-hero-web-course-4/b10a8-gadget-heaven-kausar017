import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const About = () => {

    const aboutUs = useLoaderData();

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
                            <h1 className='text-4xl font-bold text-[#9538E2] shadow-xl'>Meet the Team:</h1>
                            <div className='my-5 grid md:grid-cols-3 gap-5 justify-center px-2'>
                                {
                                    data.team.map((tem, i) =>
                                        <div key={i}>
                                            <div className="card card-compact bg-base-100 shadow-xl h-[600px] transition hover:scale-105 overflow-hidden">
                                                <figure>
                                                    <img
                                                        className='p-3 rounded-xl h-[400px] w-full object-cover'
                                                        src={tem.image}
                                                        alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">Name: {tem.name}</h2>
                                                    <h2 className='text-xl'><span className='font-bold'>Position:</span> {tem.position}</h2>
                                                    <p className='text-gray-500 text-lg'><span className='font-bold'>Bio:</span> {tem.bio}</p>
                                                    <div className="card-actions justify-end">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div>
                                <h1 className='text-4xl font-bold text-[#9538E2] shadow-xl px-2'>Features: </h1>

                                {
                                    data.features.map((fe, i) => <ul className='mt-3' key={i}>
                                        <ol className='ml-3 font-bold text-gray-500'>{i + 1}. {fe}</ol>
                                    </ul>)
                                }

                            </div>
                            <div className='my-5 '>
                                <h1 className='text-4xl font-bold text-[#9538E2] shadow-xl px-2'>Technologies Used</h1>
                                <div className='grid lg:grid-cols-4 gap-2 px-2'>
                                    {
                                        data.technologies_used.map((technolgy, i) =>
                                            <div key={i} className='card my-5 flex flex-row items-center bg-gray-200'>
                                                <div>
                                                    <img className='w-[200px] p-3 h-[150px]' src={technolgy.logo} alt="" />
                                                </div>
                                                <div className='card-body'>{technolgy.name}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </>)
                }
                <section className="py-10 px-5 text-center">
                    <button className="btn bg-[#9538E2] text-white rounded-full">Contact Us</button>
                </section>
            </div>
        </HelmetProvider>
    );
};

export default About;
