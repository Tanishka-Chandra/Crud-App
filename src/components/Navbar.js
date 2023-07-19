import {AppBar, Toolbar, styled} from '@mui/material' ;
const Header = styled(AppBar)`
background : black
`;
const Tab = styled('p')`
    margin-right : 25px;
    font-size : 20px
`;
const Navbar = () => {
    return(
        <Header position = "static">
            <Toolbar>
            <Tab>Home</Tab>
            <Tab>All Users</Tab>
            <Tab>Add User</Tab>
            </Toolbar>
        </Header>
    )
}
export default Navbar;