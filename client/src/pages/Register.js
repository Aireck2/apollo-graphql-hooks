import React from "react";
import { Form, Input, Icon, Button } from "antd";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Register = props => {
  console.log();

  const { getFieldDecorator } = props.form;

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result);
      props.history.push("/");
    },
    variables: props.form.getFieldsValue([
      "username",
      "email",
      "password",
      "confirm"
    ])
  });

  const handleSubmit = e => {
    // props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     console.log(values);
    //   }
    e.preventDefault();
    addUser();
  };

  return (
    <div style={{ width: 400 }}>
      {loading && <p>loading...</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="E-mail"
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              { required: true, message: "Please confirm your password!" },
              { validator: compareToFirstPassword }
            ]
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Confirm Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

const WrappedRegister = Form.create()(Register);

export default WrappedRegister;
