export default function Heading({title, subTitle}) {
  return (
    <div className="py-3 mt-5">
      <h2 className="text-5xl md:text-6xl font-bold  mr-auto ml-0">{ title }</h2>
      <p className="mr-auto md:text-xl mt-2 ml-0">{ subTitle }</p>
    </div>
  )
}