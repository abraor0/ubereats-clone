import React from 'react';
import ReactDOM from 'react-dom';

const ScreenOverlay: React.FC<React.HTMLProps<HTMLDivElement>> = ({ onClick }) =>
  ReactDOM.createPortal(
    <div onClick={onClick} className="absolute inset-0 bg-neutral-900/50 z-10"></div>,
    document.getElementById('reactOverlayPortal') as Element
  );

export default ScreenOverlay;