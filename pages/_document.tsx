import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang={"ja"}>
      <Head>
        <title>暗記メーカー</title>
        <link rel="icon" href="/favicon.ico"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6JVD2364HD"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6JVD2364HD', {
                          page_path: window.location.pathname,
                        });
                        `,
          }}
        />
        <meta name="description" content="テスト勉強用アプリ「暗記メーカー」は、自学自習の効率化を目的とした問題集作成用のアプリです。資格習得のための勉強や、複数人への問題集の配布のために利用することが可能です"/>
        <meta property="og:site_name" content="暗記メーカー" />
        <meta property="og:type" content="website"/>
        <meta name="twitter:title" content="テスト勉強用アプリ「暗記メーカー」" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:image" content="https://ankimaker.com/img/logo-testmaker.png"/>
        <meta property="og:description" content="暗記メーカーは「自学自習の効率化」を目的とした問題集作成アプリです" />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }

}