import Head from 'next/head'
import Link from "next/link";
import {createMuiTheme} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#33b5e5",
    },
    text: {
      primary: "#ffffff"
    }
  },
})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <ThemeProvider theme={theme}>
        <header>
          <AppBar position="sticky">
            <Toolbar color="primary">
              <Link href="/">
                <a>
                  <Typography color="textPrimary">
                    TestMaker
                  </Typography>
                </a>
              </Link>
            </Toolbar>
          </AppBar>
        </header>

        <main>
        </main>

        <footer>
        </footer>

      </ThemeProvider>
    </div>
  )
}
