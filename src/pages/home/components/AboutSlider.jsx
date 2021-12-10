import React from 'react'
import { Carousel } from 'react-bootstrap'
import AngelBear from '../../../assets/images/1 10.jpg'
import ArmyBear from '../../../assets/images/1 12.jpg'
import SwagBear from '../../../assets/images/1 11.jpg'
import CapBear from '../../../assets/images/1 9.jpg'

export default function AboutSlider() {
  return (
    <>

      <Carousel className="d-sm-none">
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={AngelBear}
            alt="First slide"
            style={{borderRadius : "10px"}}
          />

        </Carousel.Item>
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={ArmyBear}
            alt="Second slide"
            style={{borderRadius : "10px"}}
          />

        </Carousel.Item>
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={SwagBear}
            alt="Third slide"
            style={{borderRadius : "10px"}}
          />
        </Carousel.Item>
        <Carousel.Item  style={{padding: "5px"}}>
          <img
            className="d-block w-100"
            src={CapBear}
            alt="Third slide"
            style={{borderRadius : "10px"}}
          />
        </Carousel.Item>
      </Carousel>
    </>


  )
}
