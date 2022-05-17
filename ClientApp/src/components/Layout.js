import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Footer } from './Footer';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div id='root'>
        <NavMenu />
        <main>
          {this.props.children}
        </main>         
        <Footer/>
      </div>
    );
  }
}
