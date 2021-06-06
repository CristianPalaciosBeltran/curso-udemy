import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        //font-size: 10px;
        --primary: #0093FF;
        --light: #ffffff;
        --dark: #09122F;
        --blue: #96DFFE;
        --muted: #69779D;
        --lightGrey: #EBEEFA;
        --grey: #F6F6F6;
        --basefontFamily: Avenir, Helvetica, sans-serif;
        --headline1: medium 3.5rem / normal var(--basefontFamily);
        --headline3: medium 1.875rem/ normal var(--basefontFamily);
        --leadRegular: normal 1.25rem/ normal var(--basefontFamily);
        --paragraphRegular: normal 1rem/ normal var(--basefontFamily);
        --leadMedium: medium 1.25rem/ normal var(--basefontFamily);
        --paragraphMedium: medium 1rem/normal var(--basefontFamily);
        --smallRegular: normal 0.75rem/normal var(--basefontFamily);
        --smallMedium: medium 0.75rem/normal var(--basefontFamily);
    }
    
    body {
       font-family: 'Rubik', sans-serif;
       background: var(--dark);
       color: var(--light);
       font-size: var(--paragraphRegular);
    }

    .bg-dark{
        background: var(--dark)!important;
    }

    ul {
        list-style: none;
        padding: 0;
        font-size: var(--paragraphRegular);
        margin: 0;
        li{
            margin: 1rem;
        }
    }
`;
