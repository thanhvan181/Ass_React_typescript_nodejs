import React from "react";
// import { Container, Nav, Navbar } from 'react-bootstrap';
import { Menu } from "antd";
import { getAuth, signOut } from "firebase/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { logout } from "../../features/Website/Auth/AuthSlide";

import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
// import {useEffect, useState} from "react";
import { searchSanpham } from "../../features/Website/ProductClient/ProductClientSlide";
import { useForm, SubmitHandler } from "react-hook-form";
import { MenuItem } from "@material-ui/core";
// import { isAuthenticate } from '../../untils/localStoge';

type TypeInputs = {
  q: string;
};

const WebsiteLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: any) => state.user.isAuthenticated
  );
  const auth = getAuth();
  // const user = auth.currentUser;
  // console.log("CurrentUSER WL: ", user)
  const user = useSelector((state: any) => state.user.userInfo);

  const { register, handleSubmit } = useForm<TypeInputs>();

  const onSubmit: SubmitHandler<TypeInputs> = (data: any) => {
    console.log("datasearch", data);

    dispatch(searchSanpham(data));
  };

  const hanldeLogout = async () => {
    try {
      await signOut(auth)
      dispatch(logout({ email: null }));
      navigate("/signin");

    } catch {
      toast.info("Logout error!");
    }
  }

  return (
    <div>
      <header>
        <div className="nav-one">
          <Navbar bg="white" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
              <img
                src="http://rayoflightthemes.com/wordpress-themes/vaxi-wordpress-theme/wp-content/uploads/2021/09/Logo1.png"
                // width="100px"
                // height="100px"
              />{" "}
              {/* <span className="text-h1">VNVC</span> */}
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav className="nav-top">
                <Nav.Link href="/hethongtrungtamtiemchung">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#007c7c"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  TÌM TRUNG TÂM
                </Nav.Link>

                <Nav.Link href="/dangkytiemchung">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#007c7c"
                    className="bi bi-calendar2-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm2 .5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3Zm5 4.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                    />
                  </svg>
                  ĐĂNG KÝ TIÊM
                </Nav.Link>
                <Nav.Link href="/product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#007c7c"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  ĐẶT MUA VẮC XIN
                </Nav.Link>
                <Nav.Link href="#blog">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#007c7c"
                    className="bi bi-question-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                  </svg>
                  TƯ VẤN
                </Nav.Link>
                <Nav.Link href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#007c7c"
                    className="bi bi-bag-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  GIỎ HÀNG
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <hr />

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

                {!user ? (
                  <>
                    <Nav.Link href="/signup">
                      ĐĂNG KÝ
                    </Nav.Link>
                    <Nav.Link href="/signin">
                      ĐĂNG NHẬP
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    {/* <Navbar.Collapse>
                   <Nav> */}
                    <NavDropdown
                      title={user.email}
                      id="basic-nav-dropdown"
                      style={{ fontSize: "18px" }}
                      className="dropdown"
                    >
                      <div className="one">
                        <NavDropdown.Item href="">
                          {user.email}
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/publishers/podcasters">
                          Audio Podcasters
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                          to="/signin"
                          onClick={hanldeLogout}
                        >
                          Logout
                        </NavDropdown.Item>
                      </div>
                    </NavDropdown>
                    <img className="img-icon" src={user.picture}/>
                  </>
                )}
               
                
              </Nav>
              <Nav>
                <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    {...register("q")}
                  />
                  <Button type="submit" variant="outline-success">
                    Search
                  </Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <MDBFooter className="text-center" color="white" bgColor="dark">
          <MDBContainer className="p-4">
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                 

               
                 
                </div>
              </form>
            </section>

            <section className="">
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Hệ thống phòng tiêm chủng</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Danh mục Vắc xin đa dạng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Trang thiết bị hiện đại
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Chuyên gia y tế giàu kinh nghiệm
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Chủ động nhắc lịch tiêm
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Khách hàng</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Trẻ em
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Người lớn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Phụ nữ chuẩn bị mang thai
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Đăng ký thông tin tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Tra cứu lịch sủ tiêm chủng
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Cẩm nang tiêm chủng</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Lịch tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Những điều cần biết trước khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Những điều cần biết sau khi tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Quy trình tiêm chủng
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Tiêm chủng trươc khi ra nước ngoài
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Liên hệ </h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="#!" className="text-white">
                        Email: congtyvnvc@gmail.com
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#!" className="text-white">
                        Phone: 09929883992
                      </NavLink>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 :
            <a className="text-white" href="https://mdbootstrap.com/">
              VNVC
            </a>
          </div>
        </MDBFooter>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
