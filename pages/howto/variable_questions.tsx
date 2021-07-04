import Layout from "../../components/Layout";
import Head from "next/dist/next-server/lib/head";
import Heading from "../../components/Heading";
import Content from "../../components/index/Content";
export default function VariableQuestions() {
  const list = [  {
    title: "記述問題",
    link: "write"
  },
  {
    title: "選択問題",
    link: "select"
  },
  {
    title: "完答問題",
    link: "complete"
  },
  {
    title: "選択完答問題",
    link: "select_complete"
  }]
  return (
    <div>
      <Head>
        <title>暗記メーカー | 様々な問題形式</title>
      </Head>
      <Layout>
        <div className="mx-auto max-w-5xl p-3">

          <Heading title="HowTo" subTitle="使い方 / 多彩な問題形式" />
          <p className="mt-6">このページでは、アプリ内で作成できる多彩な問題形式の紹介をします。</p>

          <p className="mt-3">目次</p>
                    
          <ol>
            {list.map(it =>
              <li><a href={`#${it.link}`} className="text-primary">{it.title}</a></li>
            )}
          </ol>
            
          <p id="write" className="mt-10 text-2xl border-l-4 pl-3 border-primary">記述問題</p>
            

           <p className="mt-3">問題文に対して回答を自分で打ち込む形式の問題です。
         社会の歴史問題など、一問一答対策に便利です。</p>         
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/W_test.jpg"></img>
        
          <p id="select" className="mt-10 text-2xl border-l-4 pl-3 border-primary">選択問題</p>
          <p className="mt-3">複数の選択肢から正しい選択肢を1つ選ぶ形式の問題です。（正しい選択肢が複数ある場合は選択完答問題で作成してください。）</p>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/S_test.jpg"></img>


          <p id="complete" className="mt-10 text-2xl border-l-4 pl-3 border-primary">完答問題</p>
          <p className="mt-3">問題文に対して自分で正しい回答を複数入力する形式の問題です。</p>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/C_test.jpg"></img>

          <p id="select_complete" className="mt-10 text-2xl border-l-4 pl-3 border-primary">選択完答問題</p>
          <p className="mt-3">複数の選択肢から正しい選択肢を全て選ぶ形式の問題です。正しい選択肢が複数ある場合はこちらの選択完答問題で作成してください。</p>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/SC_test.jpg"></img>
          <p className="mt-3">正しい選択肢の数、間違いの選択肢の数は自分でカスタムすることができます。</p>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/SC_edit.jpg"></img>
          <p className="mt-3">また、「間違いの選択肢を考えるのがめんどくさい...」そんなときは「選択肢の自動生成」をONにすると、同一問題集内の別問題の選択肢から自動で間違いの選択肢が生成されます。</p>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/SC_autochoicemaker_edit.jpg"></img>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/SC_autochoicemaker.jpg"></img>
          <p className="mt-3">注意！問題集内の問題数が1問のみの場合、間違いの選択肢の自動生成はできません。複数の問題がある場合のみ自動生成可能です。</p>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/SC_autochoicemaker_error.jpg"></img>

          <p className="mt-6">暗記メーカーを最大限活用！＋α機能！</p>
          <p className="mt-3">①「正解時も解説を表示する」をONにすれば、正解の時も解説を見ることができます。</p>
          
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/W_correct_explanation.jpg"></img>
          <p className="mt-3">②画像の挿入も可能で、画像と紐づけて記憶させることが出来ます。
          歴史問題や化学・生物など
         {/* ここいい文章ないかな */}
         　　　　　　　　で有効活用できます。</p>
         <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/W_explanation.jpg"></img>
          
          <p className="mt-3">こんな感じになります。自分の手でどんどんカスタムして、自分だけのオリジナル問題集をつくりましょう！</p>
          <img className="mt-6 w-1/2 max-w-md mx-auto" src="/img/W_edit.jpg"></img>
          {/* <p> や <img> 以外にもいろいろタグがあるので、必要に応じてググるなり質問するなりしてもらえると */}

        </div>
      </Layout>
    </div>
  )
}