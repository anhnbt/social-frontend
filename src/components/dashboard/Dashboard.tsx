import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CBadge, CButton, CCollapse, CContainer, CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle, CFooter, CForm, CFormInput, CHeader, CHeaderBrand, CHeaderNav, CHeaderToggler, CLink, CNavGroup, CNavItem, CNavLink, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPuzzle, cilSpeedometer } from '@coreui/icons';


export const Dashboard = () => {
    const [visible, setVisible] = useState(false);
    return (
        <Fragment>
          <CHeader>
          <CContainer fluid>
            <CHeaderBrand>Header</CHeaderBrand>
            <CHeaderToggler onClick={() => setVisible(!visible)} />
            <CCollapse className="header-collapse" visible={visible}>
              <CHeaderNav>
                <CNavItem>
                  <CNavLink href="#" active>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CNavItem>
                  <CNavLink href="#" disabled>
                    Disabled
                  </CNavLink>
                </CNavItem>
              </CHeaderNav>
              <CForm className="d-flex">
                <CFormInput className="me-2" type="search" placeholder="Search" />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm>
            </CCollapse>
          </CContainer>
        </CHeader><CSidebar>
            <CSidebarBrand>Sidebar Brand</CSidebarBrand>
            <CSidebarNav>
              <CNavTitle>Nav Title</CNavTitle>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                Nav item
              </CNavItem>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
                With badge
                <CBadge color="primary ms-auto">NEW</CBadge>
              </CNavItem>
              <CNavGroup toggler="Nav dropdown">
                <CNavItem href="#">
                  <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
                </CNavItem>
                <CNavItem href="#">
                  <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
                </CNavItem>
              </CNavGroup>
            </CSidebarNav>
            <CSidebarToggler />
          </CSidebar><CFooter>
            <div>
              <CLink href="https://coreui.io">CoreUI</CLink>
              <span>&copy; 2021 creativeLabs.</span>
            </div>
            <div>
              <span>Powered by</span>
              <CLink href="https://coreui.io">CoreUI</CLink>
            </div>
          </CFooter>
        </Fragment>
        );
};
