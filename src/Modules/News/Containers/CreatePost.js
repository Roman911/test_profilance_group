import React from "react"
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import { CreatePostForm } from '../Components/CreatePostForm'
import { postActions } from '../../../redux/actions'

export const CreatePost = ({ data, handleClick }) => {
  const dispatch = useDispatch()
  const initialValues = { title: '', text: '' }
  const onSubmit = (values, onSubmitProps) => {
    const newPost = {
      id: Date.now(),
      idAuthor: data.id,
      title: values.title,
      text: values.text,
      approve: false,
      date: new Date()
    }
    dispatch(postActions.createPost(newPost))
    onSubmitProps.resetForm()
    handleClick()
  }
  if (data) {
    return <Formik initialValues={ initialValues } onSubmit={ onSubmit } >
      {formik => {
        return <Form >
          <CreatePostForm />
        </Form>
      }}
    </Formik>
  } else {
    return <p className='error'>Для добавления статьи необходимо войти</p>
  }
}