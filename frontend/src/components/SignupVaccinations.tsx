import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

type Props = {}

const SignupVaccinations = (props: Props) => {
  return (
    <div>
            <Container>
                <Row>
                    <Col sm={8}>

                        <Form>
                            <h5 className="text-h5">THÔNG TIN NGƯỜI TIÊM</h5>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Họ tên người tiêm</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập họ tên" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Ngày sinh người tiêm</Form.Label>
                                    <Form.Control type="date" placeholder="" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form.Check
                                        inline
                                        label="NAM"
                                        name="group1"
                                        type="radio"

                                    />
                                    <Form.Check
                                        inline
                                        label="NỮ"
                                        name="group1"
                                        type="radio"

                                    />

                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Mã khách hàng(Nếu có)</Form.Label>
                                    <Form.Control type="text" placeholder="Mã khách hàng" />
                                </Form.Group>
                            </Row>


                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Số nhà, tên đường</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label></Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group> */}

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Tỉnh thành</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Quận huyên</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Phường xã</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>
                            <h5 className="text-h5">THÔNG TIN NGƯỜI LIÊN HỆ </h5>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Họ và tên người liên hệ </Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Mối quan hệ với ngừoi tiêm</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập họ tên" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Số điện thoại liên hệ </Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>



                            </Row>
                            <Row>
                                <h5 className="text-h5">THÔNG TIN DỊCH VỤ </h5>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Trung tâm muốn tiêm </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Ngày muốn tiêm</Form.Label>
                                    <Form.Control type="date" placeholder="" />
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
  )
}

export default SignupVaccinations