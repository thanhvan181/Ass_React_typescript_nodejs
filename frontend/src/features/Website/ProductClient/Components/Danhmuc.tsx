import React from 'react'
import { Dropdown } from 'react-bootstrap'

import { useSelector, useDispatch } from "react-redux";

import { useEffect } from 'react';
import { getProductinCategory, loadCategory } from "../ProductClientSlide";


const hanldeClickCategory = () => {

}

const Danhmuc = () => {
    const dispatch = useDispatch();
  ;
  const category = useSelector( (state: any) => state.category.category);
  useEffect(() => {
    dispatch(loadCategory())
       
}, [])
const hanldeClickCategory = (id: any) => {
    console.log("idcate", id);

    dispatch(getProductinCategory(id))

}

    return (
        <div className="dropdow-grid">
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components">
              Danh mục
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

        {/* <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-components">
              Sắp xếp theo giá
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </div> */}
      </div>
    )
}

export default Danhmuc
