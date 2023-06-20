const user = {
    username :  'pnk',
    lastactivityTime : '27 feb'
}


// function getpost() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}<li/>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
function updateLastUserActivityTime () {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            user.lastactivityTime = new Date().getTime();
            resolve(user.lastactivityTime);
        }, 1000)
    }) 
}

function createPost(post) {
    return new Promise ((resolve,reject) => {
        setTimeout (() => {
            posts.push(post);
            resolve();
        },1000);
    });
}
function userUpdatePost(){
    Promise.all([createPost, lastactivityTime]).then(([createResolve, lastactivityTime]) => {
        console.log(lastactivityTime)
    })
}