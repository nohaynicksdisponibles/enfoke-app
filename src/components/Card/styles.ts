import { StylesTypes } from "@interfaces/styles.interfaces";

export const styles: StylesTypes = {
    card: { marginInline: 5, marginBottom: 5 },
    cardBody: { display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: -15 },
    ratingContainer: { width: 35, height: 35, borderRadius: '50%', backgroundColor: '#1f2823', position: 'absolute', top: 200, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    rating: { fontWeight: 'bold', color: 'white' },
    title: { overflow: 'visible', marginBottom: '5px' },
    image: { width: 150, height: 225, borderRadius: '10px', position: 'relative' },
    progress: {position: 'absolute', top: '0px', left: '0px', zIndex: 100},
    span: { color: 'white', fontWeight: 800 },
    bodyStyle: { height: 106 }
}


