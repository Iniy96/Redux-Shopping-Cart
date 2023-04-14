import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, remove, decrease, clearCart } from '../../store/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const productCartState = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }
  const calculateSubTotal = () => {
    return productCartState.reduce((acc, crr) => {
      const { quantity, price } = crr
      let itemTotalPrice = quantity * price.toFixed(0)
      return acc += itemTotalPrice
    }, 0)
  }
  const calculateindividualtotalQty = () => {
    return productCartState.reduce((acc, crr) => {
      const { quantity } = crr
      return acc += quantity
    }, 0)
  }

  const proceedtocheckout = () => {
    dispatch(clearCart())
    alert("Your Order is placed")
    navigate("/")
  }

  return (
    <div>
      <h4>Your Cart</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            productCartState.map((product, i) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img src={product.image} className=" object-fit-contain"
                      alt="..."
                      style={{ maxHeight: "50px" }} />
                  </td>
                  <td>{product.title}</td>
                  <td>$ {product.price.toFixed(0)}</td>
                  <td>
                    <div>

                      <button className='btn btn-secondary' onClick={() => dispatch(increase(product.id))} >+</button>
                      <span className='mx-2'>{product.quantity}</span>
                      <button className='btn btn-secondary' disabled={product.quantity <= 1 ? true : false} onClick={() => dispatch(decrease(product.id))}>-</button>
                    </div>
                  </td>
                  <td><button className='btn btn-primary' onClick={() => handleRemove(product.id)} >Remove</button></td>
                </tr>

              )
            })
          }


        </tbody>
      </table>

      <div className='d-flex justify-content-between px-5'>
        <div>
          <span className='fs-5'>Total Quantity: </span>{calculateindividualtotalQty()}
        </div>
        <div>
          <span className='fs-5'>Subtotal: </span> $ {calculateSubTotal()}
        </div>


      </div>
      <div className='d-flex justify-content-between p-2'>
        <button className='btn btn-secondary btn-sm' onClick={() => dispatch(clearCart())}>Clear Cart</button>
        <button type="button" class="btn btn-primary" onClick={proceedtocheckout}>Proceed To Checkout</button>
      </div>
    </div>
  )
}

export default Cart