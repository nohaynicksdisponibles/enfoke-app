import { Menu, Typography } from "antd";
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
        <Menu mode={screens.md ? 'horizontal': 'vertical'} className={`navbar-${type}`} selectedKeys={[]}>
            {
                _.map(navbarConfig, (option: OptionsType) => 
                <Link to={option.to}>
                    <Menu.Item key={option.key} >
                        <Typography.Text style={styles.text}>{option.text}</Typography.Text>
                    </Menu.Item>
                </Link>)
            }
        </Menu>
    )
}

export default Navbar;