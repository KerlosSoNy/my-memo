import { Route, Routes } from "react-router-dom";
import Nav from "./Base/Nav";
import Home from "./HomePage/Home";
import About from "./Branch/About";
import Footer from "./Base/Footer";
import ContactUs from "./Branch/Contactus";


export default function App(){

    return(
        <>
            <div className="">
                <Nav/>
                <Routes>
                    <Route element={<Home/>} path="/"/>
                    <Route element={<About/>} path="/aboutUs"/>
                    <Route element={<ContactUs/>} path="/contact"/>
                </Routes>
                <Footer/>
            </div>
        </>
    )
}