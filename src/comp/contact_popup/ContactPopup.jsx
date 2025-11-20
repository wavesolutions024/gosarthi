import React from "react";
import "./Contatc_Popup.scss";
import { RxCross2 } from "react-icons/rx";
const ContactPopup = ({ setPopUp }) => {
  function Submit(e) {
    e.preventDefault();

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const date = new Date().toDateString();

    formDatab.append("Date", date);

    fetch(
      "https://script.google.com/macros/s/AKfycby4AiGuyEU81W8aWBHV5nauvvdh_dpO6t0g2qMqSuPPN3F9zHYkD96yS219_hdulyeM/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        formEle.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <>
      <div class="contact_popup parent bg-img-cover">
        <div class="contact_cont cont">
          <form action="" onSubmit={Submit}>
            <div class="top">
              <h2>Contact Us</h2>
              <div class="cross" onClick={() => setPopUp(false)}>
                <RxCross2 />
              </div>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              name="phone"
              id="phone"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button class="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
