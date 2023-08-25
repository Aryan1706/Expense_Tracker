import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: NamedNodeMap;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(0.7rem, 0.5vw, 0.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color:red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake{
            0%{
                transform: translate(0);
            }
            25%{
                transform: translate(10px);
            }
            50%{
                tranform: translate(-10px);
            }
            75%{
                tranform: translate(10px);
            }
            100%{
                transform:translate(0);   
            }
        }
    }

`;