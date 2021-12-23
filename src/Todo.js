import "./Todo.css"
import { useState } from "react";

export default function Todo (props) {

 
       const [visible,setvisible] = useState(true);
    let handleDelete = () => {
           setvisible(false)
    }
    {
        if (visible === true) {
            return <div class="todo-item">
           
            <span>{props.data}</span>
            <button type="button" className="btn btn-danger btn-sm" onClick={handleDelete} style={{marginLeft:"850px"}}>Delete</button>
            <a href="javascript:void(0);" class="float-right remove-todo-item"><i className="icon-close"></i></a>
          </div>
        }else{
            return <div></div>
        }
    }
} 

