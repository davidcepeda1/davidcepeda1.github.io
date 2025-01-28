import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import {StoreContext} from '../../context/StoreContext'

const PlaceOrder = () => {

      const {getTotalCartAmount} = useContext(StoreContext)


  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Información de entrega</p>
        <div className='multi-fields'>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        </div>
        <input type="Email" placeholder='Direccion de Correo' />
        <input type="text" placeholder='Calle' />
        <div className="multi-fields">
        <input type="text" placeholder='Ciudad' />
        <input type="text" placeholder='Provincia' />
        </div>
        <div className="multi-fields">
        <input type="text" placeholder='Codigo Zip' />
        <input type="text" placeholder='Pais' />
        </div>
        <input type="text" placeholder='Telefono' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Totales del Carrito</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p> 
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tarifa de entrega</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEDER AL PAGO</button>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
