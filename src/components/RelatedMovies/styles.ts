import { StylesTypes } from "@interfaces/styles.interfaces";

export const styles: StylesTypes = {
    gradientRow: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 50,
        height: 444,
        zIndex: 20
    },
    gradientTitle: {
        marginInline: 5,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        margin: 5
    },
    customScroll: {
        display: 'flex', 
        width: '100%', 
        minHeight: 400, 
        justifyContent: 'flex-start', 
        overflowX: 'scroll', 
        maxWidth: '100vw'
    },
    row: {
        position: 'relative',
        margin: '10px 0px',
        minHeight: 444,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}