const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT';

export const getPosts = async (token) => {
    try {
        const response = await fetch(`${baseURL}/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
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

export const createPost = async (token, {title, description, price, location, willDeliver})=> {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver
        }
      })
    })
    
    const result = await response.json();
    return result;
  } catch(ex) {
    console.log('error creating a new post')
  }
}

export const updatePost = async (token, { title, description, price, location, willDeliver, _id}) => {
    try {
        const response = await fetch(`${baseURL}/posts/${_id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    location,
                    willDeliver
                }
            })

        })
    } catch(err) {
        console.log('error updating post')
    }
}

export const deliverMessage = async ({token, message, id}) => {
    try {
        const response = await fetch(`${baseURL}/posts/${id}/messages`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              message: {
                content: message.content,
              }
            })
        })
    } catch(err) {
        console.log('error sending message')
    }
}

export const deactivatePost = async ({token, id}) => {
    try {
        const response = await fetch(`${baseURL}/posts/${id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }})
    } catch(err) {
        console.log('error deactivating post')
    }

}