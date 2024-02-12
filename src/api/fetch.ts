export async function fetchData(url: string) {
    return fetch(url)
        .then(r => r.json())
        .then(data => data)
}