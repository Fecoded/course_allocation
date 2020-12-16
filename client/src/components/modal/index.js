import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  toggleModalHidden,
  toggleAllocateModalHidden,
} from "../../redux/modal/modal.action";
import { selectToggleHidden } from "../../redux/modal/modal.selector";

const Modal = ({
  toggleModalHidden,
  toggleAllocateModalHidden,
  hidden,
  children,
}) => {
  return (
    <div className="modalDialog">
      <div className="modal-content">
        <p
          onClick={!hidden ? toggleModalHidden : toggleAllocateModalHidden}
          className="close"
        >
          &times;
        </p>
        {children}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModalHidden: () => dispatch(toggleModalHidden()),
  toggleAllocateModalHidden: () => dispatch(toggleAllocateModalHidden()),
});

const mapStateToProps = createStructuredSelector({
  hidden: selectToggleHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
