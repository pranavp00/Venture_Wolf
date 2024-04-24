import React from 'react'
import "../../src/assets/styles/founder.css";
import founderimg from "../../src/assets/images/founderimg.jpeg";
import HeadingOne from './HeadingOne';

const FounderC = () => {
    return (
        <>
          <HeadingOne text={"Founder"}></HeadingOne>
        <div class="container">
        <div class="image-halff">
                <img src={founderimg} />
        </div>
        <div class="text-half">
            <div class="text">
                <p>With more than 20 years of experience in Financial Services Industry, Devang Raja is the Founder at Venture Wolf, a renowned speaker and startup jury panel member at #HultPrize, #MillionMinds, Ambassador for #INDIAGLOCAL and mentor at #Eduwingsudaipur, #NamsteStartup, International Business Startup & Entrepreneurs Association (#IBSEA). 

Guest lecturer at Alkesh Dinesh Mody Institute for Financial and Management Studies (#ADMIFMS). 

On invite he also curates startups for Atal Incubation Center (#AIC) - #NMIMS Incubation Center for Startup India Seed Fund (#SISF) where startups can raise up to 20L for product development and upto 50L for Go To Market. 

He sits on the investor panel at various start-up events across the country and mentors various startups in their journey with his vision of taking the startups from “Idea to IPO”. 

He has been invited on National Television to put forward his views on various topics on Indian Startups and Indian Startup Eco System. 

Under his leadership, Venture Wolf has been recognized as 'The 30 Most Trusted Brands To Watch In 2023' by Prime Insights Business Magazine. 

He plays an active role in startup eco system by working closely and guiding the new age entrepreneurs with creating MVPs, go to market strategy and their funding requirements. 

Devang has first-hand experiences of being an entrepreneur himself and is well versed with challenges of an entrepreneur journey. A lot of e-magazines have written about Devang and his journey that proves to be a source of motivation to a lot of youngsters. 

Devang believes that you can do well in any business by doing your business well. He talks about ideating and driving a business idea to successful implementation by guiding, mentoring and hand holding the new generation of entrepreneurs.</p>
            </div>
        </div>
    </div>
        </>
      )
}

export default FounderC