function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Profile failed") : resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Posts failed") : resolve("Posts Loaded");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Messages failed") : resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadAll() {
    let start = Date.now();
    let results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    for (let i = 0; i < results.length; i++) {
        if (results[i].status === "fulfilled") {
            console.log(results[i].value);
        } else {
            console.log(results[i].reason);
        }
    }

    console.log("Time taken:", Date.now() - start, "ms");
}

loadAll();
