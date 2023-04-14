import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/cartSlice'

const ProductCard = ({ singleProduct }) => {
    const dispatch = useDispatch()
    const productsInCart = useSelector((state) => state.cart)

    // const [toggleAddCrtBtn, settoggleAddCrtBtn] = useState(true)


    return (
        <div className='col-6 col-sm-4 col-md-3 col-lg-2  d-flex flex-column p-2 border'>
            <div className='text-center '>
                <img
                    src={singleProduct.image}
                    className=" object-fit-contain"
                    alt="..."
                    style={{ width: "100%", height: "150px", maxHeight: "150px" }}
                />
            </div>
            <div className="card-body pt-4 d-flex flex-column  ">
                <div className="mt-auto d-flex flex-column wrap">
                    <h5 className="card-title">{singleProduct.title}</h5>
                    <div className="card-text fw-bold my-2">$ {singleProduct.price.toFixed(0)}</div>
                </div>
                {

                    productsInCart.some((cartProduct) => cartProduct.id === singleProduct.id) ? (
                        <button className='btn btn-success' onClick={() => dispatch(remove(singleProduct.id))}>Remove from Cart</button>
                    ) : (
                        <button className='btn btn-primary' onClick={() => dispatch(add(singleProduct))}>Add to Cart</button>
                    )

                }


            </div>
        </div>
    )
}

export default ProductCard