import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%; // 기본 폰트 크기 (16px)
    }

    body {
        font-size: 1.6rem;
        font-family: 'SF Pro Display', sans-serif;
        font-family: 'Bubbly', sans-serif;
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text}
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    :lang(ko) {
        h1, h2, h3 {
            word-break: keep-all;
        }
    }
`;

export default GlobalStyle;