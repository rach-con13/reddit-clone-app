import useAxios from 'Hooks/useAxios'
import React from 'react'
import ContentCard from '../ContentCard/contentCard'

export default function Contentbody(props) {
    const getAllPosts = useAxios('post','GET');
    

    return (
        <>
        {getAllPosts && getAllPosts.data && getAllPosts.data.map((post,index) => {
            const name = `r/ ${post.community_name}`;
            if(index <= 12 ) {
                return (
                <div key={index}>
                    <ContentCard community={name} author={post.author} title={post.title} desc={post.desc} />
                </div>
                )
            }
        })}
       
       </>
    )
}
