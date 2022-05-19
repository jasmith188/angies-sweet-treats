import React from 'react';
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import cookies from '../images/cookies.png';
import pinkPigs from '../images/pink-pigs.png';
import pretzelRods from '../images/pretzel-rods.png';
import strawberries from '../images/strawberries.png';

function Home() {
  return (
    <div className="home">
      <h1>Title</h1>
      <div className="home-content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
          architecto esse provident dicta dolorem earum adipisci, obcaecati
          autem beatae labore neque! Aspernatur qui possimus corporis laboriosam
          non expedita beatae aliquid!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          incidunt ab voluptatibus, dolores ratione nisi, quia harum ducimus
          doloremque sequi quisquam repellat iusto necessitatibus, perferendis
          consectetur aut aperiam adipisci consequuntur?
        </p>
      </div>

      <div class="carousel-wrapper">
        <Carousel
          infiniteLoop
          // autoPlay
          swipeable
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img className="carousel-image" src={cookies} alt="" />
          </div>
          <div>
            <img className="carousel-image" src={pinkPigs} alt="" />
          </div>
          <div>
            <img className="carousel-image" src={pretzelRods} alt="" />
          </div>
          <div>
            <img className="carousel-image" src={strawberries} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
