import React from 'react'
import { FiAlertCircle, FiXCircle} from 'react-icons/fi';

import { Container, Toast } from './style';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error" hasDescription={true}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Erro</strong>
          <p>Problema na autenticalção</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="info" hasDescription={true}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Erro</strong>
          <p>Problema na autenticalção</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  )
};

export default ToastContainer;
