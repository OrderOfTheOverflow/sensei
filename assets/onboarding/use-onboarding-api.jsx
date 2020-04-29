import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Use Onboarding REST API for the given step.
 *
 * Loads data via the GET method for the endpoint, and provides a submit function that sends data to the endpoint
 * via POST request.
 *
 * @param {string} step Onboarding step endpoint name.
 * @return {OnboardingApiHandle} handle
 *
 * @typedef {Object} OnboardingApiHandle
 * @property {boolean} isBusy Loading state.
 * @property {Object} data API response from GET call to endpoint.
 * @property {function(Object)} submit Method to POST to endpoint.
 */
export function useOnboardingApi( step ) {
	const [ data, setData ] = useState( {} );
	const [ isBusy, setBusy ] = useState( false );
	let path = `/sensei/v1/onboarding/${ step }`;
	useEffect( () => {
		fetchData();
	}, [ step ] );

	async function fetchData() {
		setBusy( true );
		const result = await apiFetch( {
			path,
		} );
		setData( result );
		setBusy( false );
	}

	async function submit( formData ) {
		setBusy( true );
		await apiFetch( {
			path,
			method: 'POST',
			data: formData,
		} );
		setBusy( false );
		path = `${ path }?skip-preloaded`;
		await fetchData();
	}

	return { data, submit, isBusy };
}
