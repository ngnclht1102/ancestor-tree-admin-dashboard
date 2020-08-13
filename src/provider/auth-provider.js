import { login } from '../api/auth.api'
import { setAccessToken, setAdminName, loadAccessToken, removeAccessToken, removeAdminName } from '../utils/storage'

export default {
    // called when the user attempts to log in
    login: async ({ username, password }) => {
      try {
        const {data} = await login({ email: username, password: password})

        setAccessToken(data.access_token)
        setAdminName(data.name)
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    },
    // called when the user clicks on the logout button
    logout: () => {
        removeAccessToken()
        removeAdminName()
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            removeAccessToken()
            removeAdminName()
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return loadAccessToken()
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
