import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap';
import data from '../Data';

function Faq() {

    const accordionData = {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
      };
    
      const { title, content } = accordionData;
      const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      {data.map((e) => {
        return(
          <div>
        <Accordion.Item eventKey={{e}} style={{borderRadius: '26px'}}>
        <Accordion.Header bsPrefix='header-heading'><h3>{e.f1}</h3></Accordion.Header>
        <Accordion.Body>
          <h4>
          {e.data}
          </h4>
        </Accordion.Body>
      </Accordion.Item>
      <br /><br/>
      </div>
      )})}

</Accordion>

      {/* <div className='main-heading'>
          <div onClick={() => setIsActive(!isActive)}>{title}</div>
          <p>+</p>
      </div>
      { isActive && <div className='answers'> { content } </div> } */}
    </div>

  )
}

export default Faq