import ReactDOM from 'react-dom';
import { useEffect } from 'react';
interface ScreenOverlayProps {
  stateAction: () => void;
};

const ScreenOverlay: React.FC<ScreenOverlayProps> = ({ stateAction}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { 
      document.body.style.overflow = "hidden scroll";
    }
  });

  return ReactDOM.createPortal(
    <div onClick={stateAction} className="fixed inset-0 bg-neutral-900/50 z-10"></div>,
    document.getElementById('reactOverlayPortal') as Element
  );
};

export default ScreenOverlay;