import React from "react";
//code to check the checkbox ,if task is completed
export default function Task({name, done, id, onCheckHandler, deleteHandler}) {
  return (
  
    <div className={"todo-item " + (done ? 'complete' : '')}>
      <div className="checker">
        <span className="">
          <input type="checkbox" checked={done} onChange={e => onCheckHandler(id, e.target.checked)} />
        </span>
      </div>
      <span>{name}</span>
      <button style={{float: 'right'}} onClick={()=> deleteHandler(id)} className="btn btn-danger">X</button>
    </div>
  );
}
