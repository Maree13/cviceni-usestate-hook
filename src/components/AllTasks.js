import './AllTasks.css';
import data from '../data';
import { useState } from 'react';

const AllTasks = () => {
  const [myTasks, setMyTasks] = useState(data);

  const taskHandler = (idecko) => {
    const filteredTasks = myTasks.filter((oneTask) => {
      return oneTask.id !== idecko;
    });

    setMyTasks(filteredTasks);
  };

  const allDeleteHandler = () => {
    setMyTasks([]);
  };

  return (
    <div className="tasks-box">
      <div className="all-tasks">
        {myTasks.map((oneTask) => {
          const { id, name } = oneTask;
          return (
            <div key={id} className="one-task">
              <h4>{name}</h4>
              <button onClick={() => taskHandler(id)}>Vymazat</button>
            </div>
          );
        })}
      </div>

      <div className="delete-button">
        <button onClick={allDeleteHandler}>Vymazat všechny úkoly</button>
      </div>
    </div>
  );
};

export default AllTasks;
