import { Typography } from '@material-ui/core'
import React from 'react'

const BlogContent = () => {
  return (
    <div style={{margin: '10px'}}>
        <Typography style={{fontFamily: 'courier', fontWeight: 'bold', fontSize: '18px'}}>
            COVID TRACKER APP
            <br />
            <div className="lists">
              -- Pretty Nice UI<br />
              -- Compatible (Responsive) in <b>ALL types</b> of device<br />
              -- ⭕ Link To Portfolio<br />
              -- Overall it is a Covid Tracker 😷🤯😷
            </div>
        </Typography>
    </div>
  )
}

export default BlogContent