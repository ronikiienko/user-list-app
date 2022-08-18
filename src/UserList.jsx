import {Skeleton} from '@mui/material';
import React from 'react';
import LoadingSkeleton from './LoadingSkeleton.jsx';
import Users from './Users';


export default function UserList({isLoading}) {
    return (
        <>
            {isLoading && <LoadingSkeleton />}
            {!isLoading && <Users />}
        </>
    );
}