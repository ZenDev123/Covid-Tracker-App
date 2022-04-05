import { Card, Typography } from '@material-ui/core'
import React from 'react'
import lostSomewhere from './images/lost-somewhere.svg'

const NotFound = () => {
  return (
    <div>
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}} className="header-content">
            <Card style={{margin: '10px'}}>
                <Typography style={{fontSize: '20px', fontWeight: 'bold'}}>OOP'S LOOK'S LIKE THERE HAS NOTHING LIKE THIS EVER EXISTED</Typography>
            </Card>
            <img style={{width: '20%'}} src={lostSomewhere} alt="" />
        </div>
    </div>
  )
}

export default NotFound