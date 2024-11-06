import { Helmet, HelmetProvider } from 'react-helmet-async';
import Bannar from '../Bannar/Bannar';
import GadgetCard from '../GadgetCard/GadgetCard';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData();
    // console.log(products);

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home</title>
                    <link rel="canonical" href="https://www.example.com/" />
                </Helmet>

                {/* Bannar section */}
                <section className='mb-[320px]'>
                    <Bannar />
                </section>
                
                <section>
                    {/* GadgetCard section */}
                    <GadgetCard products={products} />
                </section>
                
                <section>
                    {/* outlet */}
                    <Outlet />
                </section>
            </div>
        </HelmetProvider>
    );
};

export default Home;
