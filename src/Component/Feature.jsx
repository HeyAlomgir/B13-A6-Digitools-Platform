import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const Feature = ({feature}) => {
    return (
        <div className=''>
            <p className='flex items-center gap-2 text-[#777777]' > <FaCheck className='text-yellow-200'></FaCheck> {feature}</p>
        </div>
    );
};

export default Feature;