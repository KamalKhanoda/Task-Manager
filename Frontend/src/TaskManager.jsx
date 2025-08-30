import "./Component.css"
import { FaPlus, FaSearch, FaPencilAlt, FaCheck, FaTrash, FaLeaf, FaRegObjectGroup } from "react-icons/fa";
import {ToastContainer} from 'react-toastify'
import { useEffect, useState } from "react";
import { addTask , getTasks, deleteTask, updateTask} from "./apiCall";
import { notify } from "./utils";

function TaskManager() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [copyTask , setCopyTask] = useState([]);
  const [updatedTask, setUpdatedTask] = useState(null)

  function handleTask(){
    if(updatedTask && inputValue){
      const obj = {
        taskName : inputValue,
        isDone : updatedTask.isDone,
        _id : updatedTask._id
      }
      handleEditTask(obj);
      setUpdatedTask(null)
      setInputValue("")
    }
    else if(updatedTask === null){
      handleCreateTask();
    }
  }

useEffect(() => {
  if(updatedTask){
    setInputValue(updatedTask.taskName)
  }
}, [updatedTask])


  function handleCreateTask(){
    const obj = {
      "taskName": inputValue,
      isDone: false
    }
    try{
      const {success , message} = addTask(obj);
      if(success){
        notify(message, "success")
      }
      else{
        notify(message, "error")
      }
    }catch(err){
      console.log(err)
    }
    setInputValue("")
    fetchAllTasks();
  }

  async function handleEditTask(item){
    const {_id, isDone, taskName} =  item;
    const obj = {
      taskName,
      isDone : isDone,
    }
    try{
      const {success , message} = await updateTask(_id , obj);
      if(success){
        notify(message, "success")
      }
      else{
        notify(message, "error")
      }
    }catch(err){
      console.log(err)
    }

    fetchAllTasks();
  
  }

  const fetchAllTasks = async() =>{
     try{
      const {data} = await getTasks();
      setTasks(data)
      setCopyTask(data)
    }
    catch(err){
      console.log(err)
    }
    
  }

  useEffect(() =>{
    fetchAllTasks();
  }, [])

  async function handleDeleteTask(id){
    try{
      const {success , message} = await deleteTask(id);
      if(success){
        notify(message, "success")
      }
      else{
        notify(message, "error")
      }
    }catch(err){
      console.log(err)
    }

    fetchAllTasks();
  }

  async function handleDoneTask(item){
    const {_id, isDone, taskName} =  item;
    const obj = {
      taskName,
      isDone : !isDone
    }
    try{
      const {success , message} = await updateTask(item._id, obj);
      if(success){
        notify(message, "success")
      }
      else{
        notify(message, "error")
      }
    }catch(err){
      console.log(err)
    }

    fetchAllTasks();
  }


  function handleSearch(e){
    const task = e.target.value.toLowerCase();
    const oldTasks = [...copyTask]
    const matched = oldTasks.filter((item) => item.taskName.toLowerCase().includes(task))
    setTasks(matched);
  }

  return (
    <>
    <div className="container">
      <h1>Task Manager App</h1>
      <div className="inputfields">
        <div className="input-section">
            <input type="text"
             onChange={(e) => setInputValue(e.target.value)}
             value={inputValue}
             placeholder="Add a new task" />
            <button onClick={handleTask}><FaPlus/></button>
        </div>
        <div className="search-section">
            <input 
            onChange={handleSearch}
            type="text" placeholder="Search an existing task"/>
            <button><FaSearch/></button>
        </div>

      </div>
      {
        tasks.map((item)=>(
              <div key={item._id} className="tasks">
                   <span className={item.isDone?"strike":""}>{item.taskName}</span>
                    <div className="task-controls">
                    <button 
                    onClick={() => { handleDoneTask(item) }}
                    className={item.isDone?"checked" : "check"}><FaCheck/></button>

                    <button 
                    onClick={() => {
                      setUpdatedTask(item)
                    }}
                    className="edit"><FaPencilAlt/></button>

                    <button 
                    onClick={() =>{
                      handleDeleteTask(item._id)
                    }}
                    className="delete"><FaTrash/></button>
              </div>
        </div>
        ))
      }

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false}/>
    </div>
    </>
  )
}

export default TaskManager
