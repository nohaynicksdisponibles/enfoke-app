import { Button, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "@services/movies.service";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const Header = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [messageApi, contextHolder] = message.useMessage();

    const search = async (query: string) => {
        try {
            const response = await searchMovie(query).then(res => res.data)

            navigate(`/search?query=${query}`, { state: { results: response.results } });
        } catch {
            messageApi.open({
                type: 'error',
                content: t('Home:Error'),
            });
        }
    }

    return (
        <header className="header" style={styles.header}>
            {contextHolder}
            <div style={styles.subcontainer}>
                <Typography.Title style={styles.title}>{t('Home:Welcome')}</Typography.Title>
                <Typography.Title level={2} style={styles.secondTitle}>{t('Home:Movies')}</Typography.Title>

                <Input.Search
                    placeholder={t('Home:SearchMovies')!}
                    enterButton={
                        <Button type="primary">
                            {t('Home:Search')}
                        </Button>
                    }
                    size="large"
                    onSearch={(value) => search(value)}
                />
            </div>
        </header>
    )
}

export default Header;