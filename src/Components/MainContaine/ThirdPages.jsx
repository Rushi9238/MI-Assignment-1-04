import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import '../../CSS_files/ThirdPages.css'
const ThirdPages = () => {
  return (
    <>
      <div className="thirdPages">
        <h2>How are you Planning to use...</h2>
        <p>We'll streamline your setup experience.</p>
        <div className="box">
          <div className="firstBox box1">
            <PersonIcon color='primary'fontSize="large" />
            <h3>For myself</h3>
            <p>Write Better. Think more clearly.Stay organized.</p>
          </div>
          <div className="secondBox box1">
            <GroupsIcon fontSize="large"/>
            <h3>With my team</h3>
            <p>Wikis,docs,task & projects,all in one place.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default ThirdPages