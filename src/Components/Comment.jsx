import React, { useEffect, useState } from 'react'
import apiInstance from '../Config/Apisconfig'
import CommentTable from './CommentTable'

const Comment = () => {
    const [list, setList] = useState([])


    const getData = () => {
        apiInstance.get("comments").then((res) => {
            console.log(res);
            setList([...res.data.comments])
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <CommentTable
                data={list}
                columns={[
                    {
                        key: "body",
                        label: "Comments"
                    },
                    {
                        key: "likes",
                        label: "Likes"
                    },
                    {
                        key: "id",
                        label: "ID"
                    },
                    {
                        key: "postId",
                        label: "Post ID"
                    }
                ]}
            />

        </>
    )
}

export default Comment


{/* // {list.map((x, i) => { */}
{/* //     return (
//         <div className='bg-cyan-300' key={i}>
//             <h1>{x.likes}</h1>
//             <p>{x.body}</p>
//             <p>{x.id}</p>
//             <p>{x.postId}</p>
//         </div>
//     )
// })} */}

