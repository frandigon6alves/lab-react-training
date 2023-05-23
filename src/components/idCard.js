import React from 'react';

const IdCard = ({ firstName, lastName, gender, picture, height, birth }) => {
  const fullDate = birth.toDateString();

  return (
    <div style={{border: '2px solid black', padding: '5px', margin: '5px'}}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={picture} alt={'profile picture of ' + firstName} style={{height: '160px', marginRight: '10px'}} />
        <div>
          <p><strong>Nombre:</strong> {firstName}</p>
          <p><strong>Apellido:</strong> {lastName}</p>
          <p><strong>Género:</strong> {gender}</p>
          <p><strong>Fecha de nacimiento:</strong> {fullDate}</p>
          <p><strong>Altura:</strong> {height / 100 + 'm'}</p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;