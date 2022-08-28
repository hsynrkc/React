import axios from "axios";
async function getData(user_id) {

    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data:posts} = await axios ("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
    
    console.log(users);
    console.log("Post:" , posts);

}

export default getData;

//**********************************//
//2.Yöntem
/*
import axios from "axios";
const getUsers = (user)=>{
    return new Promise(async (resolve,reject)=>{
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + user);

        resolve(data);
    });
};

const getPost = (post)=>{
    return new Promise(async (resolve,reject)=>{
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + post);

        resolve(data);
    });
};
async function getData(user_id){
    try{
        const users = await getUsers(user_id);
        const post = await getPost(user_id);
        console.log(users);
        console.log("Post:",post);
    }catch (e) {
        console.log(e);
    }
};
export default getData;
*/