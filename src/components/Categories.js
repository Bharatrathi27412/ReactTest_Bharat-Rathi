import React, { useState,useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import logo from '../logo.png';
import fish from '../Fish.png';
import crust from '../Crust.png';
import exotic from '../Exotic.png';
import { getDatabase,ref,child,get } from "firebase/database"

function Categories() {

  const img = [{
    id:'1',imge:fish
  },
  {
    id:'2',imge:crust
  },
  {
    id:'3', imge:exotic
  }  
]

  // const img = []

  let finalData = {};
  const [newData,setNewData] = useState([]);

  async function fireBaseFetch() {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `posts/`)).then((snapshot) => {
        setNewData(snapshot.val())
        console.log(newData)
    }).catch((error) => {
        console.log(error);
    })
}

  useEffect(() => {
    fireBaseFetch()
    setTimeout(() => {} ,1000)
    // console.log("hel", newData)
  },[])

  console.log("hel", newData)

  return (
      <div style={{padding: "3rem"}}>
    <Row xs={1} md={3} className="g-4">
  {Object.keys(newData).map((id,i) => (
    <Col>
      <div className='card1'>
        <div>
            <img src={img[i].imge} width='220px' height='90px'></img>
        </div>
        <br />
        <h3>
        {newData[id].domain}
        </h3>
      </div>
    </Col>
  ))}
</Row>
</div>
  )
}

export default Categories