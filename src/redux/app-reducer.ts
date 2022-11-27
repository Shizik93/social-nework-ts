import {setLogin} from "./auth-reducer";

type initialStateType={
    initialized:boolean
}
const initialState={
    initialized:false
}
export  type AppReducerType=SetInitializedType
export const appReducer=(state:initialStateType=initialState,action:AppReducerType):initialStateType=>{
    switch (action.type){

        case 'SET-INITIALIZED':{

            return {...state,initialized:true}
        }
        default:return state
    }

}

const SetInitialized=()=>{

    return{
        type:'SET-INITIALIZED',

    }as const
}
type SetInitializedType=ReturnType<typeof SetInitialized>

export const initializingApp = () =>(dispatch:any)=>{

    dispatch(setLogin()).then(()=>{
        dispatch(SetInitialized())
    })


}