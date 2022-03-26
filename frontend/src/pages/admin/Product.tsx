import React from 'react'

import { Row, Col, Card, Radio, Table, Upload, message, Progress, Button, Avatar, Typography } from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import {useState, useEffect} from "react"
import { list } from '../../api/product';
// import { isEmpty } from "lodash";

// const { Title } = Typography;
type Props = {}


const Product = (props: Props) => {
    const onChange = (e: any) => console.log(`radio checked:${e.target.value}`);

    const [girdData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const { data } = await list();
            setGridData(data);
            setLoading(false);
        };
        
        loadData();
    }, []);

    useEffect(() => {
        console.log("gridData", girdData)
    })
    // const handleDelete = (value: any) => {
    //     remove(value._id);
    //     const DataSource = [...modifiData];
    //     const filterData: any = DataSource.filter((item) => item._id !== value._id);

    //     setGridData(filterData);
    // };

    

   
    const project = [
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