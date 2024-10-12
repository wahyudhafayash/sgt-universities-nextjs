"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

import ModalComponent from "./ModalComponent";

type FieldType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

const LoginFormComponent: React.FC = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    router.push("/universities");
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col w-screen min-h-screen justify-center items-center bg-gray-100">
      <Form
        className="bg-white rounded-lg shadow-xl p-10 space-y-6"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <Form.Item<FieldType>
          label="Email"
          labelAlign="left"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          labelAlign="left"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 4, message: "Have at least 4 characters" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <ModalComponent
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalClose}
      />
    </div>
  );
};

export default LoginFormComponent;
