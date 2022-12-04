const request = async (url, method, body = null, headers = {}) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        return data
    } catch (error) {
        console.log(error.message);
    }
}

export { request }