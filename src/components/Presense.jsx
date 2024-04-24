import React from 'react'
import "../../src/assets/styles/Presense.css";
import map from "../../src/assets/images/map.gif";
import HeadingOne from './HeadingOne';
const Presense = () => {
  return (
    <>
    <br></br>
      <HeadingOne text={"Our Presense"}></HeadingOne>
    <div class="container">
    <div class="image-half">
      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam harum, ullam, culpa nulla ipsa deleniti optio ex repellendus expedita error quas nobis illum quaerat assumenda voluptates! Aut ratione magni voluptates! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam tenetur veritatis nobis repellat magni ex minima nesciunt perspiciatis dolor, quidem repudiandae cumque enim unde obcaecati natus beatae. Distinctio, modi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi odio, officiis possimus ad quos accusantium magni provident magnam assumenda dolor vel nostrum natus. Error recusandae esse aspernatur, consequatur inventore tempore. */}
    <img src={map} />
    </div>
    <div class="text-half">
        <div class="text">
            <p>We operate PAN India with our representatives operating from various cities across the country. We are looking for more Venture Partners across the country. If you are a CA, CS, or a professional having good business connects, feel free to get in touch with us to know more about how you can get associated with us.</p>
        </div>
    </div>
</div>
    </>
  )
}

export default Presense;