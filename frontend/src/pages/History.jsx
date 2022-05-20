import React, { useEffect, useContext } from "react"
import AuthContext from "../contexts/authContext"
import isLoggedIn from "../middlewares/isLoggedIn"
import { useNavigate } from "react-router-dom"

function History(props) {
  // Middleware
  const me = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    isLoggedIn(props.meta, me, navigate)
  }, [])

  return (
    <>
      <div className="h2">ประวัติการสั่งซื้อของฉัน</div>
      <hr />
      <br />
      <br />
    </>
  )
}

export default History