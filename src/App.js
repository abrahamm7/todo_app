import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([
    {"id": 1, "title": "first task", "state": false},
    {"id": 2, "title": "second task", "state": false},
  ])

  const [newTask, setNewTask] = useState('');
  //const [deletedTask, setRemoveTask] = useState('');

  const addTask = () => {
    if (newTask) {
      let id = toDoList.length + 1;
      let newRecord = {id: id, title: newTask, state: false};
      setToDoList([...toDoList, newRecord]);
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    if (id) {
      const tempTaskList = [...toDoList];

      tempTaskList.splice(id, 1);

      setToDoList(tempTaskList);
    }
  }

  const updateTask = (id, editedTask) => {
    
  }

  return (
    <div className="container App">
      <h2>To Do List App</h2>
      {toDoList.length == 0 ? 'No task' : ''}

      <div className='row'>
        <div className='col'>
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Add new task'></input>
          <button onClick={addTask} className='btn btn-success'>Add task</button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Key</th>
            <th scope="col">Task Name</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {toDoList.map((task, id) => {
              return(
                <React.Fragment key={task.id}>
                  <tr>
                    <th scope="row">{task.id}</th>
                    <td>{task.title}</td>
                    <td>{task.state == false ? 'Not Completed' : 'Complete'}</td>
                    <td>
                      <div className='row'>
                          <div className='col-2'>
                              <button className='btn btn-danger'>Edit</button>
                          </div>
                          <div className='col-3'>
                            <button onClick={() => deleteTask(id)} className='btn btn-primary'>Delete</button>
                          </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
        </tbody>
      </table>
      </div>
    );
}

export default App;
