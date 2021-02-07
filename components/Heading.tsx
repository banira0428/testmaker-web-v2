export default function Heading({title, subTitle}) {
  return (
    <div className="py-3 mt-5">
      <p className="text-5xl md:text-6xl font-bold  mr-auto ml-0">{ title }</p>
      <h2 className="mr-auto md:text-xl mt-2 ml-0 rounded-b">{ subTitle }</h2>
    </div>
  )
}