export default function Content({title, content, img}) {
  return (
    <div className="bg-primary p-5 m-3 rounded shadow">
      <h2 className="text-2xl mb-3 font-bold text-white">{title}</h2>
      <p className="text-white">{content}</p>
      <img src={img} className="p-12"/>
    </div>
  )
}