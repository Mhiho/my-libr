import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import {
  SearchOutlined,
  BookOutlined,
  BookTwoTone,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('Wróć do czytania', '1', <BookOutlined />),
  getItem('Inne pozycje autora', '2', <BookTwoTone />, [
    getItem('Kwiaty zła', '3'),
    getItem('Jutro', '4'),
    getItem('Czytanie grozi zakochaniem', '5'),
  ]),
  getItem('Szukaj', '6', <SearchOutlined />),
];

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Czytaj dalej</Breadcrumb.Item>
            <Breadcrumb.Item>Pozycja</Breadcrumb.Item>
          </Breadcrumb>
          <main>{children}</main>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Awesome Library ©2023 Stworzone przez Mica Michał Pełka
        </Footer>
      </Layout>
    </Layout>
  );
};
