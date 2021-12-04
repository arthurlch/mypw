import { Modal } from "react-bootstrap";

const ProjectCardsModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{subheading}</h4>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectCardsModal;
