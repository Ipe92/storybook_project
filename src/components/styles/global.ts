/*
https://blog.logrocket.com/using-styled-components-in-typescript-a-tutorial-with-examples/

In the styles folder, create a file and name it global.ts.
This file will contain our global styles. Global styles are styles that are used by all elements in a page.

These styles ensure that there is no margin or padding on the page, except in places where they are explicitly stated.
*/

import styled, { createGlobalStyle, css } from "styled-components";

// theme is now fully typed
export const MyComponent = styled.div`
	color: ${(props) => props.theme.colors.main};
`;

// theme is also fully typed
export const GlobalStyle = createGlobalStyle`
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

// and this theme is fully typed as well
export const cssHelper = css`
	border: 1px solid ${(props) => props.theme.borderRadius};
`;
