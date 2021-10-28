import {connect} from "react-redux";
import {UserType} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Follow, SetCurrentPage, SetTotalUsersCount, SetUsers, UnFollow,} from "../../redux/users-reducer";
import {UsersClass} from "./UsersClass";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }
}
const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        Follow: (id: number) => {
            dispatch(Follow(id))
        },
        UnFollow: (id: number) => {
            dispatch(UnFollow(id))
        },
        SetUsers: (users: Array<UserType>) => {
            dispatch(SetUsers(users))
        },
        SetCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPage(currentPage))
        },
        SetTotalUsersCount:(totalUsersCount:number)=>{
            dispatch(SetTotalUsersCount(totalUsersCount))
        }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)