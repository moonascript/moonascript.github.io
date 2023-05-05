
async function get(url, data) {
	let res = await fetch(url, {
		body: data,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
		method: 'GET',
	});
	return await res.text();
}

async function post(url, data) {
	let res = await fetch(url, {
		body: data,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	});
	return await res.text();
}
async function post_j(url, data) {
	let res = await fetch(url, {
		body: data,
		headers: {
			'content-type': 'application/json;charset=UTF-8',
		},
		method: 'POST',
	});
	return await res.text();
}