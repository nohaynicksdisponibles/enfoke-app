import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";

export enum NavbarType {
    HOME = 'home',
    PAGE = 'page'
}

const Navbar = ({ type }: { type: NavbarType }) => {
    return (
        <Menu mode="horizontal" className={`navbar-${type}`}>
            <Link to='/'>
                <Menu.Item key="home">
                    <Typography.Text style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Home</Typography.Text>
                </Menu.Item>
            </Link>
            <Link to='/filter/popular'>
                <Menu.Item key="about" >
                    <Typography.Text style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>About</Typography.Text>
                </Menu.Item>
            </Link>
            <Link to='/filter/nowplaying'>
                <Menu.Item key="contact" >
                    <Typography.Text style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Contact</Typography.Text>
                </Menu.Item>
            </Link>
        </Menu>

    )
}

export default Navbar;