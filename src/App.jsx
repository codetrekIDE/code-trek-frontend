import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import CodeEditor from './pages/CodeEditor/CodeEditor'
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/project/:projectId" element={<CodeEditor />} />
      </Routes>
    </>
  )
}

export default App;