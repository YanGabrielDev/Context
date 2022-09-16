import { PostsContext } from "./context"
import P from 'prop-types'
import { useReducer } from "react"
import { reducer } from "./reducer"
import { data } from "./data"
export const PostsProvider = ({children}) =>{
    const [postsState, postsDispatch] = useReducer(reducer, data)
return <PostsContext.provider value={{postsState, postsDispatch}}>{children}</PostsContext.provider>
}
PostsProvider.propTypes = {
    children: P.element.isRequired
}