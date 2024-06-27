

let options = {
    method: "POST",
    Headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((Response) => Response.json())
    .then((json) => console.log(json));