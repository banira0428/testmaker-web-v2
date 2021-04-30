import { useContext } from "react";
import Transition from "react-transition-group/cjs/Transition";
import { ToastContext } from "./ToastContext";

export default function Toast() {

  const { message, setMessage } = useContext(ToastContext);

  return (
    <Transition
        in={message !== ""}
        timeout={200}
        onEntered={() => {
          setTimeout(() => setMessage(""), 2000);
        }}
      >
        {(status) => {
          console.log(status);
          return (
            <div
              className={[
                "z-50",
                "mt-3",
                "w-full",
                "fixed",
                "top",
                `fade-${status}`,
              ].join(" ")}
            >
              <p className="max-w-7xl mx-auto text-center bg-primary py-2 text-white rounded font-semibold">{message}</p>
            </div>
          );
        }}
      </Transition>
  )
}