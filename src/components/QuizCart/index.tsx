'use client';

import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs, limit, query, startAfter, updateDoc, where } from 'firebase/firestore';

import { Loading } from '@/components';
import { Button } from '@/components/ui/button';
import { db } from '@/config';
import { QuestionType } from '@/utils/fbase';

import { ContainerWrap } from './page.style';

export const QuizCart = () => {
  const [quiz, setQuiz] = useState<any | null>(null); // Improve typing for quiz state
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [end, setEnd] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // New loading state for button disable
  const [answer, setAnswer] = useState<string>(''); // State for the input value

  const fetchQuiz = async () => {
    setLoading(true); // Start loading when fetch starts
    const collectionRef = collection(db, 'question');

    let q;
    if (lastVisible) {
      q = query(collectionRef, where('isUsed', '==', false), startAfter(lastVisible), limit(1));
    } else {
      q = query(collectionRef, where('isUsed', '==', false), limit(1));
    }

    try {
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const docs = snapshot.docs;
        const docData = docs[0].data();
        setQuiz({ id: docs[0].id, ...docData }); // Store the Firestore document ID properly
        setLastVisible(docs[docs.length - 1]);
      } else {
        setEnd(true); // No more quizzes available
        if (!loading) {
          alert('Хөөрхөнүүд минь асуулт дууссан байна.');
        }
      }
    } catch (error) {
      console.error('Error fetching quiz:', error);
    } finally {
      setLoading(false); // Stop loading when fetch finishes
    }
  };

  const answerQuiz = async () => {
    if (!quiz || !answer.trim()) {
      alert('Please provide an answer!');
      return;
    }

    try {
      const docRef = doc(db, 'question', quiz.id);
      await updateDoc(docRef, {
        isUsed: true,
        answer: answer.trim(), // Update with the user's answer
      });
      setQuiz(null); // Clear current quiz
      setAnswer(''); // Clear input
      fetchQuiz(); // Fetch the next quiz
    } catch (error) {
      console.error('Error updating quiz:', error);
      alert('Failed to submit the answer.');
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <ContainerWrap>
      <div className="text-block">
        {loading ? (
          <Loading />
        ) : quiz && !end ? (
          <div>
            <h1 className={`quiz-title ${quiz?.type === QuestionType.QUESTION ? 'question' : 'just-question'}`}>
              {quiz?.type === QuestionType.QUESTION ? 'доор бичээд хариулаарай' : 'зүгээр л асуулт '}
            </h1>
            <div className="item">{quiz.description}</div>
            {quiz.type === QuestionType.QUESTION && (
              <input
                className="cute-input"
                type="text"
                value={answer}
                placeholder="Хариултаа бичнэ үү"
                onChange={(e) => setAnswer(e.target.value)} // Track input value
              />
            )}
          </div>
        ) : (
          <div className="item">Хөөрхөнүүд минь асуулт дууссан байна</div>
        )}
      </div>
      {quiz?.type === QuestionType.QUESTION && (
        <Button className="ad" onClick={answerQuiz} disabled={loading || end}>
          Submit
        </Button>
      )}
      <Button className="ad" onClick={fetchQuiz} disabled={loading || end}>
        Next
      </Button>
    </ContainerWrap>
  );
};
