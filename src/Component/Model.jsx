import React, { use } from 'react';
import Cart from './Cart';

const Model = ({modelPromise,carts,setCarts}) => {
    const models = use(modelPromise)
    // console.log(models);
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {models.map(model => <Cart 
            model={model}
            carts={carts}
            setCarts={setCarts}
            key={model.id}></Cart> )}
        </div>
    );
};

export default Model;