import React from 'react';
import styles from "../../src/styles/components/props/btns.module.scss";


interface Props {
    text: string;
}

const Btns: React.FC<Props> = ({ 
    text
  }) => { 
  return (
    <>
      <div className={styles.Btn}>
          <button className={styles.text}>{text}</button>
      </div>
    </>
  );
}

export default Btns;