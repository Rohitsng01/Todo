import { useState } from 'react';
import './App.css';

function App() {
    // states 
  const [title, setTitle] = useState("");
  const [disc , setDisc] = useState("");
  const [task, setTask] = useState([]);
  const [add , setAdd] = useState(false)
  const [complete , setComplete] = useState([])

  const submitHandler = () => {
      setTask([...task,{title,disc}])
      setTitle("");
      setDisc("");
  }

  const deleteHandler = (i) => {
      let remove = [...task];
      remove.splice(i,1)
      setTask(remove)
  }
  
  const completeHandler = (i) => {
      let add = task[i]
      setComplete([...complete,add])
      deleteHandler(i)
  }
  const updateDelete = (i) => {
      let dlt = [...complete]
        dlt.splice(i,1)
         setComplete(dlt)
  }

  let noTask = <h2>No task Available</h2>
  if(task.length > 0 && !add){
    noTask = task.map((e,i)=> (
      <div key={i}>
        <h2>{e.title}</h2>
        <h4>{e.disc}</h4>
        <button className='icon' onClick={() => deleteHandler(i)} >Delete</button>
        <button className='icon' onClick={() => completeHandler(i)} >Complete</button>
      </div>
    ))
  }else if(add && complete.length > 0){
    noTask= complete.map((e,i)=>(
      <div>
        <h2>{e.title}</h2>
        <h4>{e.disc}</h4>
        <p>{e.complete}</p>
        <button className='icon' onClick={() => updateDelete(i)}>Delete</button>
      </div>
    ))

  }

  return (
    <div className="App">
          <h1>My Todo</h1>
          <div className='todo-wrapper'>
            <div className='todo-input'>
              <div className='todo-input-item'>
                <label>Title</label>
                <input
                 type='text' 
                 placeholder='Enter Your Title'
                 value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  /> 
              </div>
              <div className='todo-input-item'>
                <label>Discription</label>
                <input type='text'
                 placeholder='Enter Your Discription'
                 value={disc}
                 onChange={(e) => setDisc(e.target.value)}
                 />
              </div>
              <div className='todo-input-item'>
                <button type='submit' onClick={submitHandler} className='primaryBtn'>Add</button>
              </div>
            </div>

              <div className='btn-area'>
                <button className={` icon ${!add && 'active' }`} onClick={() => setAdd(false)}>Todo</button>
                <button className={` icon ${!add === true && 'active' }`} onClick={() => setAdd(true)} >Completed</button>
              </div>
              <div>{noTask}</div>

               </div>

    </div>
  );
}

export default App;
