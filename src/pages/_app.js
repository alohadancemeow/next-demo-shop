// import '../../styles/globals.css'
import { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import { StoreProvider } from '../context/Store';

// useing antd css
const antdCss = css`
  ${import('antd/dist/antd.css')}
`;

// set global style --> reset css
const GlobalStyle = createGlobalStyle`

  ${antdCss}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    /* margin: 0;
    padding: 0; */
    box-sizing: border-box;
    font-family: 'Fredoka', sans-serif;
    position: relative;
  }
`

// set theme
const theme = {
  colors: {
    primary: '#058335', //green
    secondary: '#f35858', //red
    accent: '#588ef3' //blue
  },
  textColors: {
    primary: '#fff',
    secondary: 'gray',
    warnning: 'orange',
    error: '#f35858',
    success: '#52c41a' // strong green
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.NEXT_PUBLIC_SANDBOX_PUBLIC_KEY
    }
  }
}
