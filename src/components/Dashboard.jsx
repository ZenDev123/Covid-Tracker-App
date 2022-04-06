import React from 'react'
import { Avatar, Box, Card, Chip, Divider, Typography } from '@material-ui/core'
import creator from './images/Creator.jpg'
import BlogContent from './BlogContent'
import './css/Dashboard.css'
const Dashboard = () => {
  return (
    <div>
        <div className='dashboard'>
          <div className="logo" style={{display: 'flex', placeItems: 'center', marginBottom: '20px'}}>
            <Avatar src={creator} />
            <div style={{marginLeft: 'auto'}}>
              <Chip label='About This App' color='primary' style={{margin: '5px', fontWeight: 'bold'}} />
              <a href='https://pre-deployement-portfolio-test-environment.netlify.app' style={{textDecoration: 'none', cursor: 'pointer'}} target={'_blank'}>
                <Chip label='Portfolio' color='secondary' style={{margin: '5px', fontWeight: 'bold'}} />
              </a>
            </div>
          </div>
          <Divider />
          <BlogContent />
        </div>
    </div>
  )
}

export default Dashboard