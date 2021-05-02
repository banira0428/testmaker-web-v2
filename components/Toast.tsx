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
        return (
          <div
            className={[
              "z-20",
              "w-full",
              "fixed",
              "bottom-5",
              `fade-${status}`,
            ].join(" ")}
          >
            <p className="max-w-7xl mx-auto text-center bg-opacity-80 bg-gray-400 py-3 text-white rounded font-semibold text-md">
              {message}
            </p>
          </div>
        );
      }}
    </Transition>
  );
}
