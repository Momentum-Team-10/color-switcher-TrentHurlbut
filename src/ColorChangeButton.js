import React from 'react';
/* eslint-disable */

function ColorChangeButton(props) {
  return (
    <button className={props.color} onClick={() => props.setColor(props.color)}>{props.color}</button>
  );
}

export default ColorChangeButton;
/* eslint-disable */
