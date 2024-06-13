import '../style/home.css'
import '../style/fbox.css'
import Fbox from './Fbox';
import Feature from './Feature';
import Cont from './Cont';
import Footer from './Footer';
//import { connect } from './contact.jsx';

function Home(){

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
        <div className="wrapper" id="home">
            <main>
                <div className="m-box m-box1">
                    <div className="m-box-text">     
                        <h2>NEW IN</h2>
                        <h1>NIKE BOOST</h1>
                        <h1>AIR 360</h1>
                        <h5>EXPLORE THE NEW COLLECTION OF SNEAKERS</h5>
                    </div>
                    <a href="#sale" onClick={(e)=>e.preventDefault()}>EXPLORE MORE</a>
                </div>
                <div className="m-box m-box2">
                    <div className="circle"></div>
                    <img
                    className='air-img' 
                    src="https://github.com/vishwa2001911/NeoStore/blob/main/img/blazer2.png?raw=true" 
                    alt="air" />
                </div>
            </main>

            <Feature />
        </div>
        </>
    )
}

export default Home;
