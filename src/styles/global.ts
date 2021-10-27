import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        background: #27282F;
        font-family: 'Poppins', sans-serif;
    }

    html{
        //15px
        @media(max-width: 1120px){
            font-size:93.75%;
        }

        //14px
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none; 
    }

    img{
      max-width: 100%;
    }
`;
