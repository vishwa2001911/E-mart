import '../style/home.css'
import Fbox from './Fbox';

function Feature(){

    const products = [
        {
          id: 1,
          title: "Air Force",
          price: 119,
          colors:
            {
              code: "black",
              img: "https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/air.png",
            }
        },
        {
          id: 2,
          title: "Air Jordan",
          price: 149,
          colors:
            {
              code: "lightgray",
              img: "https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/jordan.png",
            }
        },
        {
          id: 3,
          title: "Blazer",
          price: 109,
          colors:
            {
              code: "lightgray",
              img: "https://raw.githubusercontent.com/vishwa2001911/NeoStore/main/img/blazer.png",
            },
        },
      ];
 
    return(
        <>
            <div className="f-wrapper" id='featured' >
                <span></span>
                <h1 >FEATURED</h1>
                
                <dev className="f-box-wrapper">
                { products.map(i=><Fbox image={i.colors.img} name={i.title} price={i.price} id={i.id} />) }
                </dev>
            </div>
        </>
    )
}


export default Feature;