import { Button, ButtonGroup, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material"
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";


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
      
      <ButtonGroup size="small" color="secondary" variant="contained" orientation="vertical"
      aria-label="alignment button group">
        <Button onClick={()=> alert('Left Click')}>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <Stack direction='row'>
          <ToggleButtonGroup aria-label="text-formatting">
             <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
             <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
             <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
          </ToggleButtonGroup>
      </Stack>
    </>
  )
}

export default Buttonui
