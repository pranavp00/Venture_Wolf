import React from 'react'
// import styles from "../../src/assets/styles/cardsectionOV.module.css";
import "../../src/assets/styles/cardsectionOV.css";
import NormalText from "../../src/components/NormalText"
import image1 from "../../src/assets/images/Entrepreneurfocus.png"
import image2 from "../../src/assets/images/teamwork.png"
import image3 from "../../src/assets/images/Integrity.png"
import image4 from "../../src/assets/images/Respect.png"
import image5 from "../../src/assets/images/Excellence.png"
import image6 from "../../src/assets/images/Clarity.png"


const CardSectionOV = () => {
  return (
    <div class="containerOV">
      <h1 class="titleOVM">OUR VALUES</h1>
      <NormalText text={"Our purpose is why our company exists. At Venture Wolf, we create clarity and confidence today for a better tomorrow. Our values are more than words. A strong entrepreneur focus, an emphasis on teamwork, unwavering integrity, Honesty, Clear fair and Not Misleading dialogue, Mutual respect and a constant striving for ‘Creating Entrepreneurs’ is at the core of business."}/>

  
  <div class="cardOV">
    <div class="content">
      <h4 class='title'>Enterpreneur Focus</h4>
      <img src={image1}  width={"200px"}/>
      <p class="hidden-text">When you get us, you get all of our network. We connect you to like-minded entrepreneurs and strategic players to help you grow and scale faster. We help entrepreneurs succeed and create more value by working together.</p>
    </div>
  </div>
  <div class="cardOV">
    <div class="content">
      <h4 class='title'>Teamwork</h4>
      <img src={image2}  width={"200px"}/>
      <p class="hidden-text">When you get us, you get all of our network. We connect you to like-minded entrepreneurs and strategic players to help you grow and scale faster. We help entrepreneurs succeed and create more value by working together.</p>
    </div>
  </div>
  <div class="cardOV">
    <div class="content">
      <h4 class='title'>Integrity</h4>
      <img src={image3}  width={"200px"}/>
      <p class="hidden-text">Entrepreneurs and investors invest more than their time and money with us; they also invest their trust. We seek to earn that trust every day through professionalism, doing what is right and telling the truth. We are accountable to both, entrepreneurs’ and investors and each other for our actions and results.</p>
    </div>
  </div>
  <div class="cardOV">
    <div class="content">
      <h4 class='title'>Respect</h4>
      <img src={image4}  width={"200px"}/>
      <p class="hidden-text">We listen to and learn from each other. We support and celebrate differences, foster an inclusive culture and operate with openness, honesty and benefit of the doubt. We manage our relationships, within the company and outside, with fairness, decency, and good citizenship.</p>
    </div>
  </div>
  <div class="cardOV">
    <div class="content">
      <h4 class='title'>Excellence</h4>
      <img src={image5}  width={"200px"}/>
      <p class="hidden-text">We strive to lead and sustain excellence. Most importantly, this means an unwavering commitment to professional development and personal growth for entrepreneurs and investment growth for our investors.</p>
    </div>
  </div>
  <div class="cardOV">
    <div class="content">
      <h4 class='title'>Clear, Fair and Not Misleading Communication</h4>
      <img src={image6}  width={"200px"}/>
      <p class="hidden-text">We ensure that our communication is always open, clear, fair and not misleading while guiding new age entrepreneurs and mentoring them. There are no grey areas with us.</p>
    </div>
  </div>
</div>
  )
}

export default CardSectionOV;