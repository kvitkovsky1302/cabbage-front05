import s from './Background.module.css';

export default function Background({ children }) {
  return (
    <div className={s.background}>
      {children}
      <div className={s.coles}></div>
    </div>
  );
}

//  className={activeValue === 'Транспорт' ? s.activeSvg : s.svg}

// {isLoggedIn ? <UserMenu /> : null}
