import '../style/sale.css'
import image from '../assets/lg.png'
import image2 from '../assets/img1.png'
import image3 from '../assets/img2.png'
import { items } from './items.js'
import Fbox from './Fbox.jsx'
import Cont from './Cont.jsx'
import Footer from './Footer.jsx'
//import { Connect } from 'vite'

function Sale(){

    return(
        <>
        <div className="wrapper sale" id="sale">
            <div className="shop-menu">
                <span className='topBar' ></span>
                <h1>SALES</h1>
            </div>
            <div className="sale-headder saleBanner">
                <h3>50% OFF</h3>
                <p>IN NIKE AIR SNEAKERS</p>
                <button>Get It Now</button>

                <div>
                <img src={image} alt="" />
                </div>
            </div>

            <div className="top-items">
                <div className="t-i-box t-i-box1">
                    <img src={image2} alt="" />
                    <h3>NIKE AIR</h3>
                    <p>NEW COLLECTION</p>
                </div>
                <div className="t-i-box t-i-box2">
                    <img src={image3} alt="" />
                    <h3>NIKE AIR</h3>
                    <p>NEW COLLECTION</p>
                </div>
            </div>
            <div className="top-item-list">
                {
                    items.map(i => <Fbox image={i.colors.img} name={i.title} price={i.price} id={i.id} /> )
                }
            </div>
        </div>
        </>
    )
}

export default Sale;