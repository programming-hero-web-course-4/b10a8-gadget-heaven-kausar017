import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {


    
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>about</title>
                    <link rel="canonical" href="https://www.example.com/" />
                </Helmet>

                hello about
            </div>
        </HelmetProvider>
    );
};

export default About;
