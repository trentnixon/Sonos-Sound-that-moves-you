
import store from "../../../../store/store";

export function SetSomething(id){
     //console.log(id)
    //store.dispatch({ type:"UI_SET_ACTIVE_FACE", payload:id });
}

export function ParentClass(Chapter){
   
   let ThisTime =  store.getState().APP.ParentClassTime

    let parsedUnixTime = Math.floor(Date.now() / 1000);

    //console.log(Chapter, parsedUnixTime, ThisTime, (ThisTime+1));

    if(ThisTime === 0 || parsedUnixTime !== ThisTime){
        store.dispatch({ type:"PARENTCLASS", payload:Chapter });
        store.dispatch({ type:"PARENTCLASSCHANGE", payload:parsedUnixTime });
    }
    
   
    
} 