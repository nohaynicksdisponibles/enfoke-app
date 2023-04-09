import { PropsWithChildren } from "react"
import Navbar, { NavbarType } from "../Navbar"

const Layout = ({ children }: PropsWithChildren) => {
    return(
        <>
            <Navbar type={NavbarType.PAGE} />
            {children}
        </>
    )
}

export default Layout