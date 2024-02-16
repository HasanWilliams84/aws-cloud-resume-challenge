const counter = document.querySelector('#replaceme');
async function updateCounter() {
    let response = await fetch('https://jjf42rphupkpngqhr5aw5mcoz40iyhhd.lambda-url.us-east-1.on.aws/');
    let data = await response.json();
    counter.innerHTML = `: ${data}`;
}

updateCounter();







// const countEl = document.getElementById('vc');

// updateVisitCount();
// //Testinglllll
// function updateVisitCount() {
//     fetch('https://1nydmobav4.execute-api.us-east-1.amazonaws.com/Prod/visitor_count')
//         .then(response => {
//         return response.json()
//       })
//         .then(data => {
//             console.log(data)
//             document.getElementById('count').innerHTML = data;
//         })
//     }

    // fetch('https://l9s5jagzg4.execute-api.us-east-1.amazonaws.com/cloud-resume-api-stage/cloud-resume-view-count')
    //     .then(res => res.json()) // parse response as JSON
    //     .then(data => {
    //         console.log(data)
    //     })
        // .catch(err => {
        //     console.log(`error ${err}`)
        // })

// import countapi from 'countapi-js';

// countapi.visits().then((result) => {
//     console.log(result.value);
// });

// fetch()
//     .then(res => res.json())
//     .then(data => {
//         console.log()
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });