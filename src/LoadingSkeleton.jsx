import {Skeleton, Typography} from '@mui/material';
import React from 'react';


export default function LoadingSkeleton() {
    return (
        <Skeleton variant="rectangular" width={210} height={60} />
    )
}