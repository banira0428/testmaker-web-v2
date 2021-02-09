import {Component} from "react";

interface AccordionState {
  isOpen: boolean
}

export default class MyAccordion extends Component<any, AccordionState> {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div className="m-3">
        <a href="#" onClick={() => {
          this.setState({
            isOpen: !this.state.isOpen
          })
        }}>
          <div className='flex'>
            <p className="rounded bg-primary text-white px-1 mt-0 mb-auto ml-0 mr-2">Q</p>
            <p className="flex-grow">{this.props.title}</p>

            <svg className='flex-none h-6 w-6 mt-0 mb-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                 fill="currentColor">
              {
                this.state.isOpen ?
                  <path fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"/>
                  :
                  <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"/>
              }
            </svg>
          </div>
        </a>

        <div
          className={(["transition-accordion"].concat(this.state.isOpen ? ["pt-5"] : ["invisible", "leading-0", "opacity-0", "h-0"])).join(' ')}>
          <div className='flex'>
            <p className="rounded bg-accent text-white px-1 mt-0 mb-auto ml-0 mr-2">A</p>
            <div className="flex-grow">
              {this.props.children}
            </div>
            <div className="flex-none h-6 w-6"/>
          </div>
        </div>
        <div className="mt-3 border-b-2"/>
      </div>
    )
  }

}