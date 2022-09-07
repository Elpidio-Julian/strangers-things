const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT';

export const getPosts = async () => {
    try {
        const response = await fetch(`${baseURL}/posts`)
        const results = await response.json();
        return (results);
    } catch (err) {
        console.log('error getting all posts')
    }
}

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
        const result = await response.json();
        return result;
    } catch (err) {
        console.log('error registering user')
    }
}

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        })
        const results = await response.json();
        return results;
    } catch (err) {
        console.log('error logging in user')
    }
}


export const getUserDetails = async (token) => {
    try {
        const response = await fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json();
        return result;
    } catch(ex) {
        console.log('error getting some users details')
    }
}