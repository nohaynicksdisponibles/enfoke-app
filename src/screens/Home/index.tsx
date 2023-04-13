import _ from "lodash"
import { NavbarType } from "@components/Navbar"
import PageLayout from "@components/PageLayout"
import homeConfig, { HomeOptionsType } from "@config/homeConfig"

const Home = () => {
    return (
        <PageLayout type={NavbarType.HOME}>
            {
                _.map(homeConfig, ({ Component, props }: HomeOptionsType, index: number) => (
                    <Component key={index} {...props} />
                ))
            }
        </PageLayout>
    )
}

export default Home