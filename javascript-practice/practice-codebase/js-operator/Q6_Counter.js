let count = 0;

function increment() {
    count = count + 1;

    function showCount() {
        console.log("Count: " + count);
    }

    showCount();
}

function decrement() {
    count = count - 1;
    console.log("Count: " + count);
}

increment();
increment();
decrement();
