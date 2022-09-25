// @ts-nocheck
import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import {
  addTweet,
  removeTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingStatus,
} from './actionCreators';
import {
  FetchAddTweetActionInterface,
  RemoveTweetActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes';
import { AddFormState } from "./contracts/state";

export function* fetchTweetsRequest() {
    try {
        const pathname = window.location.pathname;
        const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
        const items = yield call(TweetsApi.fetchTweets, userId);
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddTweetRequest({
    payload
}: FetchAddTweetActionInterface) {
    try {
        const item = yield call(TweetsApi.addTweet, payload);
        yield put(addTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* fetchRemoveTweetRequrest({ payload }: RemoveTweetActionInterface) {
  try {
    yield call(TweetsApi.removeTweet, payload);
  } catch (error) {
    alert('Error while deleting tweet');
  }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
    yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequrest);
}
