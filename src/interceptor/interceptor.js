
export const  fetchInterceptor = ({url, key}) => {
    return fetch( url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key' : key,
            // Authorization: 'Bearer ULTRA_SECRET_KEY',
        },
    });
}