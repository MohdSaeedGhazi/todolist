import './App.css';
import {useState} from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const makeTask = (event) => {
    setCurrentTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      name : currentTask,
      id : taskList.length === 0 ? 1 : taskList[taskList.length-1].id + 1,
      complete : false,
    }
    setTaskList( [...taskList, task] )
  }

  const removeTask = (taskid) => {
    setTaskList( taskList.filter( (task) => task.id!==taskid ) );
  }

  const update = (taskid) => {
    const newTaskList =
    taskList.map( (task)=>{
      if(taskid===task.id) return {...task, complete: !task.complete}
      else return task;
    } );

    setTaskList(newTaskList);
  }

  return (
    <div className="App">

      <div className='addingsect'>
        <input onChange={ makeTask }/>
        <button onClick={ addTask }>Add</button>
      </div>

      <div className='list'>
        {taskList.map ( (task) => {
          return (
            <div>
              <h3 style={ {backgroundColor: task.complete?"green":"white"} }>
                {task.name} </h3>

              <button onClick={ ()=>removeTask(task.id) }>X</button>
              
              <button onClick={()=>update(task.id) }>complete/incomplete</button>
            </div>
          );
        } ) }
      </div> 

    </div>
  );
}

export default App;
