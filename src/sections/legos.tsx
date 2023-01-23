import Image from 'next/image';
import logo from '@/images/gum-xl.svg';
import legosImage from '@/images/legos.svg';

import styles from '@/styles/Home.module.scss';
function Legos() {
  return (
    <section className={styles.legosSection}>
      <div className={styles.legoContent}>
        <Image src={logo} alt="" />
        <div className={styles.legoText}>
          <p className="text weight-700 size-48 gray-800 nm mt-1">{"Social Legos for Solana"}</p>
          <p className="text weight-400 size-24 gray-500">{"Gum unbundles social apps into lego pieces for developers to build novel experiences with on Solana"}</p>
        </div>
        <div className={styles.legoImage}>
          <Image src={legosImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export { Legos }