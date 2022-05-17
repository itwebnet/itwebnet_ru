import React, { Component } from 'react';
import video from '../img/video.mp4';
import { Button } from 'reactstrap';
import { OrderButton } from './OrderProjectBtn';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <div className='bannertext'>
          <h1>Разработка программного обеспечения и<br/>
          информационных систем</h1>
          <div className='bantxt2'>
            Комплексный сервис для корпоративных клиентов
          </div>
          <div>
            <br/><br/>
            <OrderButton/> 
          </div>
        </div>

        <video autoPlay loop className='video'>
          <source src={video} type='video/mp4'/>
        </video>

      </div>
    );
  }
}
