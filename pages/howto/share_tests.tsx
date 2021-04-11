import Layout from "../../components/Layout";
import Head from "next/dist/next-server/lib/head";
import Heading from "../../components/Heading";

export default function ShareTests() {
  return (
    <div>
      <Head>
        <title>暗記メーカー | 問題集の共有</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-5xl p-3">

          <Heading title="HowTo" subTitle="使い方 / 問題集の共有"/>
          <p className="mt-6">このページでは、アプリ内で作成した問題集を複数人で共有する方法について解説します。</p>

          <h3 className="text-3xl md:text-3xl font-bold mr-auto ml-0 mt-6">1. アプリへのログイン</h3>
          <p className="mt-6">アプリを起動後「問題集（共有）」をタップした後、「ログイン」ボタンをタップし、アプリへのログインを行ってください。</p>
          {/* ログインボタンの映っているスクショ */}

          <h3 className="text-3xl md:text-3xl font-bold mr-auto ml-0 mt-6">2. 問題集のアップロード</h3>
          <p className="mt-6">画面右下のボタンをクリックし、「問題集のアップロード」画面に移動してください。その後、アップロードしたい問題集を選択し、「アップロード」ボタンをタップすることで、問題集をサーバ上にアップロードします。</p>
          {/* 右下のボタンを強調したスクショ */}
          {/* 「問題集のアップロード」画面のスクショ */}

          <h3 className="text-3xl md:text-3xl font-bold mr-auto ml-0 mt-6">3. 共有用リンクの発行</h3>
          <p className="mt-6">「問題集（共有）」にて、アップロードされた問題集を選択し、「共有」をタップしてください。ここで発行されたリンクを共有したい相手に送信することで、リンクから問題集をダウンロードすることが可能となります。</p>
          {/* 「問題集（一覧）」画面のスクショ（アップロードしたの問題集が存在している状態） */}
          {/* 「ダウンロードする」「共有」「削除」のメニュー画面のスクショ */}
          {/* 発行したリンクを他の人に送っているのがわかるようなスクショ（e.g. LINEのトーク画面） */}


        </div>
      </Layout>
    </div>
  );
}
