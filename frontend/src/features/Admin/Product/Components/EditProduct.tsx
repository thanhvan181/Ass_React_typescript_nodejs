import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadInjectionPark } from '../../InjectionPark/InjectionPark';
import { listSub } from '../../../../api/subcategory';
import { loadSubCategory } from '../../../Website/Subcategory/Subcategory';
import {  editProduct, fetchProduct, getAllproducts, readone } from '../../../Website/ProductClient/ProductClientSlide';

const { Option } = Select;
import { useParams } from "react-router-dom";



const EditProduct = () => {
    const { id } = useParams();


    const dispatch = useDispatch();
    const injection  = useSelector((state: any) => state.injection.injectionpark)
    const cateogory = useSelector((state: any) => state.category.category);
    const subcategory = useSelector((state:any) => state.subcategory.subcategory)
    const productone = useSelector((state:any) => state.product.current)





    // const { register, handleSubmit, formState: { errors } } = useForm<any>()
    const [form] = Form.useForm();
    const navigate = useNavigate()



    const onSubmit:any = (dataInput: any) => {

       
        console.log("inputDataedit", dataInput)

        dispatch(editProduct({id, dataInput}));
        dispatch(getAllproducts())
        navigate("/admin/product")


    }
    useEffect(() => {

        dispatch(readone(id))


        dispatch(loadInjectionPark())
        dispatch(loadSubCategory())




        
       
       
       
    }, [id])
    form.setFieldsValue(productone);

    return (
        <>
            <Form 
                onFinish={onSubmit}
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >

                <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="description" name="description"> 
                    <TextArea  placeholder="maxLength is 6"  />

                </Form.Item>
                <Form.Item label="InjectionPark_id" name="injectionPark_id">
                    <Select>
                        {injection && injection.map((injec:any) => {
                            return (
                                <>
                                  <Option value={injec._id}>{injec.name}</Option>
                                </>
                            )
                        })}
                      
                    </Select>
                </Form.Item>
                <Form.Item label="subcategory_id"  name="subcategory_id">
                <Select>
                        {subcategory && subcategory.map((sub:any) => {
                            return (
                                <>
                                  <Option value={sub._id}>{sub.name}</Option>
                                </>
                            )
                        })}
                      
                    </Select>
                </Form.Item>
                <Form.Item label="Category_id" name="category_id">
                  
                <Select>
                        {cateogory && cateogory.map((compa:any) => {
                            return (
                                <>
                                  <Option value={compa._id}>{compa.name}</Option>
                                </>
                            )
                        })}
                      
                    </Select>
                </Form.Item>
                <Form.Item label="Start_use" name="start_use">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="End_use" name="end_use">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Price" name="price">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="quanlity" name="quanlity">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="available" valuePropName="checked" name="available">
                    <Switch />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}


export default EditProduct