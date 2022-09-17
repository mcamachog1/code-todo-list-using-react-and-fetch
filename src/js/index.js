//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

const Counter = () => {
  //initilize a count variable at 0, the setCount function
  // will be used to re-set the "count" value.
  const [count, setCount] = useState(0);
  return (
    <div className="m-2 pt-5">
      {count != 1 ?   
      <h2><span className='link-danger'>♥</span> {count} likes</h2> : <h2><span className='link-danger'>♥</span> {count} like</h2> }
      {/* Reset count to its previous value + 1 */}
      {console.log('Mensaje 1: sale la 1era vez y despues de renderizar + o -',count)}
      <span className="me-3" onClick={() => {setCount(count + 1);console.log('Mensaje 2: esto se ejecuta antes de renderizar + y tiene el valor viejo',count)}}><i className="fa-regular fa-thumbs-up"></i></span>

      {/* Reset count to its previous value - 1 */}
      <span className="ms-3" onClick={() => { count >0 &&
        setCount(count - 1);
        console.log('Mensaje 3: esto se ejecuta antes de renderizar - y tiene el valor viejo',count)}}>
        <i className="fa-regular fa-thumbs-down"></i>
       </span>
      {console.log('Mensaje 4: sale la 1era vez y después de renderizar + o -',count)}
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};

//render your react application
ReactDOM.render(<Counter />, document.querySelector("#app"));
