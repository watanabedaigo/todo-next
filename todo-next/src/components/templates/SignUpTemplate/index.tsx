import React from 'react';
import styles from './styles.module.scss';
import SignUp from 'components/modules/SignUp';

const SignUpTemplate: React.FC = () => {
  console.log('SignUpTemplate レンダリング');

  return (
    <div>
      <SignUp label="登録" />
      {/* <Link to={'/signin'}>戻る</Link> */}
    </div>
  );
};

export default SignUpTemplate;
