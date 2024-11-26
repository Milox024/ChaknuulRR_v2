import Box from '@mui/material/Box';

const BaseContainer = (props) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ p: 3, marginTop: 10, marginLeft: 5, marginRight: 5 }}>
        {props.children}
      </Box>
    </Box>
  );
}
export default BaseContainer;