import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Select, Switch } from 'antd';
import UserSelector from '../../resources/user/user.selector';
import StationActions from '../../resources/station/station.actions';

function NewStation({ currentUser, createStation }){
  const onFinish = async newStationData => {
    newStationData.userId = currentUser._id;
    createStation(newStationData);
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
      <Switch />
    </Form.Item>

    <Form.Item wrapperCol={{span: 14, offset: 7}}>
      <Button type="primary" htmlType="submit">
      Добавить
      </Button>
    </Form.Item>

  </Form>
};

const mapStateToProps = state => ({
  currentUser: UserSelector.getCurrentUser(state),
});

const mapDispatchToProps = {
  createStation: StationActions.createStation,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStation);
