import { FormControl, InputLabel, MenuItem, TextField, Typography, Select } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import React, { useState } from "react";
import Center from "./Center";
import Login from "./Login";
import { blueGrey, red } from "@mui/material/colors";
import axios from "axios";

export default function Register() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = React.useState('');

    const handleUserName = (value) => {
        setUserName(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleRegister = () => {
        const data = {
            UserName: username,
            Password: password,
            role: role
        }
    }

    const url ='https://localhost:44380/api/Login/Register';
    axios.post(url,data).then((result)=>{
        alert(result.data);
    }).catch((error)=>{
        alert(error);
    })


    return (

        <Center>
            <Card sx={{ width: '400px' }}>
                <CardContent sx={{}}>
                    <Typography variant="h3" sx={{ my: '3', textAlign: 'center' }}>VC Health Care</Typography>
                    <Typography sx={{ m: 1 }}>Register User</Typography>
                    <Box sx={{
                        '&  .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>

                        <form noValidate autoComplete="off">
                            <TextField
                                label="UserName"
                                name="username"
                                variant="outlined"
                                onChange={(e) => handleUserName(e.target.value)} />

                            <TextField
                                label="Password"
                                name="password"
                                variant="outlined"
                                type={'password'}
                                onChange={(e) => handlePassword(e.target.value)} />

                            <TextField
                                label="Conform Password"
                                name="Conform password"
                                variant="outlined"
                                type={'password'} />

                            <Box>
                                <FormControl fullWidth sx={{ m: 1, width: '90%' }}>
                                    <InputLabel>Role</InputLabel>
                                    <Select onChange={handleRoleChange} value={role} label="Role">
                                        <MenuItem value={1}>Branch Manager</MenuItem>
                                        <MenuItem value={2}>Area Manager</MenuItem>
                                        <MenuItem value={3}>Division Manager</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%', m: 1 }} onClick={() => handleRegister()}>Register</Button>

                            <Typography sx={{ m: 1 }}>Alredy have a account ? <Link href="./Login" value="Login" onClick={Login}>Login</Link></Typography>

                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    );

}
