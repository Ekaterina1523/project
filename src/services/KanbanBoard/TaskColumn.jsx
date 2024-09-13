import React from 'react';
import styles from './KanbanBoard.module.css';
import Task from './Task';
import AddCard from './AddCard';

const TaskColumn = ({ title, tasks }) => {
  return (
    <section className={styles.taskColumn}>
      <h2 className={styles.columnTitle}>{title}</h2>
      {tasks.map((task, index) => (
        <Task key={index} content={task} />
      ))}
      <AddCard />
    </section>
  );
};

export default TaskColumn;