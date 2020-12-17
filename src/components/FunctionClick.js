import React from 'react';
import { Form, Button } from 'react-bootstrap';

function FunctionClick() {
    
    async function FetchURL() {
 
        const aql = 'SELECT c/context/start_time/value as composition_time, e/ehr_id/value as ehr_id, c/uid/value as composition_id, h/items[at0001]/items[openEHR-EHR-EVALUATION.clinical_synopsis.v1,\'ReSPECT Summary\']/data[at0001]/items[at0002,\'Narrative Summary\']/value/value as s2_summary, h/items[at0001]/items[openEHR-EHR-SECTION.adhoc.v1,\'Details of other relevant care planning documents and where to find them\']/items[openEHR-EHR-EVALUATION.advance_care_directive.v1,\'Advance planning document\']/data[at0001]/items[at0006]/value/value as s2_care_planning, h/items[at0001]/items[openEHR-EHR-SECTION.ehr_reference.v0,\'Legal welfare proxies\']/items[openEHR-EHR-ADMIN_ENTRY.legal_authority.v0,\'Legal welfare proxy in place\']/data[at0001]/items[at0004]/value/value as s2_legal_proxy, h/items[at0001]/items[openEHR-EHR-SECTION.ehr_reference.v0,\'Legal welfare proxies\']/items[openEHR-EHR-ADMIN_ENTRY.legal_authority.v0,\'Legal welfare proxy in place\']/data[at0001]/items[at0004]/value/value as s2_legal_proxy_status, h/items[at0006]/items[openEHR-EHR-EVALUATION.about_me.v0,\'What matters to me\']/data[at0001]/items[at0002,\'What I most value\']/value/value as s3_what_i_value, h/items[at0006]/items[openEHR-EHR-EVALUATION.about_me.v0,\'What matters to me\']/data[at0001]/items[at0002,\'What I most fear / wish to avoid\']/value/value as s3_what_i_fear, h/items[at0007]/items[openEHR-EHR-EVALUATION.recommendation.v1]/data[at0001]/items[at0002,\'Clinical focus\']/value/value as s4_recommended_clinical_focus, h/items[at0007]/items[openEHR-EHR-EVALUATION.recommendation.v1]/data[at0001]/items[at0003,\'Clinical guidance on interventions\']/value/value as s4_recommended_clinical_guidance, h/items[at0007]/items[openEHR-EHR-EVALUATION.cpr_decision_uk.v0]/data[at0001]/items[at0003]/value/value as s4_cpr_decision, h/items[at0007]/items[openEHR-EHR-EVALUATION.cpr_decision_uk.v0]/data[at0001]/items[at0002]/value/value as s4_cpr_date, h/items[at0008]/items[openEHR-EHR-EVALUATION.mental_capacity.v0]/data[at0001]/items[at0009]/value/value as s5_mental_decision, h/items[at0008]/items[openEHR-EHR-EVALUATION.mental_capacity.v0]/data[at0001]/items[at0002,\'Does the person have capacity to participate in making recommendations on this plan?\']/value/value as s5_mental_has_capacity, h/items[at0008]/items[openEHR-EHR-EVALUATION.mental_capacity.v0]/data[at0001]/items[at0006,\'If no, in what way does this person lack capacity?\']/value/value as s5_mental_if_no, SQUASH(h/items[at0009]/items[openEHR-EHR-ADMIN_ENTRY.respect_involvement.v0]/data[at0001]/items[at0012]/items[at0002]/value/value) as s6_involvement, h/items[at0009]/items[openEHR-EHR-ADMIN_ENTRY.respect_involvement.v0]/data[at0001]/items[at0012]/items[at0007]/value/value as s6_option_d, h/items[at0010]/items[openEHR-EHR-ACTION.service.v0,\'Clinician signature\']/description[at0001]/items[at0011]/value/value as s7_clinician_signatures, h/items[at0011]/items[openEHR-EHR-ADMIN_ENTRY.care_team.v0,\'Emergency contacts\']/data[at0001]/items[openEHR-EHR-CLUSTER.care_team.v0]/items[at0018]/value/value as s8_care_team_name, SQUASH(h/items[at0011]/items[openEHR-EHR-ADMIN_ENTRY.care_team.v0,\'Emergency contacts\']/data[at0001]/items[openEHR-EHR-CLUSTER.care_team.v0]/items[at0021]/items[at0022]) as s8_care_team_participant, h/items[at0012]/items[openEHR-EHR-ACTION.service.v0,\'Review of plan\']/description[at0001]/items[at0011]/value/value as s9_service_name FROM EHR e CONTAINS COMPOSITION c CONTAINS EVALUATION h[openEHR-EHR-SECTION.respect_headings.v0] WHERE composition_id = \'5ff4861f-21ad-4d3a-962f-2d7d703d9b74::a81f47c6-a757-4e34-b644-3ccc62b4a01c::1\' ORDER BY composition_time DESC OFFSET 0 LIMIT 1';

        const url= 'https://cdr.code4health.org/rest/v1/query'

        const response = await fetch (url, {
            method: 'POST',
            body: aql,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YTgxZjQ3YzYtYTc1Ny00ZTM0LWI2NDQtM2NjYzYyYjRhMDFjOiQyYSQxMCQ2MTlraQ=='
            }
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
