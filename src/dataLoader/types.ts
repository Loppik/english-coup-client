import { OutputSelector } from 'reselect';
import { IDataLoader } from './interfaces';

export type DomainSelectorOutputType = OutputSelector<any, IDataLoader, (res: IDataLoader) => IDataLoader>;
