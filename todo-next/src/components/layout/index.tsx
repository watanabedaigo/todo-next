import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import Header from 'components/modules/Header';

// 型エイリアス
// Layoutの型
type AddProps = {
  children: ReactNode;
};

// メモ化して。親コンポーネントレンダリングによる再レンダリング防止
const Layout: React.FC<AddProps> = React.memo((props) => {
  console.log('Layout レンダリング');

  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});

export default Layout;
