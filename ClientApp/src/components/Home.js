import React, { Component } from 'react';
import video from '../img/video.mp4';
import { Button, Col, Container, Row } from 'reactstrap';
import { OrderButton } from './OrderProjectBtn';
import  OfferItem from './OfferItem';
import develop from '../img/develop.svg';
import HowWeWork from './HowWeWork';
import SiteContainerBlock from '../SiteContainerBlock';


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className='textContainer'>

        <div className='videoContainer'>
          <video className='video' autoplay muted loop>
              <source src={video} type='video/mp4'/>
          </video>
        </div>

      <div className='captionContainer'>        
          <h1>Разработка программного обеспечения и <br/>информационных систем</h1>        
        <div className='cap2'>
        Комплексный сервис для корпоративных клиентов
        </div>
        <div className='cap3'>
          <OrderButton/> 
        </div>
      </div>

      <div className='whatwedo'>
        <h1 className='h1black'>Что мы делаем</h1>
        <div className='offerlist'>
    <OfferItem name="Разработка ПО" img={develop} title="Разработка программного обеспечения"/>
    <OfferItem name="ИТ поддержка" img={develop} title="Техническая поддержка существующих решений"/>
    <OfferItem name="ИТ рекрутинг" img={develop} title="Подбор ИТ специалиста"/>
    <OfferItem name="ИТ консалтинг" img={develop} title="Разработка ИТ-стратегии предприятия, внедрение ITSM и систем управления проектами"/>
    <OfferItem name="Решения" img={develop} title="Готовые продукты для бизнеса"/>
    <OfferItem name="Обучение" img={develop} title="Курсы по программированию"/>
  </div>
      </div>
      <SiteContainerBlock isgrey>
        <HowWeWork />
      </SiteContainerBlock>
</div>



    

    );
  }
}


/*


<div className='video-container'>



      <video className='video' autoplay muted loop>
          <source src={video} type='video/mp4'/>
      </video>

    
    <div className = 'caption'>              
        <h1><br/>Разработка программного обеспечения и <br/>информационных систем</h1>
      
      <div className='cap2'>
        Комплексный сервис для корпоративных клиентов
      </div>
      <div className='cap3'>
          <OrderButton/> 
      </div>
      <div className='cap3'>          
      </div>
    </div>

</div>


<div className='whatwedo'>
  <h1>Что мы делаем</h1>
  <div className='offerlist'>
    <OfferItem name="Разработка ПО" img={develop} title="Разработка программного обеспечения"/>
    <OfferItem name="ИТ поддержка" img={develop} title="Техническая поддержка существующих решений"/>
    <OfferItem name="ИТ рекрутинг" img={develop} title="Подбор ИТ специалиста"/>
    <OfferItem name="ИТ консалтинг" img={develop} title="Разработка ИТ-стратегии предприятия, внедрение ITSM и систем управления проектами"/>
    <OfferItem name="Решения" img={develop} title="Готовые продукты для бизнеса"/>
    <OfferItem name="Обучение" img={develop} title="Курсы по программированию"/>
  </div>
</div>
*/
