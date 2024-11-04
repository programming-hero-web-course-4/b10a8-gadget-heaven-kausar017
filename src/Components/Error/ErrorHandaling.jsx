
import PropTypes from 'prop-types';

const ErrorHandaling = props => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center'>
            <h1 className='text-7xl font-bold'>Opss!! Data NOt Found</h1>
            <p className='text-5xl font-bold text-red-700'>400</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s" alt="" />
        </div>
    );
};

ErrorHandaling.propTypes = {
    
};

export default ErrorHandaling;