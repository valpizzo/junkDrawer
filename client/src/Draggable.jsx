import React, { useState, useContext } from "react";
import { CardContext } from './index';

function Draggable({card}) {
  const { dragCards } = useContext(CardContext);
  const [drag, setDrag] = useState({
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {},
    show: false
  });

  function dragStart(e) {
    console.log('drag start:', e.currentTarget);
    if (e.currentTarget?.getBoundingClientRect()) {
      setDrag({
        ...drag,
        diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
        diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
        dragging: true,
        show: true,
      });
    }
  }

  function dragging(e) {
    if (drag.dragging) {
      let left = e.screenX - drag.diffX;
      let top = e.screenY - drag.diffY;

      setDrag((prev) => {
        prev.styles = {
          left: left,
          top: top
        }
        let newO = {...prev};
        return newO;
      })
    }
  }

  function dragEnd() {
    console.log('Mouse released');
    setDrag((prev) => {
      prev.dragging = false;
      prev.show = false;
      let newO = {...prev};
      return newO;
    })
    console.log(drag.dragging);
  }

  return (
    <div className="dragBox" style={drag.styles} onMouseDown={(event) => { dragStart(event) }} onMouseMove={(event) => { dragging(event) }} onMouseUp={dragEnd}>
      <p style={{color: "red"}}>{card}</p>
      {console.log('CARD:', card)}
      {drag.show ? <p>dragging woo</p> : <p>not dragging boo</p>}
    </div>
  )
}

export default Draggable;