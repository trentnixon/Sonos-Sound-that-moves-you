// import React from "react";
const InitialState ={
	APPLICATION:false,
	GA_DB:false,
	GA_SCHEMA:false,
	ParentClass:'None',
	ParentClassTime:0
}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			case "STORE_INTERACTIVE":{
			return {...state, APPLICATION:action.payload}
				// eslint-disable-next-line 
				break
			}

			case "STORE_GA_APPLICATION":{
				return {...state, GA_DB:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "STORE_GA_SCHEMA":{
				return {...state, GA_SCHEMA:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "PARENTCLASS":{
				return {...state, ParentClass:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "PARENTCLASSCHANGE":{
				return {...state, ParentClassTime:action.payload}
					// eslint-disable-next-line 
					break
			}
			
		}
		return state;
	}
export default APP;	