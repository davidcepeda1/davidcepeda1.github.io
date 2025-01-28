import React from 'react'
import './Footer.css'
import { assets} from '../../assets/assets'
const Footer = () => {
  return (
    
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img className='logo-white' src={assets.logo_white} alt="" />
                <p>¡Bienvenido a FoodDeliveryEC, tu solución definitiva para realizar pedidos y entregas de comida de manera rápida y confiable! Nuestra aplicación está diseñada para conectar a los entusiastas de la comida con sus restaurantes favoritos y brindar una experiencia de pedido perfecta. Con FoodDeliveryEC, puedes explorar una amplia variedad de cocinas, personalizar tus pedidos y disfrutar de entregas rápidas directamente a tu puerta.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPAÑIA</h2>
                <ul>
                    <li>Home</li>
                    <li>Sobre Nosotros</li>
                    <li>Delivery</li>
                    <li>Política de privacidad</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>CONTÁCTENOS</h2>
                <ul>
                    <li>+593 96 885 5639</li>
                    <li>davidcepeda751@gmail.com</li>
                    <li>+593 99 511 4978</li>
                    <li>isaoña@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">®Usabilidad 2025 </p>
      
    </div>
  )
}

export default Footer
