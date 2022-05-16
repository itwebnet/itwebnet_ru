import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Bottom } from './bottom';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className='layout'>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
        <Bottom/>
      </div>
    );
  }
}
