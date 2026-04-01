import React from 'react';

const PricingCard = ({pricingD}) => {
    const {name,description,price,period,features,buttonText}= pricingD;
    return (
        <div className='shadow-2xl  p-5  relative m-4 rounded-xl transform transition hover:scale-105  space-y-5 text-left'>
            <h3 className='text-2xl'>{name} </h3>
            <p className='text-[#777777]'>{description}</p>

            <div className='flex items-center'>
                <h2 className='text-2xl'>${price}</h2>
                <p className='text-[#777777]'>/{period}</p>
            </div>

            <div>
                {
                    features
                }
            </div>

            <button className='btn bg-[#4F39F6] text-white w-full rounded-full'>{buttonText}</button>




        </div>
    );
};

export default PricingCard;