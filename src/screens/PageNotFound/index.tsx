import { Button, Result } from "antd"
import PageLayout from "@components/PageLayout"
import { useNavigate } from "react-router-dom"
import { NavbarType } from "@components/Navbar";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <PageLayout type={NavbarType.PAGE}>
            <Result
                status="404"
                title="404"
                subTitle={t('PageNotFound:error')}
                extra={<Button type="primary" onClick={() => navigate('/')}>{t('PageNotFound:backToHome')}</Button>}
            />
        </PageLayout>
    )
}

export default PageNotFound