import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Footer } from './Footer';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className='layout'>
          <div className='header'>
            <NavMenu />
          </div>
          <div className='main'>
            {this.props.children}
          </div>
          <Footer />
      </div>
    );
  }
}

