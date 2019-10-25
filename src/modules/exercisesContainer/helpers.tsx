import * as React from 'react';
import { EXERCISES_NAMES } from './constants';

import Viewing from '@mdl/exercises/viewing/Viewing';
import Choice from '@mdl/exercises/choice/Choice';
import Typing from '@mdl/exercises/typing/Typing';
import { EmptyFunc, Word } from '@mdl/types';

export const getExerciseComponent = (exerciseName: EXERCISES_NAMES, words: Word[], count: number, onComplete: EmptyFunc) => {
  const props = { words, count, onComplete };
  let component;
  switch (exerciseName) {
    case EXERCISES_NAMES.VIEWING:
      component = <Viewing {...props} />;
      break;
    case EXERCISES_NAMES.CHOICE_ORIGINAL_TRANSLATION:
      component = <Choice {...props} isOriginalTranslation={true} />;
      break;
    case EXERCISES_NAMES.CHOICE_TRANSLATION_ORIGINAL:
      component = <Choice {...props} isOriginalTranslation={false} />;
      break;
    case EXERCISES_NAMES.TYPING:
      component = <Typing {...props} />;
      break;
  }
  return component;
};
