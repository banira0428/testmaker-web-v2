import Head from "next/head";
import {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";

// 全画面に共通する外枠部分（ヘッダとフッタ）
export default class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>TestMaker</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <div className="flex-grow w-full max-w-5xl mx-auto">
          {this.props.children}
        </div>
        <Footer/>
      </div>)
  }
}