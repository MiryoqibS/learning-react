import React from "react"
import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="container mx-auto flex flex-col">
            <Navbar />

            <main className="py-4">
                <Outlet />
            </main>
        </div>
    )
}
