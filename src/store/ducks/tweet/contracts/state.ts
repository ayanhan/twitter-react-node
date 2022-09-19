import { LoadingStatus } from '../../../types';
import { Tweet } from '../../tweets/contracts/state';

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}


export interface TweetState {
  data?: Tweet;
  LoadingStatus: LoadingStatus;
}
