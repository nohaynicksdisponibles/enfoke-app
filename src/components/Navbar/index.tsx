import { Menu, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import navbarConfig, { OptionsType } from "@config/navbarConfig";
import { Grid } from 'antd';
import _ from "lodash";

export enum NavbarType {
    HOME = 'home',
    PAGE = 'page'
}

const { useBreakpoint } = Grid;

const Navbar = ({ type }: { type: NavbarType }) => {
    const screens = useBreakpoint();
    
    return (
        <Menu mode={'horizontal'} className={`navbar-${type}`} selectedKeys={[]}>
            <Space direction={screens.md ? 'horizontal' : 'vertical'}>
            {
                _.map(navbarConfig, (option: OptionsType) => 
                <Link to={option.to}>
                    <Menu.Item key={option.key} >
                        <Typography.Text style={styles.text}>{option.text}</Typography.Text>
                    </Menu.Item>
                </Link>)
            }
            </Space>
        </Menu>
    )
}

export default Navbar;