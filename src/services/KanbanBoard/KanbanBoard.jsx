import React from 'react';
import styles from './KanbanBoard.module.css';
import Header from './Header';
import TaskColumn from './TaskColumn';
import Footer from './Footer';

const KanbanBoard = () => {
  const columns = [
    { title: 'Backlog', tasks: ['Login page – performance issues', 'Sprint bugfix'] },
    { title: 'Ready', tasks: ['Shop page – performance issues', 'Checkout bugfix', 'Shop bug1', 'Shop bug2', 'Shop bug3', 'Shop bug4', 'Shop bug5', 'Shop bug6', 'Shop page – performance issues'] },
    { title: 'In Progress', tasks: ['User page – performance issues', 'Auth bugfix'] },
    { title: 'Finished', tasks: ['Main page – performance issues', 'Main page bugfix'] }
  ];

  return (
    <div className={styles.kanbanBoard}>
      <Header />
      <main className={styles.boardContent}>
        <div className={styles.columnContainer}>
          {columns.map((column, index) => (
            <TaskColumn key={index} title={column.title} tasks={column.tasks} />
          ))}
        </div>
      </main>
      <Footer activeTasks={5} finishedTasks={2} />
    </div>
  );
};

export default KanbanBoard;