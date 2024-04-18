import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailure } from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );
    console.log("User snapshot: ", userSnapshot);
    console.log("User snapshot data: ", userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
    // yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

// export function* signInWithGoogle() {
//   try {
//     console.log("Sign in with Google saga called");
//     yield put(signInSuccess());
//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
