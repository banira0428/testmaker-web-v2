import Layout from "../components/Layout";
import Heading from "../components/Heading";
import {Accordion, AccordionDetails} from "@material-ui/core";
import ContentQuestion from "../components/guide/ContentQuestion";
import Head from "next/head";

export default function Guide() {
  return (
    <div>
      <Head>
        <title>暗記メーカー | よくある質問</title>
      </Head>
      <Layout>
        <div className="max-w-5xl mx-auto">
          <div className="mt-3 p-3">
            <Heading title={'FAQ'} subTitle={'よくある質問'}/>
          </div>
          <div className="m-1">

            <Accordion elevation={0}>
              <ContentQuestion title={'問題集を他の端末で利用することは可能ですか？'}/>
              <AccordionDetails>
                <p>はい、可能です。問題集を他の端末で使用したい場合は、トップページで該当の問題集をタップした後に、「共有する」を選択してください。</p>
              </AccordionDetails>

            </Accordion>
            <Accordion elevation={0}>
              <ContentQuestion title={'問題集のタイトルを後から編集することは可能ですか？'}/>
              <AccordionDetails>
                <p>はい、可能です。該当の問題集の編集画面に移動していただき、画面右上のメニューから問題集情報の編集画面に移動することができます。</p>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <ContentQuestion title={'フォルダの削除は可能ですか？'}/>
              <AccordionDetails>
                <p>はい、可能です。フォルダ編集画面の「既存のフォルダ」の一覧から、削除したいフォルダを長押しすることで、該当のフォルダを削除することができます</p>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <ContentQuestion title={'フォルダ名を後から編集することは可能ですか？'}/>
              <AccordionDetails>
                <p>いいえ、現在該当の機能は実装されておりません。（需要があれば、今後のアップデートで実装するかもしれません）</p>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <ContentQuestion title={'CSVファイルのインポートは可能ですか？'}/>
              <AccordionDetails>
                <div>
                  <p>はい、可能です。CSV形式で問題を編集したい場合は、以下のテンプレートファイルの書式に従ってください。ファイルの作成後は、アプリ内サイドメニューの「ファイルのインポート」より、インポートすることが可能です</p>
                  <p className="mt-3 text-primary">
                    <a href="/TestMaker_template.csv" download>TestMaker_template.csv</a>
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <ContentQuestion title={'CSVファイルをインポートした際に問題集が読み込まれません。何が原因ですか？'}/>
              <AccordionDetails>
                <div>
                  <p>まず初めに、お手持ちの端末にファイルが正しく転送されているか（他のアプリで該当のファイルが問題なく開けるかどうか）を確認してください。ファイルが正しく転送されているにも関わらず問題集が読み込めていない場合は、以下のテンプレートファイルと比較し、書式に間違いがないかをご確認ください。</p>
                  <p className="mt-3 text-primary">
                    <a href="/TestMaker_template.csv" download>TestMaker_template.csv</a>
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <p className="mt-5 p-5">このページの内容を見ても疑問点が解決しない場合は、<a href="https://forms.gle/MW6JMFmKRUop2enx8" className="text-primary">お問い合わせフォーム</a>をご利用ください</p>
        </div>
      </Layout>
    </div>
  )
}