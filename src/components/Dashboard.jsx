import React from 'react'
import { Avatar, Box, Card, Chip, Divider, Typography } from '@material-ui/core'
import creator from './images/Creator.jpg'
import BlogContent from './BlogContent'

const Dashboard = () => {
  return (
    <div>
        <Card style={{margin: '150px auto', width: '50%', padding: '20px', borderRadius: '10px',}}>
          <div className="logo" style={{display: 'flex', placeItems: 'center'}}>
            <Avatar src={creator} />
            <Chip label='About This App' color='primary' style={{marginLeft: 'auto'}} />
          </div>
          <Divider />
          <BlogContent />
        </Card>
    </div>
  )
}

export default Dashboard