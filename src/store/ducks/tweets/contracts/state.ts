import { LoadingStatus } from "../../../types";

export enum AddFormState {
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
}

export interface Tweet {
    _id: string;
    text: string;
    images?: [];
    createdAt: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export interface TweetsState {
    items: Tweet[];
    LoadingStatus: LoadingStatus;
    addFormState: AddFormState;
}
