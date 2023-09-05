export function isValidString(x) {
    if (!x || x.toString().trim().length == 0) {
        return false;
    } else {
        return true;
    }
}