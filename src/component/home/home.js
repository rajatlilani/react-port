import './home.css';
import mainImage from './lo.png';

import Header from '../header/Header';

export default function Home() {

    return (

        <div className="flex1">
            <Header className="Container" />
            <div id='home' className="Container home-container">
                {/* <h1>
                <span>Hello</span>
                Rajat Lilani
            </h1> */}


                <div className="logo">
                    <img src={mainImage} alt="" />
                </div>
                {/* <a href="#footer" className='scroll-down'>
                <hr />
                <h5>scroll down</h5>
                <BsMouse className='scroll' />
                <hr />
            </a> */}
                {/* <h2>
                <span>About Me</span> <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
                    quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
                    aspernatur, magnam culpa iste adipisci?
                </p>
            </h2> */}



            </div >
        </div>
    )
}