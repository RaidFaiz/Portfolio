// // import line from "/line.svg"

// export default function About() {
//     return (
//       <>
//         <div className="main-about">
//           <h2>about</h2>
//           <div className="about-desc">
//             <p>
//               CREATIVE FRONT-END DEVELOPER SHAPING MODERN WEB INTERFACES ✦ 
//               WITH A FOCUS ON SIMPLICITY, SPEED, AND USER EXPERIENCE.
//             </p>
//               <div className="line-container">
//                 <svg width="1053" height="199" viewBox="0 0 1053 199" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M791.029 5H999.289C1026.19 5 1048 26.8088 1048 53.7113V53.7113C1048 80.6139 1026.19 102.423 999.289 102.423H50.7886C25.5003 102.423 5 122.923 5 148.211V148.211C5 173.5 25.5003 194 50.7887 194H155.152H305.303" stroke="#afafaf" stroke-width="2"/>
//                 </svg>
//               </div>
//             <p>
//               I BUILD INTERFACES THAT MERGE FUNCTION WITH AESTHETICS
//               CRAFTING CLEAN, RESPONSIVE DESIGNS THAT FEEL NATURAL TO USE.          
//             </p>
//           </div>
//         </div>
//       </>
//     )
//   }
  
import SVGLineDrawing from '../animation/SVGLineDrawing';
import SVGLineDrawingStraight from '../animation/SVGLineDrawingStraight';

export default function About() {
  const svgPath = "M295 5H981.804C994.615 5 1005 15.3852 1005 28.1959V28.1959C1005 41.0066 994.615 51.3918 981.804 51.3918H26.8042C14.7621 51.3918 5 61.1538 5 73.1959V73.1959C5 85.238 14.762 95 26.8041 95H96.5";
  const svgPathStraight = "M0 1H85"

  return (
    <div className="main-about">
      <div className="about-desc">
        <p id='first-paragraph'>
          CREATIVE FRONT-END DEVELOPER SHAPING MODERN WEB INTERFACES <span className='about-desc-span'>✦</span> 
          WITH A FOCUS ON <SVGLineDrawingStraight svgPathStraight={svgPathStraight} /> <span className='about-desc-span' id="simplicity-text" >SIMPLICITY</span>, SPEED, AND USER
          <br />
          EXPERIENCE.
          <span className='line-main-container'>
            <SVGLineDrawing svgPath={svgPath} />
          </span>
        </p>
        <p id='second-paragraph'>
          I BUILD INTERFACES THAT MERGE FUNCTION WITH <span className='about-desc-span'>AESTHETICS</span>
          CRAFTING CLEAN, RESPONSIVE DESIGNS THAT FEEL <span className='about-desc-span'>NATURAL</span> TO USE.          
        </p>
      </div>
    </div>
  );
}
