"use client" 
 
import { useRouter } from 'next/navigation'; 
import React, { useState } from 'react' 
 
const RegisterPage = () => { 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, serConfirmPassword] = useState(""); 
    const router = useRouter(); 
 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        if(password !== confirmPassword) { 
            alert("password do not match") 
            return; 
        } 
 
        try { 
            //react query ka uska krna ha khud 
            //loading, error, debounce 
            const res = await fetch("api/auth/register", { 
                method: "POST", 
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                    email, 
                    password 
                }) 
            }) 
            const data = await res.json();  
 
            if(!res.ok){ 
                throw Error(data.error || "Registration failed") 
            } 
 
            console.log(data); 
            router.push("/login"); 
 
        } catch (error) { 
            console.error(error); 
        } 
 
    } 
 
 
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4"> 

        <div className="w-full max-w-md">

            {/* Register Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Create Account
                    </h1>

                    <p className="text-gray-300 text-sm">
                        Register to get started
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5"> 

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                            Email
                        </label>

                        <input 
                            type="email" 
                            placeholder='Email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                        /> 
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                            Password
                        </label>

                        <input 
                            type="password" 
                            placeholder='Password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                        /> 
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">
                            Confirm Password
                        </label>

                        <input 
                            type="password" 
                            placeholder='confirmPassword' 
                            value={confirmPassword} 
                            onChange={(e) => serConfirmPassword(e.target.value)} 
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
                        /> 
                    </div>

                    {/* Register Button */}
                    <button 
                        type='submit'
                        className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                    >
                        Register
                    </button>

                </form> 

                {/* Login Link */}
                <div className="mt-7 text-center"> 
                    <p className="text-sm text-gray-300">
                        Already have an account?{" "}
                        <a 
                            href="/login"
                            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                        >
                            Login
                        </a>
                    </p> 
                </div>

            </div>

            {/* Bottom Text */}
            <p className="text-center text-gray-500 text-xs mt-6">
                Secure registration • Join us today
            </p>

        </div>
    </div> 
  ) 
} 
 
export default RegisterPage
