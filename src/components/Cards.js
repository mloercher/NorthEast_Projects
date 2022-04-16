import React from 'react'
// import CardItem from './CardItem'
import './Cards.css'
import { Card, Row } from 'react-bootstrap'




function Cards() {

  return (
    <div>
      <Row>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text className='description'>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/newburgh_proj.png" />
          <Card.Body>
            <Card.Title>Newburgh Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text className='description'>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/newburgh_proj.png" />
          <Card.Body>
            <Card.Title>Newburgh Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="../images/accord_proj.png" />
          <Card.Body>
            <Card.Title>Accord Passive House</Card.Title>
            <Card.Text>
              2018 PHIUS Design Competition
              Honorable Mention: Residential
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      </div>
      )
}

      export default Cards;

      {/* <div className='cards'>
<h1>Projects</h1>
 <div className='cards-container'>
    <div className='cards-wrapper'>
        <ul className='cards-items'>
        <CardItem />
        </ul>
    </div>
 </div>
</div> */}