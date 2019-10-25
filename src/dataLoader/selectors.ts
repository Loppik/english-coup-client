import {createSelector, OutputSelector, Selector} from 'reselect';
import { IDataLoader } from './interfaces';
import { DATA_LOADER_PROPERTIES } from './constants';
import { DomainSelectorOutputType } from './types';

const commonSelector = (domain, property: DATA_LOADER_PROPERTIES): any|boolean => createSelector(
  [domain],
  (domainData: IDataLoader) => domainData[property]
);

export const selectData = (domain): any => commonSelector(domain, DATA_LOADER_PROPERTIES.DATA);
export const selectIsLoading = (domain): boolean => commonSelector(domain, DATA_LOADER_PROPERTIES.IS_LOADING);
export const selectIsError = (domain): boolean  => commonSelector(domain, DATA_LOADER_PROPERTIES.IS_ERROR);

export const selectDomain = (domain): DomainSelectorOutputType => createSelector(
  [domain],
  (domainData: IDataLoader): IDataLoader => domainData
);
