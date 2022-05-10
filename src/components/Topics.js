import React from 'react'
import fragile from '../fragile.png';
import TopicsData from '../TopicsData';

function Topics() {
  return (
    <div>
        {TopicsData.map((e) => {
            return(
            <div class="container">
            <div class="card mb-3 mt-3" style={{maxWidth: '100%',border: '1px solid grey',borderRadius: '25px'}}>
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body" >
                        <h5 class="card-title" style={{textAlign: 'left', paddingLeft: '20px', paddingBottom: '30px'}}><h3>{e.f1}</h3></h5>
                        <p class="card-text" style={{padding: '17px', textAlign: 'justify'}}><h4>{e.data}</h4></p>
                        <h4 style={{textAlign: 'left', color:'#0F79BC', paddingLeft:"50px", paddingTop:"40px"}}>READ MORE {'>'}</h4>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <img src={fragile} class="img-fluid rounded-start" alt="..." style={{borderRadius: '25px',}}/>
                  </div>
                </div>
            </div>
        </div>
        )})}
        <div class="container">
</div>
    </div>
  )
}

export default Topics