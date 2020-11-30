import React, { Component } from 'react';
import Story from './Story/Story';

import './StoryReel.css';
class StoryReel extends Component {
  render() {
    return (
      <div className="storyReel">
      {/* const img = 'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg'; */}

        <Story
          image='https://cdn.britannica.com/s:300x300/34/212134-050-A7289400/Lionel-Messi-2018.jpg'
          profileSrc="https://cdn.britannica.com/s:300x300/34/212134-050-A7289400/Lionel-Messi-2018.jpg"
          title="Lionel Messi"
        />
          
        <Story
          image='https://as01.epimg.net/en/imagenes/2019/09/24/football/1569310945_447431_noticia_normal.jpg'
          profileSrc="https://as01.epimg.net/en/imagenes/2019/09/24/football/1569310945_447431_noticia_normal.jpg"
          title="Cristiano Ronaldo"
        />
        
        <Story
          image='https://s.france24.com/media/display/fc38b2bc-b26c-11ea-b7b5-005056a964fe/w:980/p:16x9/2020-06-19T122447Z_1857599552_RC2CCH9IL1BR_RTRMADP_3_SOCCER-SPAIN-FCB-NEYMAR.webp'   
          profileSrc="https://s.france24.com/media/display/fc38b2bc-b26c-11ea-b7b5-005056a964fe/w:980/p:16x9/2020-06-19T122447Z_1857599552_RC2CCH9IL1BR_RTRMADP_3_SOCCER-SPAIN-FCB-NEYMAR.webp"
          title="Neymar Jr."
        />
        <Story
          image='https://i.dailymail.co.uk/1s/2020/05/03/23/27959518-0-image-a-25_1588543583371.jpg'
          profileSrc="https://i.dailymail.co.uk/1s/2020/05/03/23/27959518-0-image-a-25_1588543583371.jpg"
          title="Kylian Mbappe"
        />
        <Story
          image='https://worldfootballindex.com/wp-content/uploads/2020/02/Haaland-Dortmund-Leverkusen.jpg'
          
          profileSrc="https://worldfootballindex.com/wp-content/uploads/2020/02/Haaland-Dortmund-Leverkusen.jpg"
          title="Erling Haaland"
        />
         <div className="right__Arrow">
        
        </div>
      
      </div>
     
    );
  }
}

export default StoryReel;
