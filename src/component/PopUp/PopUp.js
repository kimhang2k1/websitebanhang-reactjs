import SuccessNotification from "./SuccessNotification/SuccessNotification";

function PopUp({ triggle }) {
  return triggle ? <SuccessNotification /> : null;
}

export default PopUp;
