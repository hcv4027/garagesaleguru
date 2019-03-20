import React,{Component} from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";


class NavElement extends Component{
    state={
        
    };
      render(){
      return(
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">GarageSale</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">GarageSale</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Filter
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Price
                  </DropdownItem>
                  <DropdownItem>
                    Category
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Quantity
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavElement;