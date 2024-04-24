import React, { useState } from 'react';
// import styles from '../../src/components/CardSlider/BasicCard.module.css'
// import styles from '../../src/assets/styles/GetFundedCards.module.css';
import '../../src/assets/styles/GetFundedCard.css';

import HeadingFour from './HeadingFour';
import image2 from "../../src/assets/images/securedDebtIcon.png";
import image1 from "../../src/assets/images/startupIcon.jpg";
import image3 from "../../src/assets/images/unsecuredDebtIcon.png";
import image4 from "../../src/assets/images/capitalMarketetIcon.png";
import image5 from "../../src/assets/images/otherIcon.png";

console.log(image2);

function GetFundedCards(){
    // const [cards] = useState([
    //     {
    //         title:'STARTUPS',
    //         text: "Equity Fund Raise, Revenue Based Funding, Venture Debt, Secondary Sale of Shares.",
    //         image:image1,
    //         endtext:"(Pre Seed to Series F)",
    //     },
    //     {
    //         title:'SECURED DEBT',
    //         text: "Loan against: Property,Machinery, Gold, Shares and Securities, Mutual Funds, etc.",
    //         image:image2,
    //         endtext:"Debt Funding",

    //     },
    //     {
    //         title:'UNSECURED DEBT',
    //         text: "Unsecured debt from Bank and NBFCs Venture Debt, Private Debt, OC; CC, Working Capital, Growth Funding, Vendor Bill Discounting, Export Bill Discounting,Bank Guarantee etc.",
    //         image:image3,
    //         endtext:"Debt Funding",
    //     },
    //     {
    //         title:'CAPITAL MARKET',
    //         text: "Pre IPO Placements, SME IPO, Full Fledged IPO.",
    //         image:image4,
    //         endtext:"BSE / NSE"
    //     },
    //     {
    //         title:'OTHERS',
    //         text: "(NPA, ARC, Distressed Asset, Distressed Company Takeover and Funding) and Goverment Schemes (Funding via Goverment Schemes of MSME).",
    //         image:image5,
    //         endtext:"Goverment Schemes",

    //     },
    //     {}
    // ])
    return(
        <div>
        <section>
            <div className="container  ">
                    <div className='cards'>
                        
                                
                        {/* #card1             */}
                        <div className='cardd'>
                            <div className='service'>
                                    <div className='service-logo'>
                                        <img src={image1}></img>                                            
                                    </div>
                                <span><HeadingFour text={"STARTUPS"}/></span>
                            </div>
                            <p>Equity Fund Raise, Revenue Based Funding, Venture Debt, Secondary Sale of Shares.</p>
                            <h4 className='animated-button1'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Pre Seed to Series F</h4>
                        </div>

                        {/* Card 2 */}
                        <div className='cardd'>
                            <div className='service'>
                                    <div className='service-logo'>
                                        <img src={image2}></img>                                            
                                    </div>
                                <span><HeadingFour text={"SECURED DEBT"}/></span>
                            </div>
                            <p>Loan against: Property,Machinery, Gold, Shares and Securities, Mutual Funds, etc.</p>
                            <h4 className='animated-button1'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Debt Funding</h4>
                        </div>

                        {/* Card 3 */}
                        <div className='cardd'>
                            <div className='service'>
                                    <div className='service-logo'>
                                        <img src={image3}></img>                                            
                                    </div>
                                <span><HeadingFour text={"UNSECURED DEBT"}/></span>
                            </div>
                            <p>Unsecured debt from Bank and NBFCs Venture Debt, Private Debt, OC; CC, Working Capital, Growth Funding, Vendor Bill Discounting, Export Bill Discounting,Bank Guarantee etc.</p>
                            <h4 className='animated-button1'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Debt Funding</h4>
                        </div>

                        {/* Card 4 */}
                        <div className='cardd'>
                            <div className='service'>
                                    <div className='service-logo'>
                                        <img src={image4}></img>                                            
                                    </div>
                                <span><HeadingFour text={"CAPITAL MARKET"}/></span>
                            </div>
                            <p>Pre IPO Placements, SME IPO, Full Fledged IPO.</p>
                            <h4 className='animated-button1'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            BSE / NSE</h4>
                        </div>

                        {/* Card 5 */}
                        <div className='cardd'>
                            <div className='service'>
                                    <div className='service-logo'>
                                        <img src={image5}></img>                                            
                                    </div>
                                <span><HeadingFour text={"OTHERS"}/></span>
                            </div>
                            <p>(NPA, ARC, Distressed Asset, Distressed Company Takeover and Funding) and Goverment Schemes (Funding via Goverment Schemes of MSME).</p>
                            <h4 className='animated-button1'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Goverment Schemes</h4>
                        </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default GetFundedCards;