import React from 'react'
import { IconButton, useTheme, Box } from '@mui/material'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import { useContext } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search'


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext)
  return (
    <Box classname="p-2 ml-2" display="flex" justifyContent="space-between" p={2}>
    {/* // search Box */}
    <Box 
    display="flex" 
    backgroundColor={colors.primary[400]}
    borderRadius="5px"
    >
      <InputBase sx={{ml:4, flex:1}} placeholder="search"/>
      <IconButton type='button' sx={{p:1}}>
        <SearchIcon/>
      </IconButton>
    </Box>

    {/* icons  */}
    <Box display="flex" >
    <IconButton onClick={colorMode.toggleColorMode}>
     {theme.palette.mode === "dark" ? (
      <DarkModeOutlinedIcon/>
    ):(
      <LightModeOutlinedIcon/>
    )}
    </IconButton>
    <IconButton>
      <NotificationsNoneOutlinedIcon/>
    </IconButton>
    <IconButton> 
      <SettingsOutlinedIcon/>
    </IconButton>
    <IconButton>
      <Person2OutlinedIcon/>
    </IconButton>
    </Box>

    </Box> 
  )
}

export default Topbar
