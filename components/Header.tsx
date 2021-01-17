import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header>
        <AppBar position="sticky" elevation={0}>
          <Toolbar className="bg-primary">
            <Link href="/">
              <a>
                <img src="/img/logo_text.png" className="h-12"/>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  )
}