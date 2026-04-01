import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({pricingPromise}) => {
    const pricing = use(pricingPromise)
    console.log(pricing);
    return (
        <div className='container mx-auto'>
            <div className='text-center mt-10'>
                <h1 className='text-2xl md:text-4xl'>Simple, Transparent Pricing</h1>
                <p className='text-[#777777]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        pricing.map(pricingD => <PricingCard pricingD={pricingD} key={pricingD.id}></PricingCard> )
                    }
                </div>

            </div>
        </div>
    );
};

export default Pricing;