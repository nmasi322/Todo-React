import React, {useState} from 'react'
import Item from './Item';

const Todo = () => {
    const [input, setInput] = useState("")
    const [todos, setToDo] = useState([]);
    function handleToDo(event) {
        const newValue = event.target.value
        setInput(newValue)
    }
    function addToDo(event) {
        setToDo((prevTodos)=>{
            return [
                ...prevTodos, input
            ]
        })
        setInput("")
        event.preventDefault()
    }
    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="form">
            <input onChange={handleToDo} value={input} type="text" />
            <button onClick={addToDo}>
              <span>Add</span>
            </button>
          </div>
          <div>
          <ul>
            {
                todos.map(item=> {
                        return <Item text={item} />
                    })
            }
          </ul>
          </div>
        </div>
    );
}

export default Todo