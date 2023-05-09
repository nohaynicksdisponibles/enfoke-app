import { StylesTypes } from "@interfaces/styles.interfaces";

export const styles: StylesTypes = {
    mainCard: { backgroundColor: 'rgba(255, 255, 255, 0)', border: 0 },
    mainTitle: { marginLeft: 25, color: 'white', fontWeight: 800 },
    headStyle: { border: 0 },
    descriptionTitle: { color: 'white' },
    descriptionCard: { backgroundColor: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', marginBottom: 15 },
    descriptionP: { color: 'white' },
    row: { display: 'flex', alignItems: 'stretch' },
    genreColor: { color: 'white' },
    genreCard: { backgroundColor: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', color: 'white', minHeight: 215, width: '48%', margin: '0px 12px 0px 8px' },
    detailColor: { color: 'white' },
    detailCard: { backgroundColor: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', color: 'white', alignSelf: 'stretch', minHeight: 215, width: '48%' }
}