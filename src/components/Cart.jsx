
import { useEffect, useState } from 'react';
import '../style/cart.css'
import CheckOut from './CheckOut';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

function Cart({cartClose}){

    const [checkout, setCheckout] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const docRef = collection(db,'testCollection')

    

    useEffect(()=>{
        const addToCart = async () => {
            try {
                const data = await getDocs(docRef)
                const filterData = await data.docs.map(i=>i.data())
                setCartItems(preData => [...preData,filterData])
                console.log(cartItems)
            } catch (error) {
                console.log(error)
            }
        }
    },[])


    return(
        <>
        <div className="cart-wrapper" >
            <h2>Cart</h2>
            <h3 onClick={cartClose}>X</h3>
            <div className="cart-box cart-box1">
                <ul>
                    <li>
                        <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/jordan.png" width="100px" alt="" />
                        <p className="name">name</p>
                        <p className="price">200 RS</p>
                        <h2>X</h2>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/jordan.png" width="100px" alt="" />
                        <p className="name">name</p>
                        <p className="price">200 RS</p>
                        <h2>X</h2>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/jordan.png" width="100px" alt="" />
                        <p className="name">name</p>
                        <p className="price">200 RS</p>
                        <h2>X</h2>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/jordan.png" width="100px" alt="" />
                        <p className="name">name</p>
                        <p className="price">200 RS</p>
                        <h2>X</h2>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/jordan.png" width="100px" alt="" />
                        <p className="name">name</p>
                        <p className="price">200 RS</p>
                        <h2>X</h2>
                    </li>
                </ul>
            </div>
            <div className="cart-box cart-box2">
                ffsfsfsfsf
            </div>
        </div>
        </>
    )
}
//<CheckOut clickCheckout={checkout} clickClose={setCheckout}    />

export default Cart;