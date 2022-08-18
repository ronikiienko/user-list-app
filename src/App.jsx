import {Box, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import UserList from './UserList.jsx';

function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://reqres.in/api/users`)
            .then(resp => resp.json())
            .then(json => setUsers(json.data))
            .catch(err => {
                alert("Can't load users");
                console.log(err);
            })
    }, [])
    console.log(users);
    return (
        <Box>
            <UserList isLoading/>
        </Box>
    )
}

export default App
