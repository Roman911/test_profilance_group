import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { News } from './Modules'
import { Modal, Home, NavBar } from "./Components"
import { modalActions, userActions } from './redux/actions'

function App() {
  const { data } = useSelector((state) => state.user)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  const openAuth = () => {
    dispatch(modalActions.openModal())
  }

  const closeModal = () => {
    dispatch(modalActions.closedModal())
  }

  const logOut = () => {
    dispatch(userActions.removeData())
  }

  return (
    <Router>
      <div>
        <NavBar data={ data } openAuth={ openAuth } logOut={ logOut } />
        <Switch>
          <Route path="/news">
            <News data={ data } />
          </Route>
          <Route path="/">
            <Home data={ data } />
          </Route>
        </Switch>
      </div>
      {
        isOpen ? <Modal id={'modal'} closeModal={ closeModal } /> : null
      }
    </Router>
  )
}

export default App
