import Box from '@mui/material/Box';
import HeaderContainer from './HeaderContainer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestHomeModuleInfo } from './../../ReduxSaga/Actions/Home'

const BaseContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(requestHomeModuleInfo());
    },[])
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ p: 3, marginTop: 10, marginLeft: 5, marginRight: 5 }}>
        {props.children}
      </Box>
    </Box>
  );
}
export default BaseContainer;