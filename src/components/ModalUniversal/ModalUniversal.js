import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BiX } from 'react-icons/bi';

import getUsername from '../../redux/auth/auth-selectors';
import logOut from '../../redux/auth/auth-operations';

import s from './ModalUniversal.module.css';

export default function ModalUniversal({ children, onClose }) {
  const [enterActive, setEnterActive] = useState('true');
  const [registerActive, setRegisterActive] = useState('false');
  const dispatch = useDispatch();
  const userName = useSelector(getUsername.getUsername);

  useEffect(() => {
    const icon = document.getElementById('icon-close');
    const btnNo = document.getElementById('btnNo');
    const btnYes = document.getElementById('buttons');

    btnNo.addEventListener('click', onClose);
    icon.addEventListener('click', onClose);
    return () => {
      btnNo.removeEventListener('click', onClose);
      btnYes.removeEventListener('click', onClose);
      icon.removeEventListener('click', onClose);
    };
  }, [onClose]);

  const toggleEnterActiveBtn = () => {
    const btnYes = document.getElementById('buttons');
    setEnterActive('true');
    setRegisterActive('false');

    dispatch(logOut(userName));
    btnYes.addEventListener('click', onClose);
    onClose();
  };

  const toggleRegisterActiveBtn = () => {
    setEnterActive('false');
    setRegisterActive('true');
  };
  return (
    <form>
      <BiX name="close" type="button" id="icon-close" className={s.iconClose} />
      <p className={s.question}>{children}</p>
      <div className={s.buttons}>
        <div id="buttons">
          <button
            className={s.button}
            type="submit"
            id="btnYes"
            active={enterActive}
            name="yes"
            onClick={toggleEnterActiveBtn}
          >
            Да
          </button>
        </div>
        <button
          className={s.button}
          type="button"
          id="btnNo"
          active={registerActive}
          name="no"
          onClick={toggleRegisterActiveBtn}
        >
          Нет
        </button>
      </div>
    </form>
  );
}
