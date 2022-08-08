import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Draggable from './Draggable';
import CardAdder from './CardAdder'
const root = createRoot(document.getElementById('root'));

export const CardContext = React.createContext();

function Home() {
  const [dragCards, setDragCards] = useState(['Lol', 'card2']);

  return(
    <div>
      <CardContext.Provider value={{dragCards, setDragCards}}>
        <CardAdder />
        {dragCards.map(card => (
          <Draggable card={card}/>
        ))}
      </CardContext.Provider>
    </div>
  )
}

root.render(<Home />);
