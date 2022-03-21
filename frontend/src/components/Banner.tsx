import React from 'react'
import { Carousel } from 'react-bootstrap'


type Props = {}

const Banner = (props: Props) => {
  return (
    <div>

<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.cowin.gov.in/abha2_1.2d583166ff1ff69133a8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.chungta.vn/2021/08/20/banner-covid-thumb-01-16294628-1814-2775-1629462815.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://vnvc.vn/wp-content/uploads/2021/09/vnvc-uu-dai-goi-vac-xin.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

  </Carousel>
    </div>
  )
}

export default Banner