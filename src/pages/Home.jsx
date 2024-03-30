import CardText from "../components/cardText/CardText.jsx";
import Navi from "../container/nav/Navi.jsx";
import Footer from "../container/footer/Footer.jsx";

import { dataLinkLinux, dataLinkDivers, dataLinkPresse, dataLinkStream, dataLinkDev, dataLinkMark, dataLinkShopInfo, dataLinkShopping, dataLinkPresse2 } from "../data/data"
import "./home.css"

export default function Home() {

    return (

        <div className="container-general">
            <Navi />
            <div className="linkContainer">
                <div className="cardTextContainer">
                    <h2>Linux</h2>
                    <CardText dataLink={dataLinkLinux} />
                </div>
                <div className="cardTextContainer">
                    <h2>Développeur</h2>
                    <CardText dataLink={dataLinkDev} />
                </div>
                <div className="cardTextContainer">                  
                    <h2>Divers</h2>
                    <CardText dataLink={dataLinkDivers} />
                </div>
            </div>
            <div className="linkContainer">
                <div className="cardTextContainer">                  
                    <h2>V.O.D</h2>
                    <CardText dataLink={dataLinkStream} />
                </div>
                <div className="cardTextContainer">
                    <h2>Presse</h2>
                    <CardText dataLink={dataLinkPresse} />
                </div>
                <div className="cardTextContainer">
                    <h2>Fabricant</h2>
                    <CardText dataLink={dataLinkMark} />
                </div>
            </div>
            <div className="linkContainer">
                <div className="cardTextContainer">
                    <h2>Shopping</h2>
                    <CardText dataLink={dataLinkShopping} />
                </div>
                <div className="cardTextContainer">
                    <h2>Presse 2</h2>
                    <CardText dataLink={dataLinkPresse2} />
                </div>
                <div className="cardTextContainer">
                    <h2>Achats Info</h2>
                    <CardText dataLink={dataLinkShopInfo} />
                </div>
            </div>
            <Footer />
        </div>
    )
}