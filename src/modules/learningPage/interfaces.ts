import { IDataLoader } from '@dtl/interfaces';
import { Word } from '@mdl/types';
import { DATA_LOADER_PROPERTIES } from '@dtl/constants';

export interface ILearningWords extends IDataLoader {
  data: Word[];
}

export interface ILearningWordsDomainSelector {
  selectLearningWords: ILearningWords[DATA_LOADER_PROPERTIES.DATA];
  selectIsLoadingLearningWords: ILearningWords[DATA_LOADER_PROPERTIES.IS_LOADING];
  selectIsErrorLearningWords: ILearningWords[DATA_LOADER_PROPERTIES.IS_ERROR];
}
