function Modal(props) {

    function deleteHandler() {
        props.onDeletes();
    }

    function cancelHandler() {
        props.onCancels();
    }

    return <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        <button className="btn" onClick={deleteHandler}>Yes</button>
    </div>

}

export default Modal;