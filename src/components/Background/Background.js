import s from './Background.module.css';

export default function Background({ children }) {
  return <div className={s.background}>{children}</div>;
}
