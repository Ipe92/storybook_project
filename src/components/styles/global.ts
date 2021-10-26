/*
https://blog.logrocket.com/using-styled-components-in-typescript-a-tutorial-with-examples/

In the styles folder, create a file and name it global.ts.
This file will contain our global styles. Global styles are styles that are used by all elements in a page.

These styles ensure that there is no margin or padding on the page, except in places where they are explicitly stated.
*/

import { createGlobalStyle } from "styled-components";

// theme is also fully typed
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: "Roboto","Open Sans";
        text-align: center;
        font-weight: 500;
        /* background-color:#c0c0c0; */
        line-height: 1.5em;
    }
    #root {
        margin:0 auto;
    } 
`;
