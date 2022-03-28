import React from 'react'
import { Table, Popconfirm, Card, Radio, Button, Space, Form, Input } from "antd";

import { useState, useEffect } from "react"

// import { remove } from '../../api/product';
import { ProductType } from '../../types/product';
import { Link } from 'react-router-dom';

type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
    
  }


const Product = (props: ProductManagerProps) => {
  
    
    
   



    const project: any = [
        {
            title: "IMAGE",
            dataIndex: "image",
            editable: true

        },
        {
            title: "NAME",
            dataIndex: "name",
            editable: true
        },
        {
            title: "PRICE",
            dataIndex: "price",
            editable: true
        },
        {
            title: "DESCRIPTION",
            dataIndex: "description",
            editable: true
        },
        {
            title: "QUANLITY",
            dataIndex: "quanlity",
            editable: true
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
            render: (_: any, record: any) => {
                console.log("record", record._id)
              return dataproduct.length >= 1 ? (
            
                 <Space>
                      <Popconfirm
                    title="Ban co chac chan muon xoa khong"
                    onConfirm={() => props.onRemove(record._id)}
                  >
                    <Button type="primary" danger>
                      Delete
                    </Button>

                  </Popconfirm>
                  <Button type="primary" >
                     <Link to={`/admin/product/${record._id}/edit`}> Edit</Link>
                    </Button>

                  
                 </Space>
                


                 
              ) : null;
            },
          },

       
        
                       
            
    

    ];
    const dataproduct = props.products.map(({ body, ...item }: any) => ({
        ...item,
        key: item.id,
        category: body,
        // delete: item._id,
      }));
   
    
   
    return (
        <div>
            <Button type="primary" className="criclebox tablespace mb-24" >
              <a href="add"> Add Products</a>
                </Button>
                <div className="table-responsive">
                    
                    <Table 
                    
                    columns={project} dataSource={dataproduct} pagination={false} className="ant-border-space" />

             
                  
                </div>

          
        </div>
    )
}

export default Product