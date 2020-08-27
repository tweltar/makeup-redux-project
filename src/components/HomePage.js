import React from 'react';
import "./HomePage.css";
import makeup from "../images/makeup.png";
import mascara from "../images/mascara-bnw.png";
import eyeshadow from "../images/eye-shadows-bnw.png";
import ttb from "../images/ttb.jpg";
import ytuse from "../images/ytuse.png";
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <section className="Home">
                <h1>Prettify</h1>
                <h3>MAKEUP INFORMATION</h3>
                <a href="" className="Button">Getting Started <span className="Arrow">&#187;</span></a>
            </section>
            <img className="Logo" src={makeup} alt="makeup" />
            <section className="About">
                <h3 className="Headers">ABOUT</h3>
                <p>This website aims to help you find various cosmetics from famous brands of western in just one place. We provide price for each product as well as ranking for your ease of choice. Recently, we have also added the original website for every product. We hope this helps you find your needs easier and faster. Happy Shopping!</p>
                <div className="CardBox">
                    <div className="Card">
                    <img src={mascara} alt="" style={{marginRight: '30px'}} />
                    <p className="Card-content"><span>Brands we support: <br/></span><i>almay, alva, anna sui, annabelle, benefit, boosh, burt's bees, butter london, c'est moi, cargo cosmetics, china glaze, clinique, coastal classNameic creation, colourpop, covergirl, dalish, deciem, dior, dr. hauschka, e.l.f., essie, fenty, glossier, green people, iman, l'oreal, lotus cosmetics usa, maia's mineral galaxy, marcelle, marienatie, maybelline, milani, mineral fusion, misa, mistura, moov, nudus, nyx, orly, pacifica, penny lane organics, physicians formula, piggy paint, yummies, salon perfect, sante, sinful colours, smashbox, stila, suncoat, w3llpeople, wet n wild, zorah, zorah biocosmetiques</i></p>
                </div>
                <div className="Card">
                    <p className="Card-content"><span>Products you can search for: <br/></span><i>blush, bronzer, eyebrow, eyeliner, eyeshadow, foundation, lip liner, lipstick, mascara, nail polish</i></p>
                    <img src={eyeshadow} alt="" style={{marginLeft: '30px'}} />
                </div>
            </div>
        </section>
        <section className="Developer">
            <h3 className="Headers">ABOUT DEVELOPER</h3>
            <div>
                <p>Hello, I am TwelTar, a third-year IT student from YTU. I am developing this website as a redux-practice-project for YTU Software Engineers' Team (YTUSE), led by @thesaihan. If you are interested about our team, you can find out more <a href="" title="YTUSE website">here</a>.</p> <br/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <p>used api:&nbsp;&nbsp;<a href="http://makeup-api.herokuapp.com/" title="Makeup API">Makeup API</a></p>
                    <div className="Colors">
                        <p>used colors: </p>
                        <div className="Color" style={{backgroundColor: '#DFAFC7'}} title="#DFAFC7"></div>
                        <div className="Color" style={{backgroundColor: '#B780DF'}} title="#B780DF"></div>
                        <div className="Color" style={{backgroundColor: '#925CE1'}} title="#925CE1"></div>
                        <div className="Color" style={{backgroundColor: '#54229e'}} title="#54229e"></div>
                        <div className="Color" style={{backgroundColor: '#08192B'}} title="#08192B"></div>
                    </div>
                    <p>used makeup icons:&nbsp;&nbsp;<a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                </div>
            </div>
        </section>
        <section className="Contact">
            <h3 className="Headers">CONTACT</h3>
            <div className="Contact-table">
                <div className="Contact-card">
                    <p>DEVELOPER</p>
                    <img src={ttb} alt="" className="Contact-photo" />
                    <div className="Contact-media">
                        <a href="" title="Email"><i className="fas fa-at"></i></a>
                        <a href="" title="Github"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="Contact-card">
                    <p>TEAM</p>
                    <img src={ytuse} alt="" className="Contact-photo" />
                    <div className="Contact-media">
                        <a href="" title="Email"><i className="fas fa-at"></i></a>
                        <a href="" title="Github"><i className="fab fa-github"></i></a>
                    </div>
                </div>    
            </div>
        </section>    
        <Footer />
    </div>
    );
};

export default HomePage;