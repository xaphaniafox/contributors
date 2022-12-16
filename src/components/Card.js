import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className=' bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' width="200px" height="200px" src={`https://avatars.dicebear.com/api/micah/:${name}.svg`} />
      <div>
        <h2 className='f5'>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  )
}

export default Card;
