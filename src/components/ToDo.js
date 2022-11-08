//state is important to change what you see on the ui
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
//the props parameter allows you to re-use components in other files
function ToDo (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    //return something that can be rendered
    function deleteHandler() {
        setModalIsOpen(true);
    }
    function closeHandler() {
        setModalIsOpen(false);
    }
    return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Backdrop onCancels={closeHandler}/>}
      {modalIsOpen && <Modal onCancels={closeHandler} onDeletes={closeHandler} />}
    </div>
    );
}
//this allows it to be used outside of this file
export default ToDo