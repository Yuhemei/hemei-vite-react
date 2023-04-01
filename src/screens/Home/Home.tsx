/*
 * @Author: Hemei yuhemei8088@163.com
 * @Date: 2023-03-26 22:16:34
 * @FilePath: /vite-react-project/src/screens/Home/Home.tsx
 * @Description: Do not edit
 */
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './index.less'
import { HomeTwoTone, SoundTwoTone } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const topMenuItems: MenuProps['items'] = [{
    label: "主页",
    key: '',
    icon: <HomeTwoTone />
}, {
    label: "react-router",
    key: 'routerTest',
    icon: <SoundTwoTone />
}];

const items2: MenuProps['items'] = [
    {
        key: `game`,
        icon: React.createElement('UsbTwoTone'),
        label: `游戏`,
        children: [
            {
                key: 'game/SquireGame',
                label: `方块游戏`,
            }
        ]
    }
]
const Home: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Layout className='Home'>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['Home']}
                    items={topMenuItems}
                    onClick={({ key }) => {
                        navigate(`/${key}`, { replace: true })
                    }} />
            </Header>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                        onClick={({ key }) => {
                            navigate(`/${key}`, { replace: true })
                        }}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={
                        [{ title: location.key }]
                    }>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Home;