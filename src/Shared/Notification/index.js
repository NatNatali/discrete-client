import { notification } from 'antd';
// import { CloseOutlined } from '@ant-design/icons';
import './index.scss';

export const successToast = (title) => {
  notification.success({
    message: title,
    className: 'success-toast',
    top: 86,
  });
};

export const infoToast = (title, message) => {
  notification.info({
    message: title,
    description: message,
    className: 'info-toast',
    top: 86,
  });
};

export const warningToast = (title, message) => {
  notification.warning({
    message: title,
    description: message,
    className: 'warning-toast',
    top: 86,
  });
};

export const errorToast = (title, message) => {
  notification.error({
    message: title,
    description: message,
    className: 'error-toast',
    top: 86,
  });
};

const notifyByType = {
  error: errorToast,
  success: successToast,
  warning: warningToast,
  info: infoToast,
};

/**
 * @param {'error' | 'success' | 'warning' | 'info'} type
 * @param {string} title
 * @param {string} message
 */
export const showToast = (type, title, message) => {
  notifyByType[type](title, message);
};
