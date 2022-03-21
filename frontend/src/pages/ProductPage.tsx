import React from 'react'
import { Button, Card, CardGroup, Col, Container, Dropdown, Row } from 'react-bootstrap'

type Props = {}

const ProductPage = (props: Props) => {

  return (
    <div>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-custom-components">
          Danh mục
        </Dropdown.Toggle>

        <Dropdown.Menu >
          <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <Row className='ab'>
          <Col sm={8}>
            <CardGroup className='card-groud'>
            <div>
            <Card >
            <Card.Img variant="top" src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png" />
                <Card.Body>
                  <Card.Title>GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 1</Card.Title>
                  <Card.Text>
                    <span>Phòng bệnh: </span>
                    <p>Tiêu chảy do rota virus, Bạch hầu, Ho gà, Uốn ván, Bại liệt,
                    </p>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className="btn-pro">Chọn Mua</Button>
              </Card>
            </div>
            <div>
            <Card >
            <Card.Img variant="top" src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png" />
                <Card.Body>
                  <Card.Title>GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 1</Card.Title>
                  <Card.Text>
                    <span>Phòng bệnh: </span>
                    <p>Tiêu chảy do rota virus, Bạch hầu, Ho gà, Uốn ván, Bại liệt,
                    </p>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className="btn-pro">Chọn Mua</Button>
              </Card>
            </div>
            <div>
            <Card >
            <Card.Img variant="top" src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png" />
                <Card.Body>
                  <Card.Title>GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 1</Card.Title>
                  <Card.Text>
                    <span>Phòng bệnh: </span>
                    <p>Tiêu chảy do rota virus, Bạch hầu, Ho gà, Uốn ván, Bại liệt,
                    </p>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className="btn-pro">Chọn Mua</Button>
              </Card>
            </div>
            <div>
            <Card >
            <Card.Img variant="top" src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png" />
                <Card.Body>
                  <Card.Title>GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 1</Card.Title>
                  <Card.Text>
                    <span>Phòng bệnh: </span>
                    <p>Tiêu chảy do rota virus, Bạch hầu, Ho gà, Uốn ván, Bại liệt,
                    </p>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className="btn-pro">Chọn Mua</Button>
              </Card>
            </div>
            <div>
            <Card >
            <Card.Img variant="top" src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png" />
                <Card.Body>
                  <Card.Title>GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 1</Card.Title>
                  <Card.Text>
                    <span>Phòng bệnh: </span>
                    <p>Tiêu chảy do rota virus, Bạch hầu, Ho gà, Uốn ván, Bại liệt,
                    </p>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className="btn-pro">Chọn Mua</Button>
              </Card>
            </div>
            <div>
            <Card >
            <Card.Img variant="top" src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png" />
                <Card.Body>
                  <Card.Title>GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 1</Card.Title>
                  <Card.Text>
                    <span>Phòng bệnh: </span>
                    <p>Tiêu chảy do rota virus, Bạch hầu, Ho gà, Uốn ván, Bại liệt,
                    </p>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className="btn-pro">Chọn Mua</Button>
              </Card>
            </div>
              
              
            </CardGroup>


          </Col>

          <Col sm={4}>sm=4</Col>
        </Row>

      </Container>


      {/* <div className='info-product'>
      <h2>THÔNG TIN SẢN PHẨM VẮC XIN</h2>

      </div> */}

    </div>
  )
}

export default ProductPage