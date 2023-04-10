import { CSSProperties } from "react";

export interface StylesTypes {
    card: CSSProperties;
    cardBody: CSSProperties;
    ratingContainer: CSSProperties;
    rating: CSSProperties;
    title: CSSProperties;
    image: CSSProperties;
    bodyStyle: CSSProperties;
}

export const styles: StylesTypes = {
    card: { marginInline: 5, marginBottom: 5 },
    cardBody: { display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: -15 },
    ratingContainer: { width: 35, height: 35, borderRadius: '50%', backgroundColor: '#E64830', position: 'absolute', top: 200, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    rating: { fontWeight: 'bold', color: 'white' },
    title: { overflow: 'visible', marginBottom: '5px' },
    image: { width: 150, height: 225, borderRadius: '10px', position: 'relative' },
    bodyStyle: { height: 106 }
}


