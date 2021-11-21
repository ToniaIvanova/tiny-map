import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './Authorization.module.css';
import UserActions from '../resources/user/user.actions';
import UserSelector from '../resources/user/user.selector';

const LogIn = ({
  errorType,
  logIn,
  resolveError,
}) => {
  const [nameStatus, setNameStatus] = useState('');
  const [nameHelp, setNameHelp] = useState(null);
  const [passwordStatus, setPasswordStatus] = useState('');
  const [passwordHelp, setPasswordHelp] = useState(null);

  useEffect(() => {
    if (errorType === 'USER_NOT_EXIST') {
      setNameStatus('error');
      setNameHelp('Такого пользователя не существует');
    }
    if (errorType === 'WRONG_PASSWORD') {
      setPasswordStatus('error');
      setPasswordHelp('Неправильный пароль');
    }
  },[errorType]);

  const onFinish = ({ username, password }) => {
    logIn(username, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = () => {
    if (errorType) {
      resolveError();
      setNameStatus('');
      setNameHelp(null);
      setPasswordStatus('');
      setPasswordHelp(null);
    }
  }

  return (
    <Form
      layout='vertical'
      wrapperCol={{ span: 16 }}
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['login-form']}
      onChange={onChange}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        validateStatus={nameStatus}
        help={nameHelp}
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
        validateStatus={passwordStatus}
        help={passwordHelp}
        rules={[{
          required: true,
          message: 'Введите пароль',
        }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles['submit-button']}>Подтвердить</Button>
        <Form.Item name="remember" valuePropName="checked" className={styles['remember-me']}>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>

    </Form>
  );
};

const mapStateToProps = state => ({
  errorType: UserSelector.getError(state),
});

const mapDispatchToProps = {
  logIn: UserActions.logIn,
  resolveError: UserActions.resolveError,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
