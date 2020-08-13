import React from 'react';
import Card from '../Card/card';

const Cardlist = ({robots}) => {
  return (
    <div className="">
      <div className="w-90 flex flex-wrap justify-center center">
        {
          robots.map(robot => {
            return (
              <Card 
                key={robot.id} 
                name={robot.name} 
                email={robot.email} 
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Cardlist;