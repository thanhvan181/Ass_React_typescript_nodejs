import React from "react";
import {
  Accordion,
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
  Tab,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { listCompany } from "../api/company";
import { getCategory } from "../api/category";
import {  getInjectionPacks } from "../api/injectionpark";
import { useForm, SubmitHandler } from "react-hook-form";
import { listproduct } from "../api/product";

import { create } from "../api/register";
import { getproducts } from "../api/product";



type Inputs = {
  name: {
    type: String;
  };
  birthday: {
    type: Date;
  };
  code: {
    type: String;
  };
  sex: {
    type: String;
  };

  address: {
    type: String;
  };
  contact_person_name: {
    type: String;
  };
  relativeship_phone: {
    type: String;
  };
  relativeship_name: {
    type: String;
  };
  dateo_injection: {
    type: Date;
  },
  injectionPark_id: {
    type: [];
  }

};

const SignupVaccinations = (props: Inputs) => {
  const [company, setCompany] = useState([]);
  const [injection, setInjection] = useState([]);
  const [isShowPack, setIsShowPack] = useState(true);
  const [productslist, setProductslist] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await getCategory();
      console.log("GET CATEGORY: ", data)
      setCategoryList(data);
    };
  
    getCategories();
  }, []);
  useEffect(() => {
    const loadCompany = async () => {
      const { data } = await listCompany();
      setCompany(data);
    };
    loadCompany();
  }, []);

  
  useEffect(() => {
    const loadallProduct = async () => {
      const { data } = await listproduct();
      setProductslist(data);
    };
    loadallProduct();
  }, []);
  


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // sử dụng hook useNavigate để chuyển sang
  //  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs> = async (dataInput: any) => {
    let checkboxs = document.querySelectorAll('input[name="injectionPark_id"][type="checkbox"]:checked') ;
    let selected = Array.from(checkboxs).map((x:any) => x.value)
   
    const { data } = await create({ ...dataInput, ...{ "injectionPark_id": selected } });
    console.log("data", data);
   
  };

  const handleButtonShowPack = () => {
    console.log("show pack")
    setIsShowPack(true);
  };
  const handleButtonShowProducts = () => {
    console.log("hidden pack")
    setIsShowPack(false);
  };

  const hanleClickshowProductPark = async (id: any) => {
    const { data } = await getInjectionPacks({ 'subcategory_id': id });
    setInjection(data);

    // console.log("PACK: ", data);

    // // console.log("idpark", id);

    // // const {}
  };

  const hanldeInputData = (e: any, id: any) => {
    console.log("Click Product: ", id)
    console.log("Click Product eenv: ", e)
    // setAddProduct(id);


    console.log("e", e.target)
    // e.target.parentElement.style.color = 'green'



  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h5 className="text-h5">THÔNG TIN NGƯỜI TIÊM</h5>

              <Row classNameName="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Họ tên người tiêm </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập họ tên"
                    {...register("name")}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Ngày sinh người tiêm</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    {...register("birthday")}
                  />
                </Form.Group>
              </Row>
              <Row classNameName="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Giới tính</Form.Label>

                  <input {...register("sex")} type="radio" value="male" />NAM
                  <input {...register("sex")} type="radio" value="female" />NỮ
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mã khách hàng(Nếu có)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mã khách hàng"
                    {...register("code")}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Địa Chỉ</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  {...register("address")}
                />
              </Form.Group>

              <h5 className="text-h5">THÔNG TIN NGƯỜI LIÊN HỆ </h5>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Họ và tên người liên hệ </Form.Label>
                <Form.Control {...register("contact_person_name")} />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Mối quan hệ với ngừoi tiêm</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập họ tên"
                    {...register("relativeship_name")}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" >
                  <Form.Label>Số điện thoại liên hệ </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=""
                    {...register("relativeship_phone")}
                  />
                </Form.Group>
              </Row>
              <Row>
                <h5 className="text-h5">THÔNG TIN DỊCH VỤ </h5>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Trung tâm muốn tiêm </Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    {company &&
                      company.map((compan: any) => {
                        return (
                          <>
                            <option>{compan.name}</option>
                          </>
                        );
                      })}
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Ngày muốn tiêm</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    {...register("dateo_injection")}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Loại vắc xin muốn đăng ký</Form.Label>

                  <Button variant="success" onClick={handleButtonShowPack}>
                    Vacxin Goi
                  </Button>
                  <Button variant="success" onClick={handleButtonShowProducts}>
                    Vacxin Le
                  </Button>
                  <Tab.Container
                    id="list-group-tabs-example"
                    defaultActiveKey="#link1"
                  >
                    <Row>
                      <Col>
                        {isShowPack ? (
                          <ListGroup>
                            {categoryList &&
                              categoryList.map((category: any) => {
                                return (
                                  <>
                                    {category.subcategories && category.subcategories.map((sub: any) => {
                                      return (
                                        <>
                                          <Accordion>
                                            <Accordion.Item
                                              eventKey={`${sub._id}${category.id}`}
                                              //  href={inject._id}
                                              onClick={() => {
                                                hanleClickshowProductPark(sub._id);
                                              }}
                                            >
                                              <Accordion.Header>
                                                {`${category.name}/${sub.name}`}
                                              </Accordion.Header>

                                              <Accordion.Body>

                                                <CardGroup className="card-groud">
                                                  {injection &&
                                                    injection.map((product: any) => {
                                                      return (
                                                        <>
                                                          <div className="product-container">
                                                            <InputGroup  >


                                                              <Card className="top-card">
                                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" type="checkbox" value={product._id} onClick={(e: any) => hanldeInputData(e, product._id)}  {...register("injectionPark_id")} />
                                                                <Card.Img
                                                                  variant="top"
                                                                  src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                                                                />
                                                                <Card.Body>
                                                                  <Card.Title>
                                                                    <a
                                                                      href={`/vaccine/${product.id}`}
                                                                    >
                                                                      {product.name}
                                                                    </a>
                                                                  </Card.Title>
                                                                  <Card.Text>
                                                                    <p>
                                                                      {
                                                                        product.description
                                                                      }
                                                                    </p>
                                                                    <span>
                                                                      {product.price}
                                                                    </span>
                                                                  </Card.Text>
                                                                </Card.Body>
                                                              </Card>
                                                            </InputGroup>


                                                          </div>
                                                        </>
                                                      );
                                                    })}
                                                </CardGroup>
                                              </Accordion.Body>
                                            </Accordion.Item>
                                          </Accordion>
                                        </>
                                      )
                                    })}

                                  </>
                                );
                              })}
                          </ListGroup>
                        ) : (
                          <CardGroup className="card-groud">
                            {productslist &&
                              productslist.map((product: any) => {
                                return (
                                  <>
                                    <div className="product-container">
                                      <Card>
                                        <Card.Img
                                          variant="top"
                                          src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                                        />
                                        <Card.Body>
                                          <Card.Title>
                                            <a href={`/vaccine/${product.id}`}>
                                              {product.name}
                                            </a>
                                          </Card.Title>
                                          <Card.Text>
                                            <p>{product.description}</p>
                                            <span>{product.price}</span>
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                    </div>
                                  </>
                                );
                              })}
                          </CardGroup>
                        )}
                      </Col>
                    </Row>
                  </Tab.Container>
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col sm={4}>sm=4</Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupVaccinations;