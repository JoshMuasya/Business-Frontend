"use client"

import { useState, useEffect } from "react";

import Cookies from "js-cookie";

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUserName] = useState(null);

    // Check Authentication Status
    useEffect(() => {
        // Check if user is authenticated based on a token in Cookies
        const authToken = Cookies.get('authToken');

        if (authToken) {
            setAuthenticated(true);

            fetch('http://127.0.0.1:8000/test_token', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            })

            .then(response => response.json())
            .then(data => {
                setUserName(data.username);
            })
            .catch(error => {
                console.error("Error fetching username:", error);
            });
        } else {
            setAuthenticated(false);
        }
    }, []);

    return { authenticated, username };
}