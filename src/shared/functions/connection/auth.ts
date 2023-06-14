import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);
export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);
export const setAuthorizationToken = (token: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};
