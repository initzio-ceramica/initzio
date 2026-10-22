
import { buildWhatsappMessageLink } from '../config/utils'; 
const WhatsAppButton = () => {
  // Definimos el mensaje general para el botón flotante
  const globalMessage = "Hola, vi su página web y me gustaría hacer una consulta.";
  
  // Generamos el link usando la utilidad
  const whatsappUrl = buildWhatsappMessageLink(globalMessage).replace('%2B', '');

  return (
    <a 
      href={whatsappUrl} 
      className="btn-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat de WhatsApp"
    >
      <img 
        src="/whatsapp-icon.png" 
        alt="WhatsApp" 
      />
    </a>
  );
};

export default WhatsAppButton;
