import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { useState } from 'react';

function App() {
  const [value, setvalue] = useState([]);

  let handleClick = () => {
     setvalue([...value,`  Task  ${value.length}`])
  }
  return (
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <div className="card card-yellow">
            <div className="card-body">
              <h1>TO-DO-FORM</h1>
              <form action="javascript:void(0);">
                <button type="button" className="btn btn-success" onClick={handleClick}>ADD</button>
              </form>
              <ul class="nav nav-pills todo-nav">
                <li role="presentation" className="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
                <li role="presentation" className="nav-item active-task"><a href="#" class="nav-link">Active</a></li>
                <li role="presentation" className="nav-item completed-task"><a href="#" class="nav-link">Completed</a></li>
              </ul>
              
              <div className="todo-list">
               {
                 value.map((items) =>  <Todo data ={items}></Todo>)
               }
            

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
