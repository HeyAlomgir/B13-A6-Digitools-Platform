import React, { useState } from 'react';
import Card from './Card';
import { toast } from 'react-toastify';

const Cart = ({model,carts,setCarts}) => {
    const {name,description,tagType,period,features}=model;

    const [buy,setBuy]=useState(false);

    const handleBuyNow=(model)=>{
        setBuy(true)

       const isExit = carts.find(item => item.id === model.id);

       if(isExit){
        toast.error("alredy add by cart")
        return
       } 

       setCarts([...carts,model])

       toast.success("item add in cart")




    }
    return (
        <div className=''>
            <div className='shadow-2xl space-y-3 p-5  relative m-4 rounded-xl transform transition hover:scale-105'>
                <div className=' p-5 shadow-2xl rounded-full w-fit' ><img src={model.img} alt="" /></div>
                
                <h2 className='text-3xl'>{name}</h2>
                <p className='text-[#777777]'>{description} </p>

                <div className=' absolute -top-1  right-5 py-3   '>
                      <button className='btn bg-[#FEF3C6] text-[#BB4D00] rounded-full'>{tagType}</button>
                      </div>

                <p className='text-3xl flex items-center'>${model.price} <span className='text-[#777777] text-xl'>/{period}</span>  </p>



                <div className='space-y-2'>
                    {features.map((feature,index )=> <Card 
                    feature={feature}
                    key={index}></Card> )}
                </div>





                <button onClick={()=>handleBuyNow(model)} className='btn btn-primary w-full'>
                    {buy? "Added to Cart":"Buy Now"}
                </button>
                
            </div>
        </div>
    );
};

export default Cart;