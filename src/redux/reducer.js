import * as types from './actionTypes';

const initialstate={
    recipe:[],
    error:'',
    isLoading:false
}
const recipeReducer = (state=initialstate, action ) =>{
  switch (action.type) {
    case types.FETCH_RECIPE_START:
        return {
            ...state,
            isLoading:true
        }
        
    case types.FETCH_RECIPE_SUCCESS:
        return {
            recipe:action.payload,
            isLoading:false
        }

    case types.FETCH_RECIPE_FAIL:
        return {
            isLoading:false,
            error:'Something Went wrong from reducer.js'
        }   
        
    default:
        return state;
  }  
}

export default recipeReducer;