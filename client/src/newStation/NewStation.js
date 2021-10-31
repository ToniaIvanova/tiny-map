import React from 'react';
import Guest from '../constants/defaultUser';
import { Form, Input, Button, Select, Switch, Typography } from 'antd';
import StationApi from '../api/station.api';

export default function NewStation({ currentUser }){
  
  const onFinish = async newStationData => {
    newStationData.userId = currentUser._id;
    await StationApi.postNewStation(newStationData);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return <Form 
    labelCol={{ span: 7 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}>

    <Form.Item label="Продукт" name="productName">
      <Input />
    </Form.Item>

    <Form.Item label="Станция" name="stationName">
      <Input />
    </Form.Item>

    <Form.Item label="Координаты" name="place">
      <Input />
    </Form.Item>

    <Form.Item label="Регион" name="region">
      <Input />
    </Form.Item>

    <Form.Item label="Сколько нужно" name="needCount">
      <Select>
        <Select.Option value={25}>25</Select.Option>
        <Select.Option value={50}>50</Select.Option>
        <Select.Option value={150}>150</Select.Option>
        <Select.Option value={350}>350</Select.Option>
        <Select.Option value={1000}>1000</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item label="Выполнено" name="done" valuePropName="checked">
      { currentUser._id !== Guest._id ? <Switch /> : <Typography.Text>Пожалуйста, войтите :)</Typography.Text> }
    </Form.Item>

    <Form.Item wrapperCol={{span: 14, offset: 7}}>
      <Button type="primary" htmlType="submit">
      Добавить
      </Button>
    </Form.Item>

  </Form>
};
