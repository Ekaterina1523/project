import React from 'react';
import styles from './KanbanBoard.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.boardTitle}>Awesome Kanban Board</h1>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a74de761a7dd435d023f0a8711c888384a5a5db679db409b2ca1d439e90acbb?placeholderIfAbsent=true&apiKey=8b81e70efc69426bb83c9d3a6b1cb252" alt="User avatar" className={styles.avatar} />
    </header>
  );
};

export default Header;