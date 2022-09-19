import { LoadingStatus } from '../../types';
import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetAddFormStateActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStatusActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes';
import { AddFormState, Tweet, TweetsState } from './contracts/state';


export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
});

export const setTweetsLoadingStatus = (
  payload: LoadingStatus,
): SetTweetsLoadingStatusActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});


export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStatusActionInterface
  | FetchAddTweetActionInterface
  | AddTweetActionInterface
  | SetAddFormStateActionInterface;
