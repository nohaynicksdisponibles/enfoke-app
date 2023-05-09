import { NavbarType } from "@components/Navbar"
import PageLayout from "@components/PageLayout"
import RelatedMovies from "@components/RelatedMovies";
import StateWrapper from "@components/StateWrapper";
import useInfoAndMovies from "@hooks/useInfoAndMovies";
import { Image, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import _ from "lodash";
import notfound from '@assets/notfound.png'
import { useParams } from "react-router-dom";
import { styles } from "./styles";

const PersonInfo = () => {
    const { id } = useParams();
    const { data, ...queryInfoAndMovies } = useInfoAndMovies(id!);

    return (
        <PageLayout type={NavbarType.PAGE}>
            <StateWrapper {...queryInfoAndMovies}>
                <Row wrap style={styles.row}>
                    <Image width={300} style={{width: 300, borderRadius: 5}} fallback={notfound} alt="Person Image" src={`https://image.tmdb.org/t/p/w500/${data?.info.profile_path}`} />
                    <Space direction="vertical" style={styles.space}>
                        <Title level={2}>{data?.info.name}</Title>
                        <Title level={4}>{'Biografía'}</Title>
                        <Paragraph>{data?.info.biography}</Paragraph>
                        <RelatedMovies data={data?.movies.cast} name="Conocido por"/>
                    </Space>
                </Row>
            </StateWrapper>
        </PageLayout>
    )
}

export default PersonInfo