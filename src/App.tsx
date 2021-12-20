import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import AsideNav from './Components/AsideNav/AsideNav';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  const [ showAside, setShowAside ] = useState<boolean>(false);
  
  const openAside = () => setShowAside(true);
  const closeAside = () => setShowAside(false);

  useEffect(() => {
    if (showAside) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "hidden scroll";
  }, [ showAside ]);

  return (
    <>
      <Header openAside={openAside} />
      <AsideNav closeAside={closeAside} showAside={showAside} /> 
      <MainContent />
      <Footer />
      <div id="reactOverlayPortal"></div>
    </>
  );
}

export default App;