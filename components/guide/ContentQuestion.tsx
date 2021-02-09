import {AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function ContentQuestion({title}) {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon/>}
    >
      <p className="rounded bg-primary text-white px-1 pb-1 max-h-6">Q</p>
      <p className="ml-3">{title}</p>
    </AccordionSummary>
  )
}