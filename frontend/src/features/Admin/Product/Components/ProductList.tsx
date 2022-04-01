

import {
  Table,
  Popconfirm,

  Button,
  Space,

} from "antd";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, removeproduct } from '../../../Website/ProductClient/ProductClientSlide';






const ProductList = () => {
  
  const [filteredInfo, setFilteredInfo] = useState<any>({});
  const [sortedInfo, setSortedInfo] = useState<any>({});
  const products = useSelector((state:any) => state.product.value)
  console.log("productall", products)

  const dispatch = useDispatch();
  
    useEffect(() => {
       dispatch(fetchProduct(""))
    }, [])

    const onRemove = (id:any) => {
        console.log("id",id);
        dispatch(removeproduct(id))
    }
  

  const handleChange = (pagination:any, filters:any, sorter:any) => {
     console.log("Em thich sort: ", sorter, filters)
   
      setFilteredInfo(filters)
     
      setSortedInfo(sorter)
  
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    
    setFilteredInfo({}),
    setSortedInfo({})
    
  };
  const setPriceSort = () => {
    setSortedInfo({
        order: 'descend',
        columnKey: 'price',
    });
  };
  const dataproduct = products.map(({ body, ...item }: any) => ({
    ...item,
    key: item.id,
    category: body,
    // delete: item._id,
  }));
  
  
    const project :any = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Pentaxim ', value: 'Pentaxim ' },
          { text: 'Hexaxim', value: 'Hexaxim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value:any, record:any) => record.name.includes(value),
        sorter: (a:any, b:any) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name',
        ellipsis: true,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a:any, b:any) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'DESCRIPTION',
        dataIndex: 'description',
        key: 'description',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.description || null,
        onFilter: (value:any, record:any) => record.address.includes(value),
        sorter: (a:any, b:any) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'QUANLITY',
        dataIndex: 'quanlity',
        key: 'quanlity',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.quanlity || null,
        onFilter: (value:any, record:any) => record.quanlity.includes(value),
        sorter: (a:any, b:any) => a.quanlity - b.quanlity,
        sortOrder: sortedInfo.columnKey === 'quanlity' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Actions",
        dataIndex: "actions",
        align: "center",
        render: (_: any, record: any) => {
          console.log("record", record._id);
          return dataproduct.length >= 1 ? (
            <Space>
              <Popconfirm
                title="Ban co chac chan muon xoa khong"
                onConfirm={() => onRemove(record._id)}
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
              <Button type="primary">
                <Link to={`/admin/product/${record._id}/edit`}> Edit</Link>
              </Button>
            </Space>
          ) : null;
        },
      },
    ];

 

 

  return (
    <div>
      <Button type="primary" className="criclebox tablespace mb-24">
        <a href="add"> Add Products</a>
      </Button>
      <div className="table-responsive">
      <Space style={{ marginBottom: 16 }}>
          <Button onClick={setPriceSort}>Sort Price</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table
          columns={project}
          dataSource={dataproduct}
        //   pagination={false}
        onChange={handleChange}
          bordered
          className="ant-border-space"
        />
      </div>
    </div>
  );
};

export default ProductList;
