import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav
   } from 'reactstrap';
import './NavMenu.css';
import  logo  from '../img/logo.svg';

export class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render () {
    return (
      <div>
        <Navbar color='white' light expand="md" fixed='top' fill >
          <Container>
          <NavbarBrand href="/"><img height={80} alt='ITWebNet' src={logo} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/components/" style={{color:'#0A2235'}}>Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/" style={{color:'#0A2235'}}>О Компании</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services/" style={{color:'#0A2235'}}>Услуги</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contacts/" style={{color:'#0A2235'}}>Контакты</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>          
        </Navbar>        
      </div>
    );
  }
}
