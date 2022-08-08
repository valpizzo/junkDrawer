import React, { useState, useContext} from 'react';
import { CardContext } from './index';

function CardAdder() {
  const { dragCards, setDragCards } = useContext(CardContext);
  const [text, setText] = useState('');

  function updateText(e) {
    setText(e.target.value);
  }
  function addCard(e) {
    setDragCards([...dragCards, text]);
  }

  return (
    <div>
      <label htmlFor="cname">Card:</label>
      <input type="text" id="cname" onChange={updateText}></input>
      <input type="submit" value="Submit" onClick={addCard}></input>
    </div>
  )
}

export default CardAdder;