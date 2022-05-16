import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
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
          <NavbarBrand href="/"><img width={85} alt='ITWebNet' src={logo} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">О Компании</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Услуги</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Контакты</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>          
        </Navbar>        
      </div>
    );
  }
}
