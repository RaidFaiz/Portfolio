import SVGLineDrawing from '../animation/SVGLineDrawing';
import SVGLineDrawingStraight from '../animation/SVGLineDrawingStraight';
import profile from '/profile.jpg'

export default function About() {
  const svgPath = "M295 5H981.804C994.615 5 1005 15.3852 1005 28.1959V28.1959C1005 41.0066 994.615 51.3918 981.804 51.3918H26.8042C14.7621 51.3918 5 61.1538 5 73.1959V73.1959C5 85.238 14.762 95 26.8041 95H96.5";
  const svgPathStraight = "M0 1H85"

  return (
    <div className="main-about">
      
      <h2 id='about-subtitle'>   
        ABOUT ME
        {" "}
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#5e17eb"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-sparkles"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>
      </h2>
      <div className='about-container'>
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
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
      
      
    </div>
  );
}
