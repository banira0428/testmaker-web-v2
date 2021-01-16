import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

export default function Header() {
  return (
    <div>
      <header>
        <AppBar position="sticky">
          <Toolbar className="bg-primary">
            <Link href="/">
              <a>
                <Typography>
                  TestMaker
                </Typography>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  )
}