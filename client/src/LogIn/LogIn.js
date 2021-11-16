import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './LogIn.module.css';
import UserActions from '../resources/user/user.actions';
import ProductActions from '../resources/product/product.actions';
import RegionActions from '../resources/region/region.actions';

const LogIn = ({ logIn, getAllProducts, getAllRegions }) => {
  const onFinish = ({ username, password }) => {
    logIn(username, password);
    getAllProducts();
    getAllRegions();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 14 }}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['login-form']}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите имя пользователя',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пароль',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 7,
          span: 14,
        }}
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 7,
          span: 14,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

const mapDispatchToProps = {
  logIn: UserActions.logIn,

  getAllProducts: ProductActions.getAllProducts,

  getAllRegions: RegionActions.getAllRegions,
}

export default connect(null, mapDispatchToProps)(LogIn);
