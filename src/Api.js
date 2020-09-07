const BASE_API_URL = 'https://api.github.com';

export default {
    checkToken: async (token) => {
        //
    },

    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const json = await req.json()
        return json
    },

    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API_URL}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });

        const json = await req.json()
        return json
    },
}