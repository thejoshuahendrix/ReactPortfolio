import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const {} = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{height:'70px', marginTop:'50px', marginBottom:"50px"}} color="danger" onClick={toggle} block>
        Who Am I
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-content">
        <ModalHeader toggle={toggle}>Joshua Hendrix</ModalHeader>
        <ModalBody>
          I am a software developer with a front end focus. I love Javascript,
          React, Node, and Express. I love working with Mongo and non-relational
          databases. I love working with JS but I am language agnostic. I know Java, C#, PHP, Python, and C++ as well.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cool
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
