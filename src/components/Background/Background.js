import s from './Background.module.css';

export default function Background({ children }) {
  return (
    <div className={s.background}>
      {children}
      <div></div>
    </div>
  );
}

//  className={activeValue === 'Транспорт' ? s.activeSvg : s.svg}

// {isLoggedIn ? <UserMenu /> : null}
