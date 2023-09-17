import {handleError} from "../../frontend/ts/handleError.js";
import axios from 'axios';

interface NetlifyEvent {
    queryStringParameters: {
        userCategory?: string;
    };
}

exports.handler = async function(event: NetlifyEvent) {
    const API_KEY = process.env.API_KEY as string;
    const userCategory = event.queryStringParameters.userCategory;
    try {
        let response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=`, {
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'identity',
                'X-Api-Key': API_KEY
            },
            params: { category: userCategory },
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (err: any) {
        handleError(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
