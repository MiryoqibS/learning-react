import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export const PrivatePage = ({ allowed }) => {
    return allowed ? <Outlet /> : <Navigate to="/auth" />
}
