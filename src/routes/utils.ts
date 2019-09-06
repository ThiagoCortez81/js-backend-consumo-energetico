export class Utils {
    static  isAuthenticated(headers) {
        if (headers.login != "" && headers.password != "")
            return true;
        return false;
    }
}
