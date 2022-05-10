import React from 'react'
import readData from '../ReadData';

function Read() {
  return (
    <div>
        {readData.map((e) => {
            return(
                <div>
            <div className='large-card container'>
            <h3 style={{textAlign: 'left', padding: '20px'}}><b>{e.f1}</b></h3>
            <br />
            <h4 style={{padding: '30px'}}>{e.data}</h4>
            <br/>
            <h4 style={{textAlign: 'right', color:'#0F79BC', paddingLeft:"60px"}}>READ MORE {'>'}</h4>
            </div><br /><br />
        </div>
        )})}
    </div>
  )
}

export default Read