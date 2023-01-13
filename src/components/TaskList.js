import React from "react";
import Task from "./Task"

function TaskList({tasks,onDeleteTask}) {
  const TaskList = tasks.map((task)=>(<Task onDeleteTask={onDeleteTask} key={task.text}text={task.text} category ={task.category}/>))
  return (
    <div className="tasks">
      {TaskList}
    </div>
  );
}

export default TaskList;
