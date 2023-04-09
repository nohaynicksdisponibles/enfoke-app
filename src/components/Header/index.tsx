import { Button, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../../services/movies.service";

const Header = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const search = async (query: string) => {
        try {
            const response = await searchMovie(query).then(res => res.data)

            navigate(`/search?query=${query}`, { state: { results: response.results } });
        } catch {
            messageApi.open({
                type: 'error',
                content: 'Hubo un error al buscar peliculas. Por favor intente nuevamente.',
            });
        }
    }

    return (
        <header className="header" style={{ minHeight: 250, width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 50 }}>
            {contextHolder}
            <div style={{ width: '80%' }}>
                <Typography.Title style={{ color: 'white' }}>Bienvenidos.</Typography.Title>
                <Typography.Title level={2} style={{ color: 'white', marginTop: -15 }}>Millones de películas por descubrir. Explora ahora.</Typography.Title>

                <Input.Search
                    placeholder={'Buscar una película'}
                    enterButton={
                        <Button type="primary">
                            Buscar
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