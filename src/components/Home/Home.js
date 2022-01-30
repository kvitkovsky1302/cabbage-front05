import HomeMain from '../../components/HomeMain';
import Wrapper from '../../components/Wrapper';
import s from './Home.module.css';

export default function Home() {
  return (
    <div className={s.main_container}>
      <HomeMain>
        <Wrapper>
          <div className={s.home_container}></div>
        </Wrapper>
      </HomeMain>
    </div>
  );
}
