import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className="container mx-auto w-full max-w-[700px] flex flex-col py-4">
            <Navbar />

            <main className="flex-1 mt-10">
                <Outlet />
            </main>
        </div>
    )
}
