import s from './Wrapper.module.css';

export default function Wrapper({ children }) {
  return <div className={s.wrapper_container}>{children}</div>;
}
