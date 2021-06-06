import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #0093FF;
        --light: #ffffff;
        --dark: #09122F;
        --blue: #96DFFE;
        --muted: #69779D;
        --lightGrey: #EBEEFA;
        --grey: #F6F6F6;
        --basefontFamily: 'Rubik', sans-serif;
        --headline1: 3.5rem;
        --headline3: medium 1.875rem/ normal var(--basefontFamily);
        --leadRegular: normal 1.25rem/ normal var(--basefontFamily);
        --paragraphRegular: 1rem;
        --leadMedium:  1.25rem;
        --paragraphMedium: medium 1rem/normal var(--basefontFamily);
        --smallRegular: normal 0.75rem/normal var(--basefontFamily);
        --smallMedium: medium 0.75rem/normal var(--basefontFamily);
    }
    
    body {
       font-family: var(--basefontFamily);
       background: var(--dark);
       color: var(--light);
       font-size: var(--paragraphRegular);
    }

    // margins, paddings, layouts
    .pb-6 {
        margin-bottom: 6.25rem;
    }

    section {
        padding: 6.25rem 0;
    }

    // textos
    .lead { font-size: var(--leadMedium); }

    .text-muted { color: var(--muted) !important; }

        h1 { font-size: var(--headline1); }
    @media (min-width: 992px) { 

        .testimonial-card .row .col-lg-6:first-child {
            padding: 5rem;
            border-radius: 1.25rem 0 0 1.25rem;
        }
    }
`;
