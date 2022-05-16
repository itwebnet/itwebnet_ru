import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className='App Site'>
        <div className='Site-content'>
          <div className='App-header'>
            <NavMenu />
          </div>  
          <div className='main'>
            <Container>
              {this.props.children}
            </Container>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
