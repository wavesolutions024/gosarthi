import React from "react";
import "./Contatc_Popup.scss";
import { RxCross2 } from "react-icons/rx";
const ContactPopup = ({setPopUp}) => {
  return (
    <>
      <div class="contact_popup parent bg-img-cover">

        <div class="contact_cont cont">
          <form action="">
            <div class="top">
              <h2>Contact Us</h2>
              <div class="cross" onClick={()=>setPopUp(false)} >
                <RxCross2 />
              </div>
            </div>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Your Phone" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <div class="btn">Submit</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
