import React, { Component } from 'react'
import Slider from '../src/slider'
import {baseUrl} from './config'

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i, currentSlide) {
        return <button>{ currentSlide === i ? 'This slide is currently selected' : 'This slide is not currently selected' } - you are on slide { i }</button>
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div><img src={baseUrl + '/abstract01.jpg'} /></div>
          <div><img src={baseUrl + '/abstract02.jpg'} /></div>
          <div><img src={baseUrl + '/abstract03.jpg'} /></div>
          <div><img src={baseUrl + '/abstract04.jpg'} /></div>
        </Slider>
      </div>
    )
  }
}
