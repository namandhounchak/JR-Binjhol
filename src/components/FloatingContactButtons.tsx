import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactButtons = () => {
  const phoneNumber = "919122760000"; 
  // 🔴 Replace with your number (country code + number, no +, no spaces)

  const whatsappMessage =
    "Hello, I would like to enquire about your egg export services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const phoneUrl = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* Phone Button */}
      <a
        href={phoneUrl}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

    </div>
  );
};

export default FloatingContactButtons;
