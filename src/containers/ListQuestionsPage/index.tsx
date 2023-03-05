/* eslint-disable react-hooks/rules-of-hooks */
import { Question } from '@/domain/questions/questions';
import { Container } from './styles';
import { useId } from 'react';
import { Header } from '@/components/global/Header';
import {
  LIST_QUESTIONS_SUBTITLE,
  LIST_QUESTIONS_TITLE,
} from '@/config/appMessages';

export type QuestionProps = {
  questions: Question[];
};

export default function ListQuestionsPage({ questions }: QuestionProps) {
  return (
    <Container>
      <Header title={LIST_QUESTIONS_TITLE} subtitle={LIST_QUESTIONS_SUBTITLE} />
      {questions.map((questions) => (
        <div key={useId()}>
          <h1>question {questions.id}</h1>
          <div>{questions.body}</div>
        </div>
      ))}
    </Container>
  );
}
