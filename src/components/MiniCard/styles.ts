import { CSSProperties } from "react";

export interface StylesTypes {
    card: CSSProperties;
    image: CSSProperties;
    container: CSSProperties;
}

export const styles: StylesTypes = {
    card: { minWidth: '50%', maxWidth: '50%', margin: '15px 0px', cursor: 'pointer' },
    image: { width: 100, marginRight: 16, display: 'inline-block' },
    container: { display: 'flex', alignItems: 'center' }
}



