import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

interface Props {

}

const VacsinSteps = (props: Props) => {
    return (
        <div>
              <h1 className='text-title'>Tiêm chủng trong 3 bước dễ dàng</h1>
            <CardGroup className='vacsinsteps'>
              
                <Card >
                    <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/Step_1.svg" />
                    <Card.Body>
                        <Card.Title>BƯỚC 1</Card.Title>
                        <Card.Text className='text-bg'>
                           Đặt lịch hẹn trên VNVC hoặc đến bất cứ trung tâm nào
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Làm thế nào đặt lịch hẹn trên VNVC</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/Step_2.svg" />
                    <Card.Body>
                        <Card.Title>BƯỚC 2</Card.Title>
                        <Card.Text className='text-bg'>
                            Tiêm chủng an toàn vào thời điểm bạn đã hẹn .{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Những việc nên làm và không nên tiêm chủng</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.cowin.gov.in/assets/images/Step_3.svg" />
                    <Card.Body>
                        <Card.Title>BƯỚC 3</Card.Title>
                        <Card.Text className='text-bg'>
                           Tải xuống giấy chứng nhận tiêm vắc sin của bạn
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"> Tải xuống giấy chứng nhận tiêm vắc sin của bạn</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default VacsinSteps
