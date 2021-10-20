// @ts-nocheck
import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import {
  addTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingState,
} from "./actionCreators";
import {
  FetchAddTweetActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { AddFormState, LoadingState, Tweet } from "./contracts/state";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({
  payload,
}: FetchAddTweetActionInterface) {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: "Brian Vaughn 🖤",
        username: "brian_d_vaughn",
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1290320630521487362/UKVSbU2V_bigger.jpg",
      },
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
