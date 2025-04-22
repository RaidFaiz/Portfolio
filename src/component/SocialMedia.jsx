import Icons from './Icons';
import Magnetic from "../animation/Magnetic"

export default function SocialMedia() {
    return (
      <>
        <div className="social-media">
          <ul>
            <li>
            <Magnetic radius={100} strength={0.3}>
              <a href=""><Icons.LinkedinLogo/></a>
            </Magnetic>
            </li>
            <li>
              <Magnetic radius={100} strength={0.3}>
                <a href=""><Icons.InstagramLogo/></a>
              </Magnetic>
            </li>
            <li>
              <Magnetic radius={100} strength={0.3}>
                <a href=""><Icons.DribbbleLogo/></a>
              </Magnetic>
            </li>
            <li>
              <Magnetic radius={100} strength={0.3}>
                <a href=""><Icons.FacebookLogo/></a>
              </Magnetic>
            </li>
          </ul>
        </div>        
      </>
    )
  }