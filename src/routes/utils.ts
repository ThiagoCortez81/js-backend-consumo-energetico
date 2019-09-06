export class Utils {
    static  isAuthenticated(headers: any) {
        if (headers.login != "" && headers.password != "")
            return true;
        return false;
    }
}
