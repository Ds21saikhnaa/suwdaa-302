'use client';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { collection, doc, getDocs, limit, query, updateDoc, where } from 'firebase/firestore';

import { ContainerWrap, OptionItem, RevealCircle, SecretCartContainer } from '@/components/GiftCart/page.style';
import { db } from '@/config';
import { SurpriseType } from '@/utils/fbase';

import CountDown, { CountDownCompProps } from '../CountDown';

export function calcSaleExpire({ end }: { end?: string }) {
  const now = new Date();
  if (dayjs(end).isAfter(now)) return true;
  return false;
}

export const GiftCart = () => {
  // const [surprises, setSurprises] = useState<any[]>([]);
  const [special, setSpecial] = useState<any | null>(null);
  const [normal, setNormal] = useState<any | null>(null);
  const [sLoading, setSLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<any | null>(null);

  const fetchSurprisesAsync = async () => {
    setLoading(true);
    setSLoading(true);
    try {
      const collectionRef = collection(db, 'surprise');
      // const usedQuery = query(collectionRef, where('isUsed', '==', true));
      const normalQuery = query(collectionRef, where('isUsed', '==', false), where('type', '==', SurpriseType.NORMAL), limit(1));
      const specialQuery = query(
        collectionRef,
        where('isUsed', '==', false),
        where('type', '==', SurpriseType.SPECIAL),
        limit(1),
      );

      const [normalSnap, specialSnap] = await Promise.all([getDocs(normalQuery), getDocs(specialQuery)]);

      if (!normalSnap.empty) {
        const normalDoc = normalSnap.docs[0];
        setNormal({ id: normalDoc.id, ...normalDoc.data() });
      } else {
        console.log('No normal surprises available.');
      }
      // if (!normalSnap.empty) {
      //   const normalData = normalSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      //   setSurprises(normalData);
      // } else {
      //   console.log('No normal surprises available.');
      // }
      if (!specialSnap.empty) {
        const specialDoc = specialSnap.docs[0];
        setSpecial({ id: specialDoc.id, ...specialDoc.data() });
      } else {
        console.log('No special surprises available.');
      }
    } catch (error) {
      console.error('Error fetching surprises:', error);
    } finally {
      setLoading(false);
      setSLoading(false);
    }
  };

  useEffect(() => {
    fetchSurprisesAsync();
  }, []);

  let isSuper = special
    ? calcSaleExpire({ end: special?.openDate?.seconds ? new Date(special.openDate.seconds * 1000).toISOString() : undefined })
    : false;
  let isNormal = normal
    ? calcSaleExpire({ end: normal?.openDate?.seconds ? new Date(normal.openDate.seconds * 1000).toISOString() : undefined })
    : false;

  const handleToggle = (type: SurpriseType) => {
    if (type === SurpriseType.SPECIAL) {
      isSuper = special
        ? calcSaleExpire({
            end: special?.openDate?.seconds ? new Date(special.openDate.seconds * 1000).toISOString() : undefined,
          })
        : false;
      if (isSuper) {
        alert('Хайрт минь цаг нь арай болоогүй байна шүү😊');
        return;
      } else {
        if (special.isUsed) {
          alert('Аль хэдийн сонгосон байна 😊');
          return;
        }
        setSelect(special);
      }
    } else {
      isNormal = normal
        ? calcSaleExpire({ end: normal?.openDate?.seconds ? new Date(normal.openDate.seconds * 1000).toISOString() : undefined })
        : false;
      if (isNormal) {
        alert('Хайрт минь цаг нь арай болоогүй байна шүү😊');
        return;
      } else {
        if (normal.isUsed) {
          alert('Аль хэдийн сонгосон байна 😊');
          return;
        }
        setSelect(normal);
      }
    }
    setIsOpen(true); // Open modal on button click
  };

  const closeModal = () => {
    setIsOpen(false); // Close modal
  };

  return (
    <ContainerWrap>
      {isOpen && <Modal onClose={closeModal}>{select ? <SecretCart data={select} /> : <h2>Уучлаарай. Хоосон байна</h2>}</Modal>}
      <span className="countdown-title">{special?.text}</span>
      {!sLoading && isSuper && (
        <CountDown Comp={(props) => <Counter {...props} />} date={new Date(special.openDate.seconds * 1000).toISOString()} />
      )}
      {special && (
        <button className="toggle-btn" onClick={() => handleToggle(SurpriseType.SPECIAL)} disabled={loading || sLoading}>
          {loading || sLoading ? 'Түр хүлээнэ үү...' : 'Нээх'}
        </button>
      )}
      <span className="countdown-title">{normal?.text}</span>
      {!sLoading && isNormal && (
        <CountDown Comp={(props) => <Counter {...props} />} date={new Date(normal.openDate.seconds * 1000).toISOString()} />
      )}
      {normal && (
        <button className="toggle-btn" onClick={() => handleToggle(SurpriseType.NORMAL)} disabled={loading || sLoading}>
          {loading || sLoading ? 'Түр хүлээнэ үү...' : 'Нээх'}
        </button>
      )}
    </ContainerWrap>
  );
};

function Counter({ m, h, d, s, leadingZero }: CountDownCompProps) {
  return (
    <div className="countdown">
      {/*<span className="countdown-title">{specialText}</span>*/}
      <div className="countdown-timer">
        {d > 0 && (
          <>
            <div className="time-block">
              <span>{d}</span>
              <span className="time-label">өдөр</span>
            </div>
            <span>:</span>
          </>
        )}
        {(d > 0 || h > 0) && (
          <>
            <div className="time-block">
              <span>{leadingZero(h)}</span>
              <span className="time-label">цаг</span>
            </div>
            <span>:</span>
          </>
        )}
        {(d > 0 || h > 0 || m > 0) && (
          <>
            <div className="time-block">
              <span>{leadingZero(m)}</span>
              <span className="time-label">минут</span>
            </div>
            <span>:</span>
          </>
        )}
        <div className="time-block">
          <span>{leadingZero(s)}</span>
          <span className="time-label">секунд</span>
        </div>
      </div>
    </div>
  );
}

const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      {children}
      <button onClick={onClose} className="close-btn">
        ❎
      </button>
    </div>
  </div>
);

export const SecretCart = ({ data }: { data: any }) => {
  const [isRevealed, setIsRevealed] = useState('');

  const handleReveal = async (text: string) => {
    if (isRevealed.length > 0) {
      return;
    }
    setIsRevealed(text);
    data.options.map((el: any) => {
      if (el.text === text) {
        el.select = true;
      }
    });
    try {
      const docRef = doc(db, 'surprise', data.id);
      await updateDoc(docRef, {
        isUsed: true,
        options: data.options,
      });
      alert(`You selected: ${text}`);
      window.location.reload();
    } catch (error) {
      console.error('Error updating select:', error);
      alert('Failed to submit the select.');
    }
  };

  return (
    <SecretCartContainer>
      <h3>{data.warning}</h3>
      {data.options.map((option: any, index: number) => (
        <OptionItem key={index} onClick={() => handleReveal(option.text)}>
          {option.text === isRevealed ? (
            <>
              <RevealCircle revealed="#4caf50">🔓</RevealCircle>
              <span>{option.text}</span>
            </>
          ) : (
            <>
              <RevealCircle revealed="#f44336">🔒</RevealCircle>
            </>
          )}
        </OptionItem>
      ))}
    </SecretCartContainer>
  );
};
