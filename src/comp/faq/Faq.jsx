import React, { useState } from 'react'
import "./Faq.scss";
import { IoIosArrowDown } from "react-icons/io";
const Faq = () => {
    const [faq, setFaq] = useState(null);
    const handleToggle = (index) => {
        setFaq(faq === index ? null : index);
      };
    const faqContent = [
        {
          title: "What types of vehicles are available for rental?",
          content:
            "We offer a wide range of vehicles, including cars (e.g., Toyota Glanza, Kia Sonnet, Innova Crysta), travelers (e.g., Luxury Urbania, 17-seater AC pushback buses), and coaches (e.g., 45-seater AC Volvo, 35-seater AC BharatBenz) to suit your travel needs.",
        },
        {
          title: "Do you provide chauffeurs with your vehicles?",
          content:
            "Yes, all our vehicles come with professional and experienced chauffeurs to ensure a safe and comfortable journey for our clients.",
        },
        {
          title: "Can your services cater to corporate events?",
          content:
            "Absolutely! We serve over 150 corporate clients and provide vehicles for business trips, events, and employee transportation needs.",
        },
        {
          title: "Are your vehicles available for family trips and tourism?",
          content:
            "Yes, we cater to family trips, weddings, and tourism, ensuring a memorable and hassle-free travel experience with our range of comfortable and well-maintained vehicles.",
        },
        {
          title: "How do I book a vehicle with Gandhi Travels?",
          content:
            "You can book by contacting us directly at our office in Viman Nagar, Pune, or through our online portal. We recommend booking in advance, especially during peak seasons, to secure your preferred vehicle.",
        },
      ];
  return (
    <>
         <div className="faq-parent parent">
        <div
          className="faq-cont cont"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <div className="left "></div>

          <div className="right">
            <h5>Faq</h5>
            <p>Frequently Asked Questions</p>

            <div className="faq-list">
              {faqContent.map((item, index) => (
                <div className="faq" key={index}>
                  <div
                    className={faq === index ? "heading active" : "heading"}
                    onClick={() => handleToggle(index)}
                  >
                    <p>{item.title}</p>
                    <div className={faq === index ? "icon active" : "icon"}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className={faq === index ? "content active" : "content"}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
