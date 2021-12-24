import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import ModalUniversal from '../ModalUniversal/ModalUniversal';

export default function Example() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Кнопка на которую кидать модалку
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalUniversal
            children={'Вы действительно хотите выйти?'}
            onClose={toggleModal}
          />
        </Modal>
      )}
    </div>
  );
}
