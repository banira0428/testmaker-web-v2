import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import Link from "next/link";
import {Component} from "react";
import Transition from "react-transition-group/cjs/Transition";
import {menuItems} from "../lib/menuItems";

interface HeaderState {
  isShowMenu: boolean
}

export default class Header extends Component<any,HeaderState> {

  constructor(props) {
    super(props);
    this.state = { isShowMenu: false };
  }

  render() {
    return (
      <AppBar position="sticky" elevation={0}>
        <Toolbar className="bg-primary">
          <Link href="/">
            <a>
              <img src="/img/logo_text.webp" className="h-12" alt={"暗記メーカー"}/>
            </a>
          </Link>
          <button className="focus:outline-none lg:hidden ml-auto mr-0" onClick={() => {
            this.setState({
              isShowMenu: !this.state.isShowMenu
            })
          }}>
            <MenuIcon/>
          </button>
        </Toolbar>
        <Transition
          in={this.state.isShowMenu}
          timeout={200}>
          {
            status => {
              return (
                <div
                  className={['z-50', 'w-full', 'h-full', 'fixed', 'text-white', 'bg-primary', 'overflow-y-auto', 'p-3', 'top-0', `fade-${status}`].join(' ')}
                  onClick={() => {
                    this.setState({
                      isShowMenu: false
                    })
                  }}>
                  <ul className="flex flex-col justify-center ml-auto mr-auto text-left w-2/3 my-12">
                    {
                      menuItems.map((nav) =>
                        <li key={nav.title} className="p-4 text-xl">
                          <Link href={nav.link}>
                            <a>{nav.title}</a>
                          </Link>
                        </li>
                      )
                    }
                  </ul>
                </div>
              )
            }
          }
        </Transition>
      </AppBar>
    )
  }
}