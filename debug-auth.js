const axios = require('axios');

const AUTH_URL = 'https://g1-authcore-0fdbad45b289.herokuapp.com';

async function testAuth() {
    console.log('Testing Auth API...');
    try {
        // Test login endpoint with dummy data to check response type
        const response = await axios.post(`${AUTH_URL}/auth/login`, {
            email: 'test@test.com',
            password: 'password'
        });
        console.log('Login Success (Unexpected):', response.status);
    } catch (error) {
        if (error.response) {
            console.log('Login Error Status:', error.response.status);
            console.log('Login Error Headers:', error.response.headers['content-type']);
            console.log('Login Error Data Type:', typeof error.response.data);
            if (typeof error.response.data === 'string') {
                console.log('Login Error Data (first 100 chars):', error.response.data.substring(0, 100));
            } else {
                console.log('Login Error Data:', JSON.stringify(error.response.data, null, 2));
            }
        } else {
            console.log('Network Error:', error.message);
        }
    }
}

testAuth();
