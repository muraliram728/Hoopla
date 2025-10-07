import React from "react";
import WhatsappIcon from "../../../../assets/whatsapp.jpg";
import "./WhatsApp.css";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "9385353350";
    const message = "Hello! I’m interested in learning more about Hooplaa Holidays.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <img
      src={WhatsappIcon}
      alt="WhatsApp"
      className="whatsapp-fixed"
      onClick={handleWhatsAppClick}
    />
  );
}
