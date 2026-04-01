import React, { use } from 'react';

const Step = ({stepPromise}) => {
    const stepData = use(stepPromise)
    console.log(stepData);
    return (
        <div className='container mx-auto mt-38 space-y-18'>
            <div className='text-center space-y-4'>
                <h1 className='text-2xl md:text-4xl'>Get Started in 3 Steps</h1>
            <p className=' text-[#777777]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div>
                {stepData.map(steps => <div>
                    <img src={steps.icon} alt="" />
                    <h3>{steps.title} </h3>
                    <p>{steps.description} </p>
                    <div>
                        <p>{steps.id} </p>
                    </div>
                </div> )}
            </div>
        </div>
    );
};

export default Step;