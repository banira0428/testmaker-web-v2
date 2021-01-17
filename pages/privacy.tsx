import Layout from "../components/Layout";
import H1 from "../components/H1";

export default function Privacy() {
  return (
    <div>
      <Layout>
        <div className="m-3">
          <H1 title={"プライバシーポリシー"}/>

          <p className="text-right mb-3">最終更新日 2021年1月17日</p>

          <p>本サービスの運営者である ke-ta （以下、「当社」といいます）は、「暗記メーカー」（以下、「本サービス」といいます）による、ユーザーの個人情報の取り扱いについて、以下の通りプライバシーポリシー（以下、本ポリシー）を定めます</p>

          <h2 className="text-xl py-2 mb-3 border-b-2 border-primary">
            アクセス解析サービスについて
          </h2>

          <p>
            本サービスでは、ユーザーの使用状況を把握するために Google 社のサービスである Google Analytics を利用しています。ここで収集した情報には個人を識別する情報は含まれておりません。また、それらの情報は、Google 社のウライバシーポリシーに基づき管理されます。
          </p>

          <h2 className="text-xl py-2 mb-3 border-b-2 border-primary">
            アプリ内で配信されている広告について
          </h2>

          <p>
            本サービスでは、第三者配信の広告サービス（Admob）を利用しています。この広告事業者は、広告表示のためにお客様の情報の一部を送信する場合があります。
          </p>

        </div>
      </Layout>
    </div>
  )
}