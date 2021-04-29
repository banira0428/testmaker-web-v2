import Link from "next/link";
import {Component} from "react";
import Transition from "react-transition-group/cjs/Transition";
import {menuItems} from "../lib/menuItems";
import { login, logout, auth } from "../lib/firebase_auth";

interface HeaderState {
  isShowMenu: boolean
}

export default class Header extends Component<any, HeaderState> {

  constructor(props) {
    super(props);
    this.state = {isShowMenu: false};
  }

  render() {
    return (
      <header className="sticky bg-primary z-50">
        <div className="flex mx-3">
          <Link href="/">
            <a>
              <img src="/img/logo_text.webp" className="h-12" alt={"暗記メーカー"}/>
            </a>
          </Link>
          <div className="flex-grow"/>
          {
            auth.currentUser 
            ? <a href="#" className="my-auto text-white" onClick={() => logout()} >ログアウト</a>
            : <a href="#" className="my-auto text-white" onClick={() => login()} >ログイン</a>
          }
          <button className="focus:outline-none lg:hidden" aria-label={'メニューボタン'} onClick={() => {
            this.setState({
              isShowMenu: !this.state.isShowMenu
            })
          }}>
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
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
      </header>
    )
  }
}