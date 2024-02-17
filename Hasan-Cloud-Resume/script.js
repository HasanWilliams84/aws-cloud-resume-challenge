const counter = document.querySelector('#replaceme');
async function updateCounter() {
    let response = await fetch('https://jjf42rphupkpngqhr5aw5mcoz40iyhhd.lambda-url.us-east-1.on.aws/');
    let data = await response.json();
    counter.innerHTML = `: ${data}`;
}

updateCounter();