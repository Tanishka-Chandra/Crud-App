import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import {useState, useEffect} from 'react';
import {addUser, getUser} from '../service/api';
import { useNavigate , useParams} from 'react-router-dom';

const Container = styled(FormGroup)`
width : 50%;
margin : 5% auto 0 auto;
& > div{
    margin-top : 20px;
}
`;
const defaultValue = {
    name : '',
    username : '',
    email : '',
    phone : ''
}
const EditUser = () => {
    const [user , setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        loadUserDetails();
    },[]);


    const loadUserDetails = async()=>{
        try{
            const response = await getUser(id);
            setUser(response.data);
        }catch(error){
            console.log("Error while loading user details",error);
        }
    };

    const addUserDetails = async() =>{
        await addUser(user);
        navigate('/all');
    };

    const onValueChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    };

    return(
        <Container>
            <Typography variant = "h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name = "name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name = "username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name = "email" value = {user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange = {(e)=>onValueChange(e)} name = "phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant = "contained" onClick = {()=>addUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}
export default EditUser;