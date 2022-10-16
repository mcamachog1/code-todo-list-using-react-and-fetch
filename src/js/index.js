//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";
import ListGroup from 'react-bootstrap/ListGroup';

const Home = () => {

  const [inputValue, setInputValue ] = useState('');
  const [tasks, setTasks ] = useState([]);

  const HandleAdd = (e) => {
    if (e.key == "Enter" || e.type =="click") {
      let newTask = {"label":inputValue, "done":false}
      if (newTask.label.length>0) {
        console.log(newTask)
        setToDo([...tasks, newTask])
        setTasks([...tasks, newTask])
        setInputValue("")
      }
      document.getElementById("inputValue").focus();
    }
  } 
  const handleDelete = (index) => {
      let newTasks=[]
      for (const i in tasks) {
        if (i != index) {
          newTasks.push(tasks[i])
        }
        
      }
      setToDo(newTasks)
      setTasks(newTasks)
      document.getElementById("inputValue").focus();
  }
     
  useEffect(() => {
		const getToDo = async () =>{
			let response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/ehiber",{
				headers:{
					"Content-Type":"application/json"
				},
				method:"GET",
			})
			let data = await response.json()
			setTasks(data)
		
	}
	getToDo()
	}, [])  

  const setToDo = async (tasklist) =>{
    let response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/ehiber",{
      headers:{
        "Content-Type":"application/json"
      },
      method:"PUT",
      body: JSON.stringify(tasklist)
    })
    let data = await response.json()
    console.log(data)
  }

   
  return <div className="container" style={{width:'60%'}}>
    
    <div className="row justify-content-center"><p className="p-0 m-0 myfonttodo">To Do</p><p className="p-0 m-0 myfontlist">LIST</p>
      <div className="myline mb-2"></div>
    </div>
    <div className="row d-flex justify-content-center">
      <input className="col-7 me-2" id="inputValue"
          value={inputValue} 
          onChange= {(event)=>setInputValue(event.target.value)} 
          type="text" 
          onKeyDown={HandleAdd}>
      </input>

      <button className="col-4 mybutton btn btn-secondary" onClick={HandleAdd}>Añadir</button>
      <ListGroup>
      {
        tasks.map((task,index)=>{
          return <ListGroup.Item 
            key={index} 
            className=" d-flex  ms-4 border-0 text-secondary">

            <i className="fa-solid fa-circle me-2"></i>
            {task.label}
            {/* <i onClick={() => handleDelete(index)}  className="fa-solid fa-circle me-2"></i> */}
            <button onClick={() => handleDelete(index)} className="ms-auto btn btn-secondary mybutton">Borrar</button>
          
          </ListGroup.Item>
        }
      )}
      </ListGroup>
      <div className="myline mb-2 mt-2"></div>
      </div>
    <div className="row d-flex justify-content-center myfontfooter fw-normal">Hecho en el curso de FrontEnd Development de 4Geeks</div>
               
    
  </div>;
};

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
