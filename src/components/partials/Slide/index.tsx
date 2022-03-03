import { Carousel, CarouselItem } from 'react-bootstrap';
import './style.css';
import olxclone from './images/olxclone.png';

const Slide = () => {

    return (
      <>
        <Carousel indicators={false} interval={5000} variant="dark" className="projects-area">
            <CarouselItem>
                <div className='projects-item'>
                    <a target="_blank" href="https://github.com/leonmolina/projeto-olx">
                        <img src={olxclone} alt="" />
                        <div className="projects-item--description">
                            <h3>OLX Clone</h3>
                            <p>B7Web's OLX Clone, adapted by me to Typescript and Bootstrap.</p>
                        </div>
                    </a>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='projects-item'>
                    <a target="_blank" href="https://github.com/leonmolina/projeto-olx">
                        <img src={olxclone} alt="" />
                        <div className="projects-item--description">
                            <h3>OLX Clone 2</h3>
                            <p>B7Web's OLX Clone, adapted by me to Typescript and Bootstrap.</p>
                        </div>
                    </a>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className='projects-item'>
                    <a target="_blank" href="https://github.com/leonmolina/projeto-olx">
                        <img src={olxclone} alt="" />
                        <div className="projects-item--description">
                            <h3>OLX Clone 3</h3>
                            <p>B7Web's OLX Clone, adapted by me to Typescript and Bootstrap.</p>
                        </div>
                    </a>
                </div>
            </CarouselItem>
            </Carousel>
      </>
    );
  }
  
  export default Slide;