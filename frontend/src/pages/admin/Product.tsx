import React from 'react'
import { Table, Popconfirm, Card, Radio, Button, Space, Form} from "antd";

import {useState, useEffect} from "react"
import { listproduct } from '../../api/product';
import { remove } from '../../api/product';

type Props = {}


const Product = (props: Props) => {
    const onChange = (e: any) => console.log(`radio checked:${e.target.value}`);

    const [girdData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingKey, setEditingKey] = useState("");
    const [editRow, setEdit] = useState(false);



    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const { data } = await listproduct();
            setGridData(data);
            setLoading(false);
        };
        
        loadData();
    }, []);

    useEffect(() => {
        console.log("gridData", girdData)
    })
    const handleDelete = (value: any) => {
        remove(value._id);
        const DataSource = [...dataproject];
        const filterData: any = DataSource.filter((item) => item._id !== value._id);

        setGridData(filterData);
    };

    

   
    const project:any = [
        {
            title: "IMAGE",
            dataIndex: "image",

        },
        {
            title: "NAME",
            dataIndex: "name"
        },
        {
            title: "PRICE",
            dataIndex: "price"
        },
        {
            title: "DESCRIPTION",
            dataIndex: "description"
        },
        {
            title: "QUANLITY",
            dataIndex: "quanlity"
        },
        {
            title: "Actions",
            dataIndex: "actions",
            align: "center",
            render: (_: any, record: any) => {
              return dataproject.length >= 1 ? (
            
                  <Popconfirm
                    title="Ban co chac chan muon xoa khong"
                    onConfirm={() => handleDelete(record)}
                  >
                    <Button type="primary" danger>
                      Delete
                    </Button>
                  </Popconfirm>
            
              ) : null;
            },
          },
        
    ];
    const dataproject = girdData.map(({ body, ...item }: any) => ({
        ...item,
        key: item._id,
        products: body,
    }));
    console.log("dataProduct", dataproject)
    return (
        <div>
            <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Projects Table"
                extra={
                    <>
                        <Radio.Group onChange={onChange} defaultValue="all">
                            <Radio.Button value="all">All</Radio.Button>
                            <Radio.Button value="online">ONLINE</Radio.Button>
                            <Radio.Button value="store">STORES</Radio.Button>
                        </Radio.Group>
                    </>
                }
            >
                <div className="table-responsive">
                    <Table columns={project} dataSource={dataproject} pagination={false} className="ant-border-space" />
                </div>
              
            </Card>
        </div>
    )
}

export default Product