import React from 'react'
import image1 from "../../src/assets/images/service1.jpg"
import image2 from "../../src/assets/images/service2.jpg"
import image3 from "../../src/assets/images/service3.jpg"
import image4 from "../../src/assets/images/service4.webp"
import image5 from "../../src/assets/images/service4.jpg"
import image6 from "../../src/assets/images/service5.jpg"
import image10 from "../../src/assets/images/service10.jpg"
import image11 from "../../src/assets/images/service11.jpg"
import image24 from "../../src/assets/images/service24.jpg"
import "../../src/assets/styles/serviceCard.css"


const ServiceCard = () => {
  return (
    <>
    <div class="containerS">
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image1} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>FUND RAISING</h2>
                    <p>Our core expertise lies in helping startups and businesses raise Equity and Debt funding from our 5000+ network of investors across India, USA, Middle East, Israel, Singapore, Europe, Hong Kong, Australia, China and Japan . These investors are HNIs, Private Investors, Angel Investors, Banks, NBFCs, Family Offices, Corporates, VC firms and funds, CSR and Impact funds.</p>
                </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image2} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>BUSINESS DECK CREATION</h2>
                    <p>A good business plan helps you in faster fund raising for your company. Our expert team will help you in creation of business deck, financials, Information Memorandum and other required documentation for your faster fund raising.<br></br><br></br><br></br></p>
                </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image3} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>COMPANY FORMATION & LEGALITIES</h2>
                    <p>We know that as an entrepreneur you have plenty of things to do. We want you to focus on your idea and leave the hassles of company formation and legalities to us.<br></br><br></br><br /></p>
                </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image4} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>IT & Tech Support</h2>
                    <p>Our experienced and creative team will not only create a website and app for you but will also provide you full stack solution for your software, digital marketing and much more at the best competitive rates across the industry. Do connect with us for more that our IT team has to offer you. We have special offers for start-ups.<br></br><br></br><br></br></p>
                </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image5} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>STRATEGIC CONNECTS AND BUSINESS NETWORKING</h2>
                    <p>We open up the large and diversified network of 2,00,000+ Decision makers, Business owners, Investors and Service Providers from our network to you for your faster growth.<br></br><br></br><br></br><br></br></p>
               </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image6} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>STRATEGIC GUIDANCE</h2>
                    <p>Our expert team of mentors provide you with all the help, support and step by step guidance required for – Creating MVPs, Closed Circuit Testing; Go to Market, Market Entry Roadmap and Business Development.<br></br><br></br><br></br></p>
                </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image11} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>SME IPO and IPOs</h2>
                    <p>With our vision of 'Idea to IPO', we provide services of SME IPO and IPO.
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br></p>                </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image24} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>MERGER & ACQUISITION</h2>
                    <p>We facilitate and handhold you for merger, acquisition OR buyout.
                    <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
        <div class="cardS">
            <div class="lineS"></div>
            <div class="imgBxS">
                <img src={image10} alt=""></img>
            </div>
            <div class="contentS">
                <div class="details">
                    <h2>INTERNATIONAL EXPANSION</h2>
                    <p>We provide complete end to end support for companies looking to set up their businesses out of India (China, Israel, Europe, USA, Africa, Singapore and Dubai) or foreign companies looking to enter Indian markets.                        <br></br>
                    <br></br>
                    <br></br>
</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceCard;