import { Button, ButtonGroup, Stack } from "@mui/material"
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const Buttonui = () => {
  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <Stack spacing={2} direction='row' justifyContent= 'space-between'>
          <Button variant='outlined'>Click Me</Button>
          <Button variant="contained">Click</Button>
          <Button variant="outlined">Click</Button>
        </Stack>
        <Stack spacing={2} direction='row' justifyContent= 'space-between'>
          <Button variant='outlined'>Click Me</Button>
          <Button variant="contained">Click</Button>
          <Button variant="outlined">Click</Button>
        </Stack>
      </Stack>
    
      <Stack spacing={2} direction='row'>
          <Button variant='outlined'>Send <SendIcon/></Button>
          <Button variant="contained">Delete <DeleteIcon/></Button>
          
          <IconButton>
             <SendIcon/>
          </IconButton>
      </Stack>
      
      <ButtonGroup size="small" color="secondary" variant="contained">
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </>
  )
}

export default Buttonui