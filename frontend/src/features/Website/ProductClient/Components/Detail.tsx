import React from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useEffect } from 'react';
import { readone } from "../ProductClientSlide";

const Details = () => {
  const dispatch = useDispatch();
  ;
  const {id} = useParams();
  const productsone = useSelector( (state: any) => state.product.value);
  console.log("getProduc", productsone)

  useEffect(() => {
   dispatch(readone(id))

  }, [])

  return (
    <>
      <Container>
        <Row className="">
          <Col sm={4}>
            <Card className="bg-gray text-white">
              <Card.Img src="https://www.cdc.gov/coronavirus/2019-ncov/images/vaccines/VaccineCard-250x250-1.png?_=66031" alt="Card image" />
           
            </Card>
          </Col>

          <Col sm={8}>
            <h1>MÔ TẢ THÔNG TIN VẮC XIN <span>{productsone.name}</span> </h1>
            <p>
            {productsone.description}
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Các sản phẩm vaccine liên quan </h1>
          <CardGroup className="card-product">
            <div className="product-container">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                        />
                        <Card.Body>
                          <Card.Title>
                            {/* <a href={`/product/${productitem.id}`}> */}
                              {/* {productitem.name} */}
                              ddddd
                            {/* </a> */}
                          </Card.Title>
                          <Card.Text>
                            <span>Phòng bệnh: </span>
                            <p>ddkkshsjs</p>
                            <span>883883838</span>
                          </Card.Text>
                        </Card.Body>
                        <Button variant="success" className="btn-pro">
                          Chọn Mua
                        </Button>
                      </Card>
              </div>
              <div className="product-container">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                        />
                        <Card.Body>
                          <Card.Title>
                            {/* <a href={`/product/${productitem.id}`}> */}
                              {/* {productitem.name} */}
                              ddddd
                            {/* </a> */}
                          </Card.Title>
                          <Card.Text>
                            <span>Phòng bệnh: </span>
                            <p>ddkkshsjs</p>
                            <span>883883838</span>
                          </Card.Text>
                        </Card.Body>
                        <Button variant="success" className="btn-pro">
                          Chọn Mua
                        </Button>
                      </Card>
              </div>
              <div className="product-container">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                        />
                        <Card.Body>
                          <Card.Title>
                            {/* <a href={`/product/${productitem.id}`}> */}
                              {/* {productitem.name} */}
                              ddddd
                            {/* </a> */}
                          </Card.Title>
                          <Card.Text>
                            <span>Phòng bệnh: </span>
                            <p>ddkkshsjs</p>
                            <span>883883838</span>
                          </Card.Text>
                        </Card.Body>
                        <Button variant="success" className="btn-pro">
                          Chọn Mua
                        </Button>
                      </Card>
              </div>
              <div className="product-container">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                        />
                        <Card.Body>
                          <Card.Title>
                            {/* <a href={`/product/${productitem.id}`}> */}
                              {/* {productitem.name} */}
                              ddddd
                            {/* </a> */}
                          </Card.Title>
                          <Card.Text>
                            <span>Phòng bệnh: </span>
                            <p>ddkkshsjs</p>
                            <span>883883838</span>
                          </Card.Text>
                        </Card.Body>
                        <Button variant="success" className="btn-pro">
                          Chọn Mua
                        </Button>
                      </Card>
              </div>
              
                
            </CardGroup>

        </Row>
      </Container>
    </>
  );
};

export default Details;
