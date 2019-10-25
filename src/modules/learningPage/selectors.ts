import { createSelector } from 'reselect';
import { ILearningWords, ILearningWordsDomainSelector } from '@mdl/learningPage/interfaces';
import { selectDomain } from '@dtl/selectors';

const learningWordsDomain = state => state.learningWords;

/*const s = (): ILearningWordsDomainSelector => {
  const domainData = selectDomain(learningWordsDomain);
  return {
    selectLearningWords: domainData.data,
    selectIsLoadingLearningWords: domainData.isLoading,
    selectIsErrorLearningWords: domainData.isError
  }
};*/

// export const selectLearningWordsDomain =
