import { DefaultTheme } from "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string,
            secondary: string,
            
            effect: string,
            effect_secondary: string,
            
            background: string,
            text: string,
            shadow: string,
    
            info: string,
            warning: string,
            success: string,
            danger: string,
        }
    }
}
