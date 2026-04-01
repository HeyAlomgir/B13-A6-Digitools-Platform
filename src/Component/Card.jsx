import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const Card = ({feature}) => {
    // console.log(feature);
    return (
        <div>
           <p className='flex items-center gap-2 text-[#777777]'>  <FaCheck className='text-[#BB4D00]  '></FaCheck> {feature} </p>
        </div>
    );
};

export default Card;