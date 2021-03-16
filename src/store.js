import { createStore } from "redux";

 let initalState = {
    post:{
        "data":[]
    }
};
const reduser = (state,action)=>{
    if(action.type === "ADD_POST" ){
        let result = state;
         result ={"post":{
            "data":[...state.post.data,{"content":action.content,"src":action.src}]
        }
    }
        return result;
    }else{
        console.log(action.type);
        return state
    }
};

export let store = createStore(reduser,initalState);
