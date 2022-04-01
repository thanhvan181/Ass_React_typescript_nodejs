import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProduct from "../../Components/AddProduct";
import Danhmuc from "../../Components/Danhmuc";
import ListProduct from "../../Components/ListProduct";

interface Props {}

const MainPage = (props: Props) => {
  return (
    <div>
      <Container>
        <Row className="ab">
          <Col sm={8}>
              <Danhmuc/>
             
              <ListProduct/>
          </Col>

          <Col sm={4}>
            <AddProduct/>
             
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
