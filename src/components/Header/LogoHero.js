import React from 'react';

import s from '../../components/Route/BackgroundPublic.module.css';

export default function LogoHero() {
  return (
    <div className={s.logoHero}>
      <a href="/">
        <svg viewBox="0 0 90 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.1335 20.5701L24.419 19.1596L27.1865 23.9982H30.9003L26.508 16.7492L30.9003 11H27.0258L24.2226 15.0798L23.1335 16.7314V11H20V23.9982H23.1335V20.5701ZM37.712 23.1323C37.7953 23.5132 37.8906 23.8018 37.9977 23.9982H41.0062V23.8465C40.7444 23.3763 40.6075 22.6978 40.5956 21.811V17.5348C40.5777 16.4874 40.2117 15.6631 39.4975 15.062C38.7833 14.4608 37.8102 14.1603 36.5782 14.1603C35.3463 14.1603 34.3315 14.4519 33.534 15.0352C32.7425 15.6184 32.3467 16.3772 32.3467 17.3116H35.3552C35.3552 16.6094 35.7123 16.2582 36.4265 16.2582C37.1942 16.2582 37.5781 16.7016 37.5781 17.5884V18.0973H36.6497C35.1737 18.0973 34.0488 18.3651 33.2751 18.9007C32.5014 19.4364 32.1146 20.2279 32.1146 21.2754C32.1146 22.1086 32.433 22.802 33.0698 23.3555C33.7066 23.903 34.4803 24.1768 35.3909 24.1768C36.3848 24.1768 37.1585 23.8286 37.712 23.1323ZM37.0425 21.7932C36.7985 21.9539 36.489 22.0342 36.114 22.0342C35.8283 22.0342 35.5933 21.9509 35.4088 21.7843C35.2243 21.6117 35.132 21.3885 35.132 21.1147C35.132 20.1744 35.6558 19.7042 36.7032 19.7042H37.5781V21.2486C37.471 21.451 37.2924 21.6325 37.0425 21.7932ZM51.237 19.24C51.237 20.7398 50.8977 21.939 50.2193 22.8377C49.5467 23.7304 48.6361 24.1768 47.4875 24.1768C46.6007 24.1768 45.8716 23.8524 45.3003 23.2037V27.712H42.2918V14.3388H45.1039L45.1932 15.2316C45.7705 14.5174 46.5293 14.1603 47.4696 14.1603C48.6599 14.1603 49.5854 14.6007 50.246 15.4815C50.9067 16.3564 51.237 17.5616 51.237 19.0971V19.24ZM48.2285 19.0525C48.2285 17.3384 47.7285 16.4814 46.7287 16.4814C46.0145 16.4814 45.5383 16.7373 45.3003 17.2492V21.0522C45.5622 21.5879 46.0442 21.8557 46.7465 21.8557C47.7047 21.8557 48.1987 21.0284 48.2285 19.3739V19.0525ZM56.7453 24.1768C57.8285 24.1768 58.6885 23.7691 59.3253 22.9537L59.4146 23.9982H62.2356V14.3388H59.2093V21.1147C58.9176 21.6087 58.4266 21.8557 57.7362 21.8557C56.9328 21.8557 56.531 21.442 56.531 20.6148V14.3388H53.5225V20.5969C53.5225 21.7515 53.7933 22.6383 54.3349 23.2573C54.8825 23.8703 55.6859 24.1768 56.7453 24.1768ZM68.949 21.2843C68.949 21.0284 68.8151 20.8231 68.5473 20.6683C68.2794 20.5136 67.7706 20.3529 67.0207 20.1863C66.2708 20.0196 65.6518 19.8024 65.1638 19.5346C64.6758 19.2608 64.3038 18.9305 64.0479 18.5436C63.792 18.1568 63.664 17.7134 63.664 17.2134C63.664 16.3267 64.03 15.5976 64.7621 15.0262C65.3768 14.5415 66.1509 14.2603 67.0845 14.1825V11.9887H68.5185V14.2111C69.3917 14.3171 70.1215 14.5888 70.7077 15.0262C71.4814 15.6035 71.8683 16.3624 71.8683 17.3027H68.8508C68.8508 16.529 68.4431 16.1422 67.6278 16.1422C67.3123 16.1422 67.0475 16.2314 66.8332 16.41C66.619 16.5826 66.5118 16.7998 66.5118 17.0617C66.5118 17.3295 66.6428 17.5467 66.9046 17.7134C67.1665 17.88 67.5831 18.0169 68.1545 18.124C68.7318 18.2312 69.2377 18.3591 69.6721 18.5079C71.1243 19.0078 71.8504 19.9036 71.8504 21.195C71.8504 22.0759 71.4576 22.793 70.672 23.3465C70.0855 23.7629 69.3676 24.0227 68.5185 24.1258V26.3284H67.0845V24.1536C66.4774 24.1012 65.9234 23.9601 65.4227 23.7304C64.774 23.4328 64.2681 23.0281 63.905 22.5163C63.542 22.0045 63.3605 21.4658 63.3605 20.9004H66.1726C66.1845 21.3468 66.3333 21.6742 66.619 21.8825C66.9046 22.0848 67.2707 22.186 67.717 22.186C68.1277 22.186 68.4342 22.1027 68.6365 21.936C68.8449 21.7694 68.949 21.5521 68.949 21.2843ZM77.7694 14.3388V11.9374H74.7609V14.3388H73.5289V16.4278H74.7609V21.2218C74.7609 22.2157 75.0078 22.9567 75.5018 23.4447C75.9958 23.9328 76.7606 24.1768 77.7962 24.1768C78.3854 24.1768 78.9508 24.0905 79.4924 23.9179V21.7664C79.29 21.8021 79.04 21.82 78.7425 21.82C78.3556 21.82 78.0967 21.7485 77.9658 21.6057C77.8348 21.4629 77.7694 21.2099 77.7694 20.8469V16.4278H79.3584V14.3388H77.7694ZM86.9915 23.9982C86.8843 23.8018 86.7891 23.5132 86.7058 23.1323C86.1523 23.8286 85.3786 24.1768 84.3847 24.1768C83.4741 24.1768 82.7004 23.903 82.0636 23.3555C81.4268 22.802 81.1083 22.1086 81.1083 21.2754C81.1083 20.2279 81.4952 19.4364 82.2689 18.9007C83.0426 18.3651 84.1675 18.0973 85.6434 18.0973H86.5719V17.5884C86.5719 16.7016 86.188 16.2582 85.4203 16.2582C84.7061 16.2582 84.349 16.6094 84.349 17.3116H81.3405C81.3405 16.3772 81.7362 15.6184 82.5278 15.0352C83.3253 14.4519 84.34 14.1603 85.572 14.1603C86.804 14.1603 87.7771 14.4608 88.4913 15.062C89.2055 15.6631 89.5715 16.4874 89.5893 17.5348V21.811C89.6012 22.6978 89.7381 23.3763 90 23.8465V23.9982H86.9915ZM85.1078 22.0342C85.4827 22.0342 85.7922 21.9539 86.0362 21.7932C86.2862 21.6325 86.4648 21.451 86.5719 21.2486V19.7042H85.697C84.6495 19.7042 84.1258 20.1744 84.1258 21.1147C84.1258 21.3885 84.218 21.6117 84.4025 21.7843C84.587 21.9509 84.8221 22.0342 85.1078 22.0342Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  );
}
