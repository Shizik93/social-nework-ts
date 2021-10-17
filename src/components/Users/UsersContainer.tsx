
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Follow, SetUsers, UnFollow, usersType} from "../../redux/users-reducer";

const mapStateToProps = (state:AppStateType) => {
  return{
      users:state.usersReducer.users
  }
}
const mapDispatchToProps = (dispatch:(action:any)=>void) => {
    return{
        Follow:(id:string)=>{
            dispatch(Follow(id))
        },
        UnFollow:(id:string)=>{
            dispatch(UnFollow(id))
        },
        SetUsers:(users:Array<usersType>)=>{
        dispatch(SetUsers(users))}
    }

}

export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)