import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Danhmuc from "../../Components/Danhmuc";
import ListProduct from "../../Components/ListProduct";

interface Props {}

const MainPage = (props: Props) => {
  return (
    <div>
      <Container>
        <Row className="ab">
          <Col sm={4}>
              <Danhmuc/>
          </Col>

          <Col sm={8}>
             
              <ListProduct/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
