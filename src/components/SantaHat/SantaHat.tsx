import React, { useEffect, useState } from 'react';
import { getRandomInt } from '@mdl/helpers';
import SantaImgUrl from '@src/images/santa-hat.png';
import styles from './santaHat.css';
console.log(styles);

const SantaHat = () => {
  const minTimeUntilFall = 5000;
  const maxTimeUntilFall = 10000;
  const [isSantaHatDressed, setIsSantaHatDressed] = useState(false);

  useEffect(() => {
    onSantaHatClick();
  }, []);

  const onSantaHatClick = (): void => {
    if (!isSantaHatDressed) {
      setIsSantaHatDressed(true);
      setTimeout(() => {
        setIsSantaHatDressed(false);
      }, getRandomInt(minTimeUntilFall, maxTimeUntilFall));
    }
  };

  return (
    <img
      src={SantaImgUrl}
      className={`${styles.santaImg} ${isSantaHatDressed ? styles.santaImgDressed : styles.santaImgFell}`}
      onClick={onSantaHatClick}
    />
  )
};

export default SantaHat;
