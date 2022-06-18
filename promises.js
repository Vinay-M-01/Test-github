const posts =
[
    {title : 'Post one' , body : 'This is post one' , createdAt : new Date().getTime()},
    {title : 'Post two' , body : 'This is post two' , createdAt : new Date().getTime()}

];


function getPosts()
{
    setInterval(() =>
    {
        let output = ''
        posts.forEach((post) =>
        {
            
            output+= `<li>${post.title} Last Edited ${post.createdAt}</li>`;
        });
        document.body.innerHTML = output;
        // console.log(output);

    }, 3000)
    
}

function createPost(post){
    let create = new Promise((resolve,reject) =>
    {
        setTimeout(() =>
        {
            posts.push({...post ,createdAt : new Date().getTime() });
            

            const error = false;

            if(!error){
                resolve()
            }else{
                reject('Error: Somthing is worng ')
            }
        },2000)
    })

    let updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.forEach((post) => {
                post.createdAt = (new Date().getTime() - post.createdAt)/1000;
            })
            
            const error = false
    
            if(!error){
                resolve()
            }else{
                reject('Something went wrong')
            }
        }, 2000);
    })

    return [create, updateLastUserActivityTime];

}

function delectePost(){
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {

            if(posts.length !=0)
            {
                posts.pop(posts.length -1);
                const error = false
                if(!error){
                    resolve('')
                }else{
                    reject('Something went wrong')
                }
            }else{
                
                reject('Array is Epmty now')
            }
        },2000)
    })
}

Promise.all(createPost({title:'Post three', body:'This is post three'}))
.then()
.then(getPosts)

.catch(err => console.log(err));




// updateLastUserActivityTime()
// .then(getPosts)

// delectePost()
// .then()
// delectePost()
// .then()
// delectePost()
// .then()
// delectePost()
// .then()
// .catch(err => console.log(err));





