import React from "react";
import { Form, Input, Button, Checkbox, Typography, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Thông tin đăng nhập:", values);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Title level={3} className="login-title">
          Login
        </Title>
        <p>Enter your email address and password to access admin panel</p>
        <Form
          name="loginForm"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
          className="login-form"
        >
          <Form.Item
            name="username"
            label="Email"
            rules={[
              { required: true, message: "This field is required!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="Password"
            label="Password"
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
