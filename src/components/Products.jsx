import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchProducts } from '../store/productSlice'

const Products = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.products)
    // const [products, setproducts] = useState([])

    useEffect(() => {
        dispatch(fetchProducts())

        // const fetchinitialProducts = async () => {
        //     await fetch('https://fakestoreapi.com/products')
        //         .then(res => res.json())
        //         .then(json => setproducts(json))
        // }
        // fetchinitialProducts()
    }, [])

    if (status === STATUSES.LOADING) {

        return <div> <span className="spinner-border" role="status">
            <span className="sr-only"></span>
        </span></div>
    }
    if (status === STATUSES.ERROR) {
        return <h3 className='text-center'>Something went wrong !!</h3>
    }

    return (
        <div >
            <div className='row d-flex '>
                {
                    products.map((singleProduct) => {
                        return <ProductCard key={singleProduct.id} singleProduct={singleProduct} />
                    })
                }

            </div>
        </div>
    )
}

export default Products