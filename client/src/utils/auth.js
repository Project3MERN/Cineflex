import decode from 'jwt-decode';

class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    };

    // check if user is still logged in
    loggedIn() {
        // check if saved token and valid
        const token = this.getToken();
        // use type coersion to check if token is not undefined or expired
        return !!token && !this.isTokenExpired(token);
    };

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            // divided by 1000 to convert to Unix timestamp
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    };

    getToken() {
        // retrieve token from local storage
        return localStorage.getItem('id_token');
    };

    // set token to local storage and reload to homepage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    };

    logout() {
        // clear token and profile data from localStorage
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
};

export default new AuthService();