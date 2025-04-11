// import { useState } from 'react'
// import Preloader from './component/PreLoader'
// import Navbar from './component/Navbar';
// import SocialMedia from './component/SocialMedia'
// import Header from './component/Header';
// import About from './component/About'

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <>
//       {!isLoaded && <Preloader onStart={() => setIsLoaded(true)} />}
//       {isLoaded && (
//         <>
//           <div className="main">
//             <Navbar />
//             <SocialMedia />
//             <Header />
//             <About />
//           </div>   
//           <div className="masked">
            
//           </div>
//         </> 
//       )}
//     </>
//   );
// }

// export default App

import { useState } from "react";
import Preloader from "./component/PreLoader";
import Navbar from "./component/Navbar";
import SocialMedia from "./component/SocialMedia";
import Header from "./component/Header";
import About from "./component/About";
import MaskedLayer from "./component/MaskedLayer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Preloader onStart={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className="page-container">
          <MaskedLayer />
          <div className="main">
            <Navbar />
            <SocialMedia />
            <Header />
            <About />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
