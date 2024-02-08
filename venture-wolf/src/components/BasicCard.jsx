import React from 'react'
import Card from 'react-bootstrap/Card';
import "./BasicCard.css"

const BasicCard = ({item}) => {
  return (

    <div className='Card'>
    <Card>
      <Card.Img style={{ 
          marginBottom: '5%',marginTop: '1.1rem',width:'40%',height:'40%',marginLeft:'30%',}} variant="top" src={item.image} />
      <Card.Body>
        <Card.Title style={{textAlign: 'center',fontSize:'1rem'}}>{item.title}</Card.Title>
        <Card.Title style={{textAlign: 'center'}}>{item.stars}</Card.Title>
        <Card.Subtitle style={{textAlign: 'center'}}>{item.rating}</Card.Subtitle>

        <div className='overflow' style={{marginTop: '1rem',marginLeft:'-1rem',marginRight:'-1rem',fontSize:'0.9rem',overflow:'auto',height: '10rem'}}>
        <Card.Text >{item.desc}</Card.Text>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BasicCard
