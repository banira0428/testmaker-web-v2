export default function PhotoContent({title, content, img}) {
  return (
    <div className="bg-primary p-5 m-4 rounded shadow">
      <h2 className="text-2xl mb-3 font-bold text-white">{title}</h2>
      <p className="text-white">{content}</p>
      <div className="max-w-xs mx-auto">
        <img src={img} className="p-6"/>
      </div>
    </div>
  )
}