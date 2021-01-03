const actFetchApi = (url) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    return fetch(baseUrl + url).then(response => response.json());
}
export default actFetchApi;

