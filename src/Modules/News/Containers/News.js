import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { postActions } from '../../../redux/actions'
import { Post } from '../Components/Post'
import { CreatePost } from './CreatePost'
import { Search } from "../Components/Search"
import postsJSON from './posts.json'
import { Button } from "../../../Components"

export const News = ({ data }) => {
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)
  const [ filtered, setFiltered ] = useState(null)
  const [ value, setValue ] = useState('')
  const [ createPost, setCreatePost ] = useState(null)

  useEffect(() => {
    dispatch(postActions.setPosts(postsJSON))
  }, [posts])

  const dataName = data ? data.name : undefined
  const dataId = data ? data.id : undefined

  const removePost = (id) => {
    dispatch(postActions.removePost(id))
  }

  const approvePost = (id) => {
    dispatch(postActions.approvePost(id))
  }

  useEffect(() => {
    setFiltered(posts)
  }, [posts])

  const handleChange = (e) => {
    setValue(e.target.value)
    let currentList = []
    let newList = []
    if (e.target.value !== "") {
      currentList = posts
      newList = currentList.filter(item => {
        const lc = item.title.toLowerCase()
        const lct = item.text.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes(filter) || lct.includes(filter)
      })
    } else {
      newList = posts
    }
    setFiltered(newList)
  }

  const post = filtered ? filtered.map(item => {
    const approve = item.approve
    return (approve || dataName === 'Admin' || dataId === item.idAuthor) ? <Post
      key={ item.id }
      isAdmin={ dataName }
      id={ item.id }
      title={ item.title }
      text={ item.text }
      approve={ item.approve }
      date={ item.date }
      removePost={ removePost }
      approvePost={ approvePost }
    /> : null
  }) : <p>Loading...</p>

  const handleClick = () => {
    setCreatePost(!createPost)
  }

  return <div className='wrapper'>
    <h1>Новости</h1>
    <Search handleChange={ handleChange } value={ value } />
    { post }
    { createPost ? <CreatePost data={ data } handleClick={ handleClick } /> : null }
    <div className='news__button'>
      <Button name='Создать новость' handleClick={ handleClick } />
    </div>
  </div>
}