import { LIST_QUESTIONS_URL } from '@/config/appConfig';
import { Question } from '@/domain/questions/questions';
import { fetchJson } from '@/utils/fetchJson';

export const getAllQuestions = async (): Promise<Question[]> => {
  const questions = await fetchJson<Promise<Question[]>>(LIST_QUESTIONS_URL);
  return questions;
};
