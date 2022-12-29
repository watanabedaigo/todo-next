import React from 'react';
import styles from './styles.module.scss';
import { useTodo } from 'hooks/useTodo';
import Search from 'components/modules/Search';
import List from 'components/modules/List';
import Link from 'next/link';

const TodoTemplate: React.FC = React.memo(() => {
  console.log('TodoTemplate レンダリング');

  // カスタムフックからロジックを受け取る
  const {
    notDoneTodos,
    doneTodos,
    updateDone,
    removeTodo,
    inputSearchRef,
    getInputValue,
    searchTodo,
    resetTodo,
  } = useTodo();

  return (
    <div>
      <p>
        <Link href="/create">追加</Link>
      </p>
      <Search
        inputSearchRef={inputSearchRef}
        searchTodo={searchTodo}
        resetTodo={resetTodo}
        getInputValue={getInputValue}
      />
      <List
        notDoneTodos={notDoneTodos}
        doneTodos={doneTodos}
        updateDone={updateDone}
        removeTodo={removeTodo}
      />
    </div>
  );
});

export default TodoTemplate;
