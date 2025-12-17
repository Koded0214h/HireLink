import { Outlet } from "react-router"

const EmployerLayout = () => {
  return (
    <main>
        {/* Navbar */}

        <Outlet/>
    </main>
  )
}

export default EmployerLayout