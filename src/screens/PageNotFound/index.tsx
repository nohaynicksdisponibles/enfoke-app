import { Button, Result } from "antd"
import PageLayout from "@components/PageLayout"
import { useNavigate } from "react-router-dom"
import { NavbarType } from "@components/Navbar";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <PageLayout type={NavbarType.PAGE}>
            <Result
                status="404"
                title="404"
                subTitle="Error. La pagina visitada no existe."
                extra={<Button type="primary" onClick={() => navigate('/')}>Regresar a Home</Button>}
            />
        </PageLayout>
    )
}

export default PageNotFound