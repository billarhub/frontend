import React from "react";
import Image from "next/image";

import styles from '../../../styles/Home.module.css'

const Maintenance = () => {
  return (
    <div className={styles.main}>
      <Image
        src='/billarhub.jpeg'
        alt='billarhub logo '
        width={818}
        height={210}
      />
      <h1>Website under construction</h1>
    </div>
  );
};

export default Maintenance;
