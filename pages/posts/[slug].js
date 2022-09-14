import React, { useEffect, useState } from 'react'
import ReadersNav from '../../components/ReadersNav'
import Recommend from '../../components/Recommend'
import ArticleMain from '../../components/ArticleMain'
import { useRouter } from 'next/router'
import { doc, onSnapshot, getDocs, collection } from "firebase/firestore";
import { db } from '../../firebase/firebase'
import { useMediumContext } from '../../context/MediumContext'
const SlugMedium = () => {
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])
  const {posts, users, currentUser} = useMediumContext()
  const {slug} = useRouter().query

  useEffect(() => {
    if (posts?.length === 0) {
      return 
    }
    setPost(posts?.find((post) => post.id === slug ))
    setAuthor(users?.find(user => user.id === post?.email))
  }, [post, slug])

  return (
    <div className='flex mt-8'>
      <ReadersNav currentUser={currentUser}/>
      <ArticleMain post={post} author={author}/>
      <Recommend author={author}/>
    </div>
  )
}

export default SlugMedium