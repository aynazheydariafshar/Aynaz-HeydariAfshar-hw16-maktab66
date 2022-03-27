import { Modal , Button } from 'react-bootstrap';

const Success = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        عملیات با موفقیت انجام شد
      </Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button onClick={props.onHide}>خارج شوید</Button>
    </Modal.Footer>
  </Modal>
  );
}

export default Success;