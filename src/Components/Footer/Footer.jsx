import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <div>
            <footer className="footer-center bg-white text-base-content rounded p-10 w-full py-20">
                <nav className='space-y-8'>
                    <h1 className='text-5xl font-bold'>Gadget Heaven</h1>
                    <p className='max-w-[1000px]'>At Gadget Heaven, we are dedicated to providing you with the latest and greatest in technology. Our mission is to enhance your shopping experience with an extensive selection of gadgets tailored to meet your needs.</p>
                </nav>
                <div className='grid md:grid-cols-3 gap-x-44 space-y-4 px-3 mt-5'>
                    <div>
                        <h4 className='text-lg font-bold'>Services</h4>
                        <div className='text-base flex flex-col'>
                            <a href="#">Order Tracking</a>
                            <a href="#">Shipping & Delivery</a>
                            <a href="#">Returns</a>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-lg font-bold'>Company</h4>
                        <div className='text-base flex flex-col'>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-lg font-bold'>Legal</h4>
                        <div className='text-base flex flex-col'>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;
