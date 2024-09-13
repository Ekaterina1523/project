import React from 'react';
import styles from './KanbanBoard.module.css';

const AddCard = () => {
  return (
    <button className={styles.addCard}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40285cb13e9c3a658b84856f228ff6926326d66ca1b34a6346d2ca11e1a4bf97?placeholderIfAbsent=true&apiKey=8b81e70efc69426bb83c9d3a6b1cb252" alt="" className={styles.addIcon} />
      <span>Add card</span>
    </button>
  );
};

export default AddCard;