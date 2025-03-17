import { useState } from 'react'
import Preloader from './component/PreLoader'
import Navbar from './component/Navbar';
import SocialMedia from './component/SocialMedia'
import Header from './component/Header';
import About from './component/About'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Preloader onStart={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Navbar />
          <SocialMedia />
          <Header />
          <About />
        </>
      )}
    </>
  );
}

export default App