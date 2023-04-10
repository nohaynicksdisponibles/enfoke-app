import { CSSProperties } from "react";

export interface StylesTypes {
    header: CSSProperties;
    title: CSSProperties;
    secondTitle: CSSProperties;
}

export const styles: StylesTypes = {
    header: { minHeight: 250, width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 50 },
    title: { color: 'white' },
    secondTitle: { color: 'white', marginTop: -15 }
}




