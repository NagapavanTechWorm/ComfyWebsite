import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const loader = async({params})=>{
    const response = await customFetch(`/products/${params.id}`);
    return {products:response.data.data};
}

const SingleProduct = ()=>{
    const {products} = useLoaderData();
    const { image, title, price, description, colors, company } = products.attributes;
    const dollarsAmount = formatPrice(price);
    return(
        <section>
            <div className='text-md breadcrumbs'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>    
            </div>
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                <img src={image} className='h-[59%] object-cover rounded-lg lg:w-full' />
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
                    <p className='mt-3 text-xl'>{dollarsAmount}</p>
                    <p className='mt-6 leading-8'>{description}</p>
                </div>
            </div>
        </section>
    )
}
export default SingleProduct;