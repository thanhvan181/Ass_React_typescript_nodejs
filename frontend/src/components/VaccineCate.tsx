import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
import { loadCategory } from "../features/Website/Category/CategorySlide";



const VaccineCate = () => {
    const showcate = useSelector((state: any) => state.category.category);
    const dispath = useDispatch();

    useEffect(() => {
        dispath(loadCategory())

        
    }, [])

    
  return (
    <div className="bg-cate">

      <Container>
          <h1 className="text-title">Danh mục Vaccine tiêm chủng </h1>
        <Row className="row-container">
            {showcate && showcate.map((cateitems:any) => {

                return(
                    <Col className="col-h">
                    <Card style={{ height: '18rem' }}>
                    <Card.Body className="card-bo" >
                    <Card.Title className="title-cate"><a href="">{cateitems.name}</a></Card.Title>
                           

                    </Card.Body>
                   
                    <Card.Img className="img-cate" src="https://www.cowin.gov.in/assets/images/what's_new_on_cowin.svg" />
                    

                    
                  
                    
                       
                      
                      
                    
                   
                    </Card>
                  </Col>

                )
            })}
        
           
        </Row>
      </Container>
    </div>
  );
};

export default VaccineCate;
