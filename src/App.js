import "./App.css";
import { useState } from "react";
import Form from './Form';
import Filter from "./Filter";
import Tasks from "./Tasks";

function App() {
  const [filter, setFilter] = useState("all");
  const [newId, setNewId] = useState(5);
  
  //instead of maintaining tasks in tasks component, we are placing it in parent component, so that both app and tasks component can use
  const [tasks, setTasks] = useState([
   {
      id:1,
      name:"Create theme",
      done:false
      },
      {
          id:2,
          name:"Work on wordpress",
          done:false
          },
          {
              id:3,
              name:"Organize office main department",
              done:false
              },
              {
                  id:4,
                  name:"Error solve in HTML template",
                  done:false
                  },
      ]);
//creating new array for user enetered task
const formSubmit = (value) => {
  const newTask = {
    id: newId,
    name: value,
    done: false
  };
  setTasks([...tasks, newTask]);
  setNewId(newId + 1);
}

//to update checkbox
const onCheckHandler = (id, checked) => {
  setTasks(tasks.map(item => {
    return item.id === id ? {...item, done: checked} : item;
  }));
};


const onFilterChange = (newValue) => {
  setFilter(newValue);
}

//code to check tasks which are completed and yet to be completed
const filterTasks = () => {
  if(filter === 'active') {
    return tasks.filter(item => item.done === false);
  } else if(filter === 'completed') {
    return tasks.filter(item => item.done === true);
  }
  return tasks;
}

//delete task
const deleteHandler = (id) => {
  const filterValues = tasks.filter((item) => {
    return item.id !== id;
  });
  setTasks(filterValues);
}

return (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card card-white">
          <div className="card-body">
            <Form onSubmit={formSubmit} />
            <Filter onFilterChange={onFilterChange}/>
            <Tasks tasks={filterTasks()} onCheckHandler={onCheckHandler} deleteHandler={deleteHandler} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;

