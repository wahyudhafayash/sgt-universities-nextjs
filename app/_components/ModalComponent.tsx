import React from "react";
import { Modal } from "antd";

interface ModalComponentProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  onOk,
  onCancel,
}) => (
  <Modal
    title="Login Successful"
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
  >
    <p>You have successfully logged in!</p>
  </Modal>
);

export default ModalComponent;
