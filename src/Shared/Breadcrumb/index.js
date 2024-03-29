import { Link } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import Text from '../Text';
import './index.scss';

const Breadcrumb = ({ breadcrumbItems }) => (
  <AntdBreadcrumb className='breadcrumbs'>
    {breadcrumbItems.map((item, index) => (
      <AntdBreadcrumb.Item key={index}>
        {
          (index + 1) !== breadcrumbItems.length
            ? (
              <Link to={item.link}>
                <span className='bread-childs'><Text level={4}>{item.name}</Text></span>
              </Link>
            ) : <span className='lastbread-child'><Text level='5'>{item.name}</Text></span>
        }
      </AntdBreadcrumb.Item>
    ))}
  </AntdBreadcrumb>
);

export default Breadcrumb;
