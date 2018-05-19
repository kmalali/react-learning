export function ellipsize( str, cutoff ) {
    return str.length > cutoff ? str.substr( 0, cutoff ) + '...' : str;
}