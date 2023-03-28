import{
    // BrowserRouter as Router,
    Routes,
    Route,
    // Navigate,
} from "react-router-dom"
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard"
import Register from "./Register";
import Navbar from "./Navbar";

function App(){
    return(
        <>
        <Navbar />
            <Routes>
                {/* <Route path="/" element={<Navbar/>}/> */}
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default App;