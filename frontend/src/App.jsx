import { Route, Routes } from "react-router-dom"
import Navs from "./components/Navs"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

function App() {
  return (
    <>
      <Navs />
      <div className="my-5 container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App