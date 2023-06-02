import React from 'react';
import styles from "../../src/styles/components/props/btn.module.scss";


interface Props {
    text: string;
}

const Btn: React.FC<Props> = ({ 
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

export default Btn;