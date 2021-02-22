import Layout from "../../components/Layout";
import Head from "next/dist/next-server/lib/head";
import Heading from "../../components/Heading";

export default function VariableQuestions() {
  return (
    <div>
      <Head>
        <title>暗記メーカー | 様々な問題形式</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-5xl p-3">

           {/* p タグで段落を表示 */}
          <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章</p>

           {/* img タグで画像を表示。 src 属性でファイルの場所を指定する（つまり、撮影したスクショは自分で testmaker_web_v2/public/img 内に配置しておく必要がある） */}
          <img src="/img/logo_text.webp"/>

          {/* <p> や <img> 以外にもいろいろタグがあるので、必要に応じてググるなり質問するなりしてもらえると */}

        </div>
      </Layout>
    </div>
  )
}