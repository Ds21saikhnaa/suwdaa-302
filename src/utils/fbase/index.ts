import { addDoc, collection } from 'firebase/firestore';

import { db } from '@/config';

export enum QuestionType {
  JUST_QUESTION = 'JUST_QUESTION',
  QUESTION = 'QUESTION',
}

export enum SurpriseType {
  SPECIAL = 'SPECIAL',
  NORMAL = 'NORMAL',
}

export const AddQuestion = async (text: string, type: QuestionType = QuestionType.JUST_QUESTION) => {
  const date = new Date().toISOString();
  await addDoc(collection(db, 'question'), {
    type: type,
    isUsed: false,
    answer: '',
    description: text,
    createdAt: date,
  });
};

export const AddPoll = async () => {
  await addDoc(collection(db, 'ideas'), {
    idea: 'onoodor tegeh u',
    options: [
      {
        text: 'tegey',
        select: false,
      },
      {
        text: 'ugui',
        select: false,
      },
    ],
  });
};

export const AddSurprise = async (
  openDate: Date,
  type: SurpriseType = SurpriseType.NORMAL,
  text: string,
  warning: string,
  options: any,
) => {
  await addDoc(collection(db, 'surprise'), {
    type: type,
    openDate: openDate,
    isUsed: false,
    text: text,
    warning: warning,
    options: options || [
      {
        text: 'ok',
        select: false,
      },
      {
        text: 'no',
        select: false,
      },
    ],
  });
};
