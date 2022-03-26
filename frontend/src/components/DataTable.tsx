import { useState, useEffect } from "react";

import { Table, Popconfirm, Button, Space } from "antd";
import { isEmpty } from "lodash";
import { list, remove } from "../api/category";

const DataTable = (props: any) => {
  const [girdData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data } = await list();
    setGridData(data);
    setLoading(false);
  };
  const handleDelete = (value: any) => {
    remove(value._id);
    const DataSource = [...modifiData];
    const filterData: any = DataSource.filter((item) => item._id !== value._id);

    setGridData(filterData);
  };

  const modifiData = girdData.map(({ body, ...item }: any) => ({
    ...item,
    key: item.id,
    category: isEmpty(body) ? item.category : body,
  }));

  const columns: any[] = [
    {
      title: "STT",
      dataIndex: "",
    },
    {
      title: "NAME",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      align: "center",
      render: (_: any, record: any) => {
        return modifiData.length >= 1 ? (
      
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

  return (
    <div>
      <Table
        dataSource={modifiData}
        columns={columns}
        bordered
        loading={loading}
      />
    </div>
  );
};
export default DataTable;
