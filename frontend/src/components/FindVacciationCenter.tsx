import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

interface Props {

}

const FindVacciationCenter = (props: Props) => {
    return (
        <div>

            <Container className='content-search'>
                <Row className='col6'>
                    <div>
                        <Col>
                            <img src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-kham-sang-loc-truoc-tiem-1.png" width={400} height={300} />
                        </Col>
                    </div>
                    <div>
                        <Col >
                            <img src="https://vnvc.vn/wp-content/uploads/2018/07/img_1-1.png" width={400} height={300} />
                        </Col>
                    </div>
                    <div>
                        <Col>
                            <img src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-check-in-1.png" width={400} height={300} />
                        </Col>
                    </div>
                </Row>
                <Row className='col6'>
                    <div>
                        <Col>
                            <img src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-tiem-1.png" width={400} height={300} />
                        </Col>
                    </div>
                    <div>
                        <Col >
                            <img src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-sanh-cho-1.png" width={400} height={300} />
                        </Col>
                    </div>
                    <div>
                        <Col>
                            <img src="https://vnvc.vn/wp-content/uploads/2018/07/VNVC-khu-vui-choi-1.png" width={400} height={300} />
                        </Col>
                    </div>
                </Row>
                <div>
                    <p>
                        Là trung tâm tiêm chủng cho trẻ em và người lớn chất lượng hàng đầu, VNVC đang mở rộng hệ thống các trung tâm giúp mang chất lượng dịch vụ tốt nhất với giá cực kỳ ưu đãi đến người dân trên khắp cả nước. Tại hệ thống tiêm chủng VNVC, chúng tôi luôn mong muốn đem lại sự thuận tiện, thoải mái và yên tâm cho khách hàng.
                        Khách hàng sẽ được Bác sĩ chuyên khoa kiểm tra sức khỏe và tư vấn các mũi tiêm phù hợp với lứa tuổi.
                        Đội ngũ điều dưỡng được đào tạo chuyên biệt về tiêm chủng cùng với sự chu đáo và nhiệt tình chăm sóc trẻ.
                        Phòng tiêm với đầy đủ các trang thiết bị y tế đạt chuẩn cao cấp. Không gian phòng chờ trước tiêm và sau tiêm rộng rãi, thoáng mát, đầy màu sắc cuốn hút, tạo sự thân thiện với trẻ.

                        Ngoài ra mẹ và bé còn có khu vực riêng cho con bú, phòng thay tã, phòng pantry… để con được thoải mái như đang ở nhà.
                        Với cơ sở vật chất và chất lượng dịch vụ 5 sao, giá vắc xin tại VNVC cực kỳ cạnh tranh và đặc biệt, chỉ tính phí vắc xin, các tiện ích kèm theo đều được miễn phí như: khám sàng lọc trước tiêm, gửi xe, khu vui chơi, nước uống, wifi, các phòng riêng cho mẹ và bé...
                    </p>
                </div>
            </Container>
            <hr />
            <Container>
                <Row>
                    <Col sm={8}>
                        <h2>HÀ NỘI </h2>
                        <div className="item_address">
                            <div className="title_chinhanh">VNVC Đông Anh:</div>
                            <div className="address_chinhanh">
                                thôn Đản Mỗ, xã Uy Nỗ, huyện Đông Anh, TP.Hà Nội
                                <br />

                                <a rel="no-follow" className="small" target="_blank" href="https://goo.gl/maps/eZSwnMabJR3f4aR39">Xem bản đồ trên google</a>                                        </div>
                            <div className="text-right"><span className="timtrenbado" data-title="VNVC Đông Anh" data-embed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9619169811685!2d105.84429694160632!3d21.149739558372744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313501ac2db3fdb1%3A0xe66ac4d1d640ac7e!2zVk5WQyDEkMOUTkcgQU5I!5e0!3m2!1svi!2s!4v1592969184757!5m2!1svi!2s
                                    ">Tìm trên bản đồ</span></div>
                        </div>


                    </Col>

                    <Col sm={4}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.056932198286!2d105.75923251480201!3d21.0304078859975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134557fa7f92755%3A0x5151398ad6e192c6!2zVk5WQyBN4bu5IMSQw6xuaA!5e0!3m2!1sen!2s!4v1648115497262!5m2!1sen!2s" width="400" height="450" style={{border:0}}  loading="lazy"></iframe>
                       
                         
                    </Col>
                </Row>

            </Container>



            <hr />
        </div>
    )
}

export default FindVacciationCenter
