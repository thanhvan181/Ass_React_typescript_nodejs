import React from "react";
import { Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import ProductClientSlide, { fetchProduct, getProductinCategory, loadCategory } from "../ProductClientSlide";

const Danhmuc = () => {
  const dispatch = useDispatch();

  const category = useSelector((state: any) => state.category.category);
  useEffect(() => {
    dispatch(loadCategory());
   
  }, []);
  const hanldeClickCategory = (id: any) => {
    console.log("idcate", id);

    dispatch(getProductinCategory(id));
  }
  // useEffect(() => {
  //   dispatch(fetchProduct({ orderBy: price, sortBy: valuesort }));
  // }, []);
  const hanldeClickPrice = (e:any) => {

    console.log("event", e)
    // dispatch(fetchProduct({orderBy:"price" , 'sortBy': }))
    // let currentPage = e.target.innerHTML ? parseInt(e.target.innerHTML):1
    // setPage(currentPage)
  }
  // const hanldeClickPrice = () => {

  // }

  return (
    <div className="dropdow-grid">
     
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components">
              DANH MUC SAN PHAM
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {category &&
                category.map((cate: any) => {
                  return (
                    <>
                      <Dropdown.Item
                        eventKey="1"
                        onClick={() => hanldeClickCategory(cate._id)}
                      >
                        {cate.name}
                      </Dropdown.Item>
                    </>
                  );
                })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components">
              SORT THEO BRANCH
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                eventKey="1"
                // onClick={() => hanldeClickCategory(cate._id)}
              >
                SORT DEFAULT{" "}
              </Dropdown.Item>

              <Dropdown.Item
                eventKey="1"
                // onClick={() => hanldeClickCategory(cate._id)}
              >
                SORT THEO GIA TANG DAN
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="1"
                // onClick={() => hanldeClickCategory(cate._id)}
              >
                SORT THEO GIA GIAM DAN
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components">
              SORT THEO GIA
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                eventKey="1"
                value="desc"
                onSelect={(e) => hanldeClickPrice(e)}
              >
                SORT DEFAULT
              </Dropdown.Item>

              <Dropdown.Item
                eventKey="1"
                value="desc"
                // onClick={() => hanldeClickCategory(cate._id)}
              >
                SORT THEO GIA TANG DAN
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="1"
                value="asc"
                // onClick={() => hanldeClickCategory(cate._id)}
              >
                SORT THEO GIA GIAM DAN
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </div>
   
  );
};

export default Danhmuc;
