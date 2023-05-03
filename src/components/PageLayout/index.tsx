import { PropsWithChildren } from "react"
import Navbar, { NavbarType } from "@components/Navbar"
import { styles } from "./styles"
import { AnimatePresence, motion } from "framer-motion"

interface PageLayoutProps {
    type: NavbarType
}

const PageLayout = ({ children, type }: PropsWithChildren<PageLayoutProps>) => {
    return (
        <AnimatePresence >
            <Navbar type={type} />
            <motion.div
                style={styles.container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{duration: 0.6}}
                >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageLayout
