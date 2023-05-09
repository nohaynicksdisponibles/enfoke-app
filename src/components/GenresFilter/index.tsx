import { Radio } from "antd"
import { IGenres } from "@interfaces/movies.interfaces"
import { styles } from "./styles";
import _ from "lodash";

interface GenresFilterProps {
    genres: IGenres;
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

const GenresFilter = ({genres, selectedValue, setSelectedValue}: GenresFilterProps) => {
    return (
        <Radio.Group value={selectedValue} style={styles.radioGroup} onChange={e => setSelectedValue(e.target.value)}>
            {_.map(genres?.genres, genre => (
                <Radio.Button key={genre.id} value={genre.id}>{genre.name}</Radio.Button>
            ))}
        </Radio.Group>
    )
}

export default GenresFilter