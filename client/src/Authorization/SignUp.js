import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './Authorization.module.css';

import UserActions from '../resources/user/user.actions';
import UserSelector from '../resources/user/user.selector';
import ProductActions from '../resources/product/product.actions';
import RegionActions from '../resources/region/region.actions';

const SignUp = ({
  errorType,
  signUp,
  resolveError,
  getAllProducts,
  getAllRegions
}) => {
  const [validateStatus, setValidateStatus] = useState('');
  const [help, setHelp] = useState(null);

  useEffect(() => {
    if (errorType) {
      setValidateStatus('error');
      setHelp('Такой пользователь уже существует');
    }
  },[errorType]);

  const onFinish = async ({ username, password }) => {
    signUp(username, password);
    console.log({ errorType });
    getAllProducts();
    getAllRegions();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = () => {
    if (errorType) {
      resolveError();
      setValidateStatus('');
      setHelp(null);
    }
  }

  return (
    <Form
      layout='vertical'
      wrapperCol={{ span: 16 }}
      name="sign-up"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['login-form']}
      onChange={onChange}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        validateStatus={validateStatus}
        help={help}
        rules={[{
          required: true,
          message: 'Введите имя пользователя',
        }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{
          required: true,
          message: 'Введите пароль',
        }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Повторите пароль"
        name="repassword"
        rules={[{
          required: true,
          message: 'Повторите пароль',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Не совпадают!'));
          },
        })]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Вход</Button>
        <Form.Item name="remember" valuePropName="checked" className={styles['remember-me']}>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = state => ({
  errorType: UserSelector.getError(state),
})

const mapDispatchToProps = {
  signUp: UserActions.signUp,
  resolveError: UserActions.resolveError,

  getAllProducts: ProductActions.getAllProducts,

  getAllRegions: RegionActions.getAllRegions,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
