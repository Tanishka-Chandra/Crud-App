import { Table, TableHead,TableRow, TableBody, TableCell, styled, Button } from "@mui/material";
import {getUsers} from '../service/api';
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Styledtable = styled(Table)`
    width : 90%;
    margin : 50px auto 0 auto;
`
const Thead = styled(TableRow)`
    background: black;
    & > th{
        color : white;
        font-size : 20px;
    }
`
const Tbody = styled(TableRow)`
    & > td {
        font-size: 18px;
    }
`
const AllUser = () => {

    const[users , setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers = async () => {
        try {
          const data = await getUsers();
          setUsers(data);
        } catch (error) {
          console.error("Error while fetching users:", error.response || error);
          // Optionally, you can set an empty array for users if the API call fails
          setUsers([]);
        }
      };
      
    
    return(
        <Styledtable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map((user,index)=>(
                        <Tbody key={index}>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                            <Button variant = "contained" style = {{marginRight:10}} component={Link} to ={`/edit/${user.phone}`}>Edit</Button>
                            <Button variant = "contained" color = "error">Delete</Button>
                            </TableCell>
                           
                        </Tbody>
                    ))
                }

            </TableBody>
        </Styledtable>
    )
}
export default AllUser;