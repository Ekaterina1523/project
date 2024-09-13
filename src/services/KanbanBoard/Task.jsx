import React from 'react';
import styles from './KanbanBoard.module.css';

const Task = ({ content }) => {
  return (
    <article className={styles.task}>
      <p>{content}</p>
    </article>
  );
};

export default Task;