import { PropsWithChildren } from "react"
import Navbar, { NavbarType } from "@components/Navbar"
import { styles } from "./styles"

interface PageLayoutProps {
    type: NavbarType
}

const PageLayout = ({ children, type }: PropsWithChildren<PageLayoutProps>) => {
    return(
        <div style={styles.container}>
            <Navbar type={type} />
            {children}
        </div>
    )
}

export default PageLayout