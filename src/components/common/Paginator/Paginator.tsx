import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import m from "../../Users/users.module.css";
import React from "react";
import {getUsersTC, SetCurrentPage} from "../../../redux/users-reducer";

export const Paginator = () => {
    const dispatch = useAppDispatch()
    const totalUsersCount = useAppSelector(state => state.usersReducer.totalUsersCount)
    const pageSize = useAppSelector(state => state.usersReducer.pageSize)
    const currentPage = useAppSelector(state => state.usersReducer.currentPage)

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages: number[] = [];

    function createPages(pages: Array<number>, pagesCount: number, currentPage: number) {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }

    createPages(pages, pagesCount, currentPage)
    const onPageChanged = (pageNumber: number) => {
        dispatch(SetCurrentPage(pageNumber))
        dispatch(getUsersTC(pageNumber, pageSize))


    }
    return <>
        <div>
            {pages.map(f =>
                <span key={f} className={`${currentPage === f && m.selectedPage}`}
                      onClick={() => {
                          onPageChanged(f)
                      }}>{f} </span>)}
        </div>
    </>
}