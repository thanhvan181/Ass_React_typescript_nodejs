import MenuItem from 'antd/lib/menu/MenuItem'
import React from 'react'
import { Dropdown, Nav, Navbar, NavDropdown, } from 'react-bootstrap'



const TopNav = () => {
    return (
        <div className="nav-two">
            <Navbar
                bg="dark"
                variant="dark"
                sticky="top"
                expand="sm"
                collapseOnSelect
            >
                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">TRANG TRỦ</Nav.Link>
                        <Nav.Link href="/hethongtrungtamtiemchung">
                            TÌM TRUNG TÂM
                        </Nav.Link>
                        <Nav.Link href="/dangkytiemchung">ĐĂNG KÝ TIÊM</Nav.Link>
                        <Nav.Link href="/product">ĐẶT MUA VẮC XIN</Nav.Link>
                        <Nav.Link href="/product">TIÊM CHỦNG CHO TRẺ EM</Nav.Link>
                        <Nav.Link href="/product">TIÊM CHỦNG CHO NGƯỜI LỚN</Nav.Link>
                        <Nav.Link href="/product">TRA CỨU </Nav.Link>
                        
                       



                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopNav