import { useState } from 'react';
import Header from './Components/Header/Header';
import AsideNav from './Components/AsideNav/AsideNav';
import Footer from './Components/Footer/Footer';
import StorePage from './Components/StorePage/StorePage';

const App: React.FC = () => {
  const [ showAside, setShowAside ] = useState<boolean>(false);
  
  const openAside = () => setShowAside(true);
  const closeAside = () => setShowAside(false);
  
  return (
    <>
      <Header openAside={openAside} />
      <AsideNav closeAside={closeAside} showAside={showAside} /> 
      <StorePage />
      <Footer />
      <div id="reactOverlayPortal"></div>
      <div id="reactModalPortal"></div>
    </>
  );
}

export default App;