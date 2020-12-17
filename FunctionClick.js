import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FunctionClick() {
    
    async function FetchURL() {
        const url = document.getElementById("formSubmitURL").value;
        const response = await fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YTgxZjQ3YzYtYTc1Ny00ZTM0LWI2NDQtM2NjYzYyYjRhMDFjOiQyYSQxMCQ2MTlraQ=='
            },
            credentials: 'include'
        });
        if ( response.ok ) {
            const jVal = await response.json(); // Get JSON value from the response body
            return jVal;
        }
        else  console.log('response not OK');
    }



    function clickHandler() {
        FetchURL().then (function response(val) {
            document.getElementById("query_results").innerHTML = "<pre>" + JSON.stringify(val,null,2) + "</pre>";
        });
    }

    return (
        <div>
            <Form>
            <Form.Group controlId="formSubmitURL">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="Enter URL" />
            <Form.Text className="text-muted">We'll never share your URL with anyone else.</Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={clickHandler}>Query</Button>
            </Form>
            
        </div>
    )
}

export default FunctionClick
