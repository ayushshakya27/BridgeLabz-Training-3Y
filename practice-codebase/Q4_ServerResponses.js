function serverResponse(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(name + " failed");
            } else {
                resolve(name + " completed");
            }
        }, time);
    });
}

let serverA = serverResponse("Server A", 2000);
let serverB = serverResponse("Server B", 3000);

Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.log(error));

Promise.race([
    serverResponse("Server A", 2000),
    serverResponse("Server B", 3000)
])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.log(error));
