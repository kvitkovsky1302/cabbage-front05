import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Modal from '../Modal/Modal';
import ModalUniversal from '../ModalUniversal/ModalUniversal';
import defaultAvatar from './user.png';
import authSelectors from '../../redux/auth/auth-selectors';
import s from '../Header/Header.module.css';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => dispatch(authOperations.logOut());

  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);
  const avatar = useSelector(authSelectors.getUserAvatar);

  return (
    <>
      <div className={s.user}>
        <img
          src={avatar ? avatar : defaultAvatar}
          alt="user avatar"
          className={s.userAvatar}
        />
      </div>
      <div className={s.userName}>{name} </div>
      <button type="button" className={s.logout} onClick={toggleModal}>
        {showModal && (
          <Modal
            onClose={toggleModal}
            toggleEnterActiveBtn={handleLogout}
            toggleRegisterActiveBtn={toggleModal}
          >
            <ModalUniversal children={'Вы действительно хотите выйти?'} />
          </Modal>
        )}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_14_1485)">
            <path
              d="M9.99998 14H1.99998V1.99998H9.99998V2.99998H12V0H0V16H12V13H10V14H9.99998Z"
              fill="#CBCCD0"
            />
            <path
              d="M12.293 4.29297L10.8789 5.70702L12.1719 6.99998H7V8.99999H12.1719L10.8789 10.293L12.293 11.707L16 7.99997L12.293 4.29297Z"
              fill="#CBCCD0"
            />
          </g>
          <defs>
            <clipPath id="clip0_14_1485">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button type="button" onClick={toggleModal} className={s.tabletLogout}>
        {showModal && (
          <Modal
            onClose={toggleModal}
            toggleEnterActiveBtn={handleLogout}
            toggleRegisterActiveBtn={toggleModal}
          >
            <ModalUniversal children={'Вы действительно хотите выйти?'} />
          </Modal>
        )}
        Выйти
      </button>
    </>
  );
}
