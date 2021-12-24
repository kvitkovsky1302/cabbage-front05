import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';

import Modal from '../Modal/Modal';
import ModalUniversal from '../ModalUniversal/ModalUniversal';

import authSelectors from '../../redux/auth/auth-selectors';
import styles from '../Header/Header.module.css';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  // }, [isModalOpen]);

  // const desctopOrLaptopSize = useMediaQuery({
  //   query: '(min-width: 768px)',
  // });

  // const mobile = useMediaQuery({
  //   query: '(max-width: 767px)',
  // });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => dispatch(authOperations.logOut());

  const dispatch = useDispatch();

  // const userEmail = useSelector(state => state.auth.user.email);
  // const userName = userEmail ? nameFromEmail(userEmail) : 'User Name';

  const name = useSelector(authSelectors.getUsername);

  return (
    <>
      <button type="button" className={styles.user}>
        U
      </button>
      <button type="button" className={styles.userName}>
        {name}
      </button>
      <button
        type="button"
        onClick={(handleLogout, toggleModal)}
        className={styles.logout}
      >
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
      <button
        type="button"
        onClick={(handleLogout, toggleModal)}
        className={styles.tabletLogout}
      >
        Выйти
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalUniversal
            children={'Вы действительно хотите выйти?'}
            onClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
}

// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';

// import s from './HeaderHome.module.scss';
// import Icons from '../../Icons';
// import LogoutBtn from '../LogoutBtn';
// import Modal from '../Modal';
// import ModalBody from '../ModalBody';
// import { nameFromEmail } from '../../utils/nameFromEmail';

// export default function HeaderHome() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const togleModal = () => setIsModalOpen(state => !state);

//   //const dispatch = useDispatch();
//   const userEmail = useSelector(state => state.auth.user.email);
//   const userName = userEmail ? nameFromEmail(userEmail) : 'User Name';
//   //OK console.log('email=', userEmail, ', name=', userName);

//   useEffect(() => {
//     document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
//   }, [isModalOpen]);

//   const desctopOrLaptopSize = useMediaQuery({
//     query: '(min-width: 768px)',
//   });

//   const mobile = useMediaQuery({
//     query: '(max-width: 767px)',
//   });

//   return (
//     <div className={s.header}>
//       <Icons name="logo" className={s.header__logo} />

//       <div className={s.login__container}>
//         <div className={s.header__logout}>
//           <Icons name="U" width="8 " height="14" />
//         </div>
//         {mobile && (
//           <LogoutBtn onClick={togleModal}>
//             <Icons name="logout-1" width="16" height="16" />
//           </LogoutBtn>
//         )}
//         {desctopOrLaptopSize && (
//           <div className={s.header__user}>
//             <span className={s.logout__user_name}>{userName}</span>
//             <LogoutBtn onClick={togleModal}>Выйти</LogoutBtn>
//           </div>
//         )}
//       </div>

//       {isModalOpen && (
//         <Modal onClose={togleModal}>
//           <ModalBody onClose={togleModal}>
//             Вы действительно хотите выйти?
//           </ModalBody>
//         </Modal>
//       )}
//     </div>
//   );
// }
