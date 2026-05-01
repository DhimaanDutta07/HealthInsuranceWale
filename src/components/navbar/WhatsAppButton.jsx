import { useLocation } from 'react-router-dom';
import { WA_SVG } from '../../assets/SVG';

export default function WhatsAppButton() {
  const location = useLocation();

  const getMessage = () => {
    const path = location.pathname;

    if (path === '/') {
      return "Hi, I'm looking to buy a new health insurance policy. Can you guide me on the right plan?";
    } 
    else if (path.includes('/claims')) {
      return "Hi, I need help regarding a health insurance claim. Please guide me on next steps.";
    } 
    else if (path.includes('/faqs')) {
      return "Hi, I have some questions about health insurance. Can you help?";
    } 
    else if (path.includes('/our-story')) {
      return "Hi, I want to know more about HealthInsuranceWale. Can you tell me more?";
    } 
    else {
      return "Hi, I need help with health insurance. Can you guide me?";
    }
  };

  const handleClick = () => {
    const message = getMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919217182171?text=${encodedMessage}`, '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
    >
      <span className="w-4 h-4 flex">{WA_SVG}</span>
      WhatsApp
    </button>
  );
}