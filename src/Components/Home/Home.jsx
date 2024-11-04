

import Bannar from '../Bannar/Bannar';
import GadgetCard from '../GadgetCard/GadgetCard';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData();
    // console.log(products);
    
    return (
        <div>
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
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Home;
