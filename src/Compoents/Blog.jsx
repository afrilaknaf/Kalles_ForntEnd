import { useParams } from "react-router-dom"

export default function Blog(){

    let {id} = useParams()
    console.log(id)   

    return(
        <>
        <h1>Blog</h1>
        </>
    )
}