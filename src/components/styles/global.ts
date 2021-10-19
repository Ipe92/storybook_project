/*
https://blog.logrocket.com/using-styled-components-in-typescript-a-tutorial-with-examples/

In the styles folder, create a file and name it global.ts.
This file will contain our global styles. Global styles are styles that are used by all elements in a page.

These styles ensure that there is no margin or padding on the page, except in places where they are explicitly stated.
*/

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
        font-family: "Open Sans", sans-serif;
    }
    #root {
        margin:0 auto;
    }
`;
