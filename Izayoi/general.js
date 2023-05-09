var token = "";
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

async function dget(url, data) {
	let res = await fetch(url, {
		body: data,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'Authorization': 'Bot ' + token,
		},
		method: 'GET',
	});
	return await res.text();
}

async function dpost_j(url, data) {
	let res = await fetch(url, {
		body: data,
		headers: {
			'content-type': 'application/json;charset=UTF-8',
			'Authorization': 'Bot ' + token,
		},
		method: 'POST',
	});
	return await res.text();
}

async function dpost(url, data) {
	let res = await fetch(url, {
		body: data,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'Authorization': 'Bot ' + token,
		},
		method: 'POST',
	});
	return await res.text();
}

async function aget(url) {
	// 使用 AJAX 调用 Discord API
	$.ajax({
		url: url,
		type: "GET",
		headers: {
			"Authorization": "Bot " + token
		},
		success: function(response) {
			console.log(response);
			return response;
			// 在此处处理返回的服务器信息
		}
	});
}