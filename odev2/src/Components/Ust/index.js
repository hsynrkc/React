import { isEditable } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4} from 'uuid'


function Ust() {
    const [form, setForm] = useState('')
    const [list, setList] = useState([])
    const [toggle, setToggle] = useState(false);
    const [todos, setTodos] = useState([...list]);
    const [page, setPage] = useState("All");
    const [completed, setCompleted] = useState(
        list.filter((item) => item.isCompleted === true)
      );
    const [active, setActive] = useState(
        list.filter((item) => item.isCompleted === false)
      );
   
      useEffect(() => {
        setActive(list.filter((item) => item.isCompleted === false));
        setCompleted(list.filter((item) => item.isCompleted === true));
      }, [list]);
    const addTodo = (e) => {
        e.preventDefault()
         if (form === ''){
            return false;
         }
        //console.log(form)
        setList(prevList => [...prevList, {id: uuidv4(), form: form, isEditable: false, isCompleted: false}])
        setForm('')
    }
    useEffect(()=>console.log(list), [list])
    const completeTodo = (id) =>{
        setList(prevList => prevList.map(item => item.id === id ? {...item, isCompleted : !item.isCompleted} : item))
    }
    const onToggle = () => {
        const newtg = list.map((item) => {
          if (toggle === false) {
            return { ...item, isCompleted: true };
          } else {
            return { ...item, isCompleted: false };
          }
        });
        setList(newtg);
        if (page === "All") {
          setTodos(newtg);
        } else if (page === "Active") {
          setTodos((!toggle && []) || newtg);
        } else if (page === "Completed") {
          setTodos((toggle && []) || newtg);
        }
    
        setToggle(!toggle);
      };
      const deleteTodo = (id) => {
        setList(prevList => prevList.filter(item => item.id!==id))
      }
      const onAll = () => {
        setPage("All");
        setTodos(list);
      };
      const onCompleted = () => {
        setPage("Completed");
        setTodos(completed);
      };
    
      const onActive = () => {
        setPage("Active");
        setTodos(active);
      };
      const clearAll = () => {
        const filtered = list.filter((item) => item.isCompleted === false);
        setTodos(filtered);
        setList(filtered);
      };
    
  return (
    <div>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={addTodo}>
                    <input className="new-todo" 
                    placeholder="What needs to be done?" 
                    autoFocus
                    value={form}
                    onChange={(e)=> setForm(e.target.value)}
                    
                     />
                </form>
            </header>
	
            <section className="main">
                <input className="toggle-all" type="checkbox" onChange={onToggle} checked={toggle} />
                <label htmlFor="toggle-all" onClick={onToggle} >
                    Mark all as complete
                </label>
                
                
                <ul className="todo-list">
                            <div className="view" >
                                    {list.map((item) =>
                                        <li key={item.id} className={item.isCompleted ? "completed" : ""}>
                                            <input 
                                                className="toggle" 
                                                type="checkbox" 
                                                value={item.isCompleted} 
                                                onChange={()=>completeTodo(item.id)} />
                                            <label>{item.form}</label>
                                            <button 
                                                className="destroy" 
                                                style={{cursor:'pointer'}}
                                                onClick={() => deleteTodo(item.id)}
                                                >

                                            </button>
                                        </li>)}
                                </div>
                    </ul>
            </section>

            <footer className="footer">
                <span className="todo-count">
                    <strong>{active.length}</strong>
                     items left
                </span>

                <ul className="filters">
                    <li>
                        <a  onClick={onAll}
                            href="#/"
                            className={(page === "All" && "selected") || ""}>All
                        </a>
                    </li>
                    <li>
                        <a onClick={onActive}
                            href="#/"
                            className={(page === "Active" && "selected") || ""}>Active
                        </a>
                    </li>
                    <li>
                        <a onClick={onCompleted}
                            href="#/"
                            className={(page === "Completed" && "selected") || ""}>Completed
                        </a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={clearAll}>
                    {(Boolean(completed.length) && "Clear completed") || ""}
                </button>
            </footer>
        </section>
    </div>
  )
}

export default Ust