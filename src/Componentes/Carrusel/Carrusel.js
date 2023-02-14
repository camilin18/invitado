import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../imagenes/img1.jpg';
import img2 from '../../imagenes/img2.jpg';
import img3 from '../../imagenes/img3.jpg';
import img4 from '../../imagenes/img4.jpg';
import img5 from '../../imagenes/img5.jpg';
import img6 from '../../imagenes/img6.jpg';
import img7 from '../../imagenes/img7.jpg';
import img8 from '../../imagenes/img8.jpg';
import img9 from '../../imagenes/img9.jpg';
import img10 from '../../imagenes/img10.jpg';


const Carrusel = ()=>{

    return(
      
      <div style={{ display: 'block', width: 1500,height:800, padding: 40, position: "static", left: 25}}>
     
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img1} 
            alt="Image One"
            width={500}
            height={700}
            di   
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img2}
            width={300}
            height={700}
            di  
            alt="Image Two"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img3}
            width={300}
            height={700}
            di  
            alt="Image Three"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img4}
            width={300}
            height={700}
            di  
            alt="Image Four"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img5}
            width={300}
            height={700}
            di  
            alt="Image Five"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img6}
            width={300}
            height={700}
            di  
            alt="Image Six"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img7}
            width={300}
            height={700}
            di  
            alt="Image Seven"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img8}
            width={300}
            height={700}
            di  
            alt="Image Eight"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img9}
            width={300}
            height={700}
            di  
            alt="Image Nine"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={img10}
            width={300}
            height={700}
            di  
            alt="Image Ten"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>




      </Carousel>
    </div>
    )
}

export default Carrusel

