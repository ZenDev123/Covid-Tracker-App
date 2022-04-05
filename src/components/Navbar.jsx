import { AppBar, Button, Typography } from '@material-ui/core'
import { LocationCity, LocationOnRounded, Map } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {

  return (
    <div>
        <AppBar className='nav' style={{background: '#121212', padding: '20px', position: 'static'}}>
            <div className='links'>
                <Button component={Link} to='/'>
                    <Typography>COVID TRACKER</Typography>
                </Button>
                <Button component={Link} to='/data'>
                    <Typography>TRACKED DATA</Typography>
                </Button>
                <Button component={Link} to='/table-display'>
                    <Typography>AFFECTED COUNTRIES</Typography>
                </Button>
            </div>
        </AppBar>
    </div>
  )
}

export default Navbar