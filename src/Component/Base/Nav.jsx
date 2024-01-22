import { useState } from "react"
import { Link } from "react-router-dom"
export default function Nav(){
    let [email,setEmail]=useState("")
    let [password,setEPassword]=useState("")
    let [menu ,setMenu]=useState(false)

    let checkMenu =()=>{
        return menu ? setMenu(false):setMenu(true) 
    }

    console.log(menu)
    const links =[
        {name:"Home",to:"/"},
        {name:"About us",to:"/aboutUs"},
        {name:"Contact",to:"/contact"}
    ]

    const Swal = require('sweetalert2')
    const logFire =  async()=>{
        const { value: formValues } = await Swal.fire({
                title: 'Log In',
                html:
                `
                <div class="grid grid-flow-row text-start">
                <label htmlFor="Email" class="ms-7">Enter Your Email</label>
                <input id="swal-input1" class="swal2-input" type='email'>
                <label htmlFor="Password" class="ms-7 mt-3">Enter Your Password</label>
                <input id="swal-input2" class="swal2-input" type='password'>
                </div>
                `,
                confirmButtonText: "Log In",
                focusConfirm: false,
                preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
                }
            })
            
            if (formValues) {
                setEmail(JSON.stringify(formValues[0]))
                setEPassword(JSON.stringify(formValues[1]))
            }
        }
    return(
            <div className="container lg:mx-auto md:mx-auto p-4 px-12 grid grid-flow-col justify-between bg-white ">
                <img src="https://adelsadek.org/wp-content/uploads/2018/10/Web-Logo-50-GF-1.png" className="lg:w-[100%] md:w-[100%] w-[60%]" alt="" />
                <div className="lg:grid md:hidden hidden grid-flow-col" >
                    <ul className="grid grid-flow-col   pt-4">
                        {links.map((e)=>{
                            return(
                            <li key={e.name}> <Link to={e.to}     className="mx-5 pb-1 hover:text-[#8257f8]  hover:border-b-2 hover:border-[#8257f8] font-semibold">{e.name}</Link></li>
                            )
                        })}     
                    </ul>
                    <button 
                    className=" bg-[#8257f8] px-6 py-2 mt-1 ms-8 rounded-lg text-white w-[100%] h-[90%]"
                    onClick={()=>logFire()}
                    >Log In</button>
                </div>
                <button className="lg:hidden block" onClick={()=> checkMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                </button>
                { menu && 
                <div className="grid-flow-row absolute lg:top-0 md:top-[65px] top-[55px] w-[100%]  justify-center text-center h-22 left-0 bg-white z-50" >
                    <ul className="grid grid-flow-row justify-center text-center gap-5   pt-4">
                        {links.map((e)=>{
                            return(
                            <li key={e.name}> <Link to={e.to}     className="pb-1 hover:text-[#8257f8]  hover:border-b-2 hover:border-[#8257f8] font-semibold">{e.name}</Link></li>
                            )
                        })}     
                    </ul>
                    <button 
                    className=" bg-[#8257f8] px-6 py-2 mt-10 mb-5 rounded-lg text-white w-[40%] h-[90%]"
                    onClick={()=>logFire()}
                    >Log In</button>
                </div>}
            </div>
    )
}