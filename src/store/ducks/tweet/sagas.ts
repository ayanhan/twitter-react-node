import { call, put, takeEvery } from 'redux-saga/effects';
import { setTweetData, setTweetLoadingStatus } from './actionCreators';
import { LoadingStatus } from '../../types';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/state';

import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionTypes';

export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data));
  } catch (error) {
    yield put(setTweetLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
