import { callApi } from '@dtl/actions';
import RESOURCES from '@dtl/resources';
import { HTTP_METHODS } from '@mdl/constants';
import { Word } from '@mdl/types';

export const getLearnUserwords = () => callApi({
  resource: RESOURCES.LEARNING_WORDS,
  type: HTTP_METHODS.GET,
  url: '/userwords'
});

export const sendLearnedWords = (learnedWords: Word[]) => callApi({
  resource: RESOURCES.LEARNING_WORDS,
  type: HTTP_METHODS.PUT,
  url: '/userwords',
  content: learnedWords,
});
