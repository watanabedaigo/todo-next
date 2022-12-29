import { useState } from 'react';
import type { NextPage } from 'next';
import TodoTemplate from 'components/templates/TodoTemplate';
import List from 'components/modules/List';
import axios from 'axios';
import { TodoType } from 'types/TodoType';

// 型エイリアス
type TodoPageProps = {
  todosData: TodoType[];
};

const TodoPage: NextPage<TodoPageProps> = ({ todosData }) => {
  console.log('TodoPage / getServerSideProps');

  // 未完了のみ抽出
  const notDone = todosData.filter((todo) => {
    return todo.done === false;
  });

  // 完了のみ抽出
  const done = todosData.filter((todo) => {
    return todo.done === true;
  });

  // useState
  // 全てのtodoを扱うstate。配列で、中身は型エイリアスTodoを型に持つオブジェクト。初期値は空の配列。
  const [allTodos, setAllTodos] = useState<TodoType[]>([...todosData]);
  // 未完了(done: false)のtodoを扱うstate。配列で、中身は型エイリアスTodoを型に持つオブジェクト。初期値は空の配列。
  const [notDoneTodos, setNotDoneTodos] = useState<TodoType[]>([...notDone]);
  // 未完了(done: true)のtodoを扱うstate。配列で、中身は型エイリアスTodoを型に持つオブジェクト。初期値は空の配列。
  const [doneTodos, setDoneTodos] = useState<TodoType[]>([...done]);

  return (
    <>
      {/* <TodoTemplate /> */}

      <p>TodoPage</p>
      <p>未完了</p>
      <ul>
        {notDoneTodos.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
      <p>完了</p>
      <ul>
        {doneTodos.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const url = 'http://localhost:3000/todos';
  const response = await axios.get(url);
  const todosData: TodoType[] = response.data;

  return { props: { todosData } };
}
export default TodoPage;
