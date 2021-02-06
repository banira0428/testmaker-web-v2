import Typography from "@material-ui/core/Typography";

export default function Heading({text}) {
  return (
    <div className="relative mb-6">
        <div className="absolute w-3/4 bg-primary h-full rounded-r"/>
        <div className="z-10 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
          <Typography className="text-white">
            {text}
          </Typography>
        </div>
    </div>
  )
}