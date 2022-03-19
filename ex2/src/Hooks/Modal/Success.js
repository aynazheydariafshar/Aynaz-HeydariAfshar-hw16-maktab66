import { Modal , Button } from 'react-bootstrap';

const Success = (props) => {
  return (
    <div>
      <Modal {...props} size="lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" dir='rtl'>
            عملیات با موفقیت انجام شد
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={props.onNo}>خارج شوید</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Success;