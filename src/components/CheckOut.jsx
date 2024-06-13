import '../style/checkout.css'

function CheckOut({clickCheckout,setCheckout}){

    
    return(
    <>
        { clickCheckout &&  
        <div className="checkout">
            <div className="checkout-box">
                <form action="">
                    <h4>Personal Information</h4>
                    <label>Full Name</label>
                    <input type="text" placeholder='name' id='name' />
                    <label>Address</label>
                    <input type="text" placeholder='D.R Wijewardena Mawatha Colombo 10' />
                    <h4>Card Information</h4>
                    <input type="text" placeholder='Card Number' />        
                        <div className="card-info">
                            <input type="text" placeholder='Month' />
                            <input type="text" placeholder='Year' />
                            <input type="text" placeholder='CVV' />
                        </div>
                    <button>Checkout</button>
                </form>
            </div>
            <h2 className='close-icon' onClick={()=>setCheckout(false)} >X</h2>
        </div>}
    </>
    )
}


export default CheckOut;