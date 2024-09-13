import React from 'react';
import styles from './KanbanBoard.module.css';

const Footer = ({ activeTasks, finishedTasks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.taskStats}>
        <p>Active tasks: {activeTasks}</p>
        <p>Finished tasks: {finishedTasks}</p>
      </div>
      <p>Kanban board by &lt;NAME&gt;, {currentYear}</p>
    </footer>
  );
};

export default Footer;