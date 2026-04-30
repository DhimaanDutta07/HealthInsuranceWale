import { WA_SVG } from '../../assets/SVG';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919971466960"
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
    >
      <span className="w-4 h-4 flex">{WA_SVG}</span>
      WhatsApp
    </a>
  );
}