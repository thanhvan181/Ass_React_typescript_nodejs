import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardGroup, Form, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchProduct } from "../ProductClientSlide";
import { useForm } from 'react-hook-form';
import { addToCart } from "../../Cart/CartSlide";
// type typePage ={
//   page: number,
// }

const ListProduct = () => {
  const dispatch = useDispatch();
  let items = [];

  const [page, setPage] = useState(1);
  const products = useSelector((state: any) => state.product.value);
  const paging = useSelector((state:any) => state.product.paging)
  // const productone = useSelector((state:any) => state.product.current)

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    const newData = {
        ...products,

        
    } ;
    console.log("newData", newData)
    dispatch(addToCart(newData));
    
}
 
  useEffect(() => {
    dispatch(fetchProduct({ pageSize: 6, page: page }));
  }, [page]);
  const onHanldClick = (e:any) => {
    console.log("event", e)
    console.log("event", e.target.innerHTML)
    let currentPage = e.target.innerHTML ? parseInt(e.target.innerHTML):1
    setPage(currentPage)
  }

  for (let number = 1; number <= paging.pages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page} onClick={(e) => onHanldClick(e)}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <CardGroup className="card-groud">
        {products &&
          products.map((productitem: any) => (
            <div className="product-container">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://wbc.net.au/wp-content/uploads/2021/05/covid-vaccine_title-page.png"
                />
                <Card.Body>
                  <Card.Title>
                    <a href={`/product/${productitem._id}`}>
                      {productitem.name.slice(0, 30)}...
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <span>Phòng bệnh:</span>
                    <p>{productitem.description.slice(0, 90)} ...</p>
                    <span>{productitem.price}</span>
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className="btn-pro">
                  Chọn Mua
                </Button>
              </Card>
            </div>
          ))}
      </CardGroup>
      </Form>
      
      <div>
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
};

export default ListProduct;
