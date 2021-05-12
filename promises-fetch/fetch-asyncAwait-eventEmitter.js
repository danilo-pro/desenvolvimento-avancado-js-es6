// Fetch

// fetch('/data.json', {
//     method: 'post',
//     body: JSON.stringify
// })
//     .then(resposeStream => {
//         if(resposeStream.status === 200){
//             return resposeStream.json()
//         }
//         else {
//             throw new Error('Request error');
//         }
//     })
//     .then(data => {
//         console.log(data);
// }).catch(err => {
//     console.log('Error:', err);
// });

// ES7 - Async / Await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000); 
});

const simpleFunction = async () => {
    const data = await asyncTimer();
    // const data = await Promise.all([asyncTimer(), fetch('/data.json').then(resStream => resStream.json())]);
    // const dataJSON = await fetch('/data.json').then(resStream => resStream.json());
    return data;
}

simpleFunction().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});