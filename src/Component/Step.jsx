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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {stepData.map(steps => <div className='shadow-2xl  p-5  relative m-4 rounded-xl transform transition hover:scale-105 text-center space-y-5'>

                    
                        <img className=' mx-auto mt-10 bg-blue-100 rounded-full p-4  ' src={steps.icon} alt="" />
          
                    <h3 className='text-2xl'>{steps.title} </h3>
                    <p className='text-[#777777]'>{steps.description} </p>
                    <div className=' absolute top-3 right-5'>
                        <p className='bg-[#4F39F6] px-1 py-1 text-white rounded-full'>{steps.id} </p>
                    </div>
                </div> )}
            </div>
        </div>
    );
};

export default Step;