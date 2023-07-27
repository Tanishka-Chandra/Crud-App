import {AppBar, Toolbar, styled} from '@mui/material' ;
import {NavLink} from 'react-router-dom';
const Header = styled(AppBar)`
background : black
`;
const Tab = styled(NavLink)`
    margin-right : 25px;
    font-size : 20px;
    color : inherit;
    text-decoration : none
`;
const Navbar = () => {
    return(
        <Header position = "static">
            <Toolbar>
            <Tab to ='/'>Home</Tab>
            <Tab to = '/all'>All Users</Tab>
            <Tab to = '/add'>Add User</Tab>
            </Toolbar>
        </Header>
    )
}
export default Navbar;