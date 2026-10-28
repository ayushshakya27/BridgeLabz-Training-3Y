function doStage(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 1000);
}

function callbackPipeline() {
    doStage("Design", () => {
        doStage("Build", () => {
            doStage("Test", () => {
                doStage("Deploy", () => {
                    doStage("Celebrate", () => {
                        console.log("Callback pipeline complete");
                        asyncPipeline();
                    });
                });
            });
        });
    });
}

function waitStage(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, 1000);
    });
}

async function asyncPipeline() {
    await waitStage("Design");
    await waitStage("Build");
    await waitStage("Test");
    await waitStage("Deploy");
    await waitStage("Celebrate");
    console.log("Async pipeline complete");
}

callbackPipeline();
