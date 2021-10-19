
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Follow, SetUsers, UnFollow,} from "../../redux/users-reducer";

const mapStateToProps = (state:AppStateType) => {
  return{
      users:state.usersReducer.users,
  }
}
const mapDispatchToProps = (dispatch:(action:any)=>void) => {
    return{
        Follow:(id:number)=>{
            dispatch(Follow(id))
        },
        UnFollow:(id:number)=>{
            dispatch(UnFollow(id))
        },
        SetUsers:(users:Array<UserType>)=>{
        dispatch(SetUsers(users))}
    }

}


export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)