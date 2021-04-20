import { Link } from 'react-router-dom';
import styles from '../../styles/pages/my_page/MyPage.module.scss';
import { BiDoorOpen } from 'react-icons/bi';
import { MdBuild } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { MainApplyListResType } from 'api/main/myPage';
import ApplyCard from '../common/ApplyCard';
import { MainLoginResType, MainLogoutResType } from 'api/main/auth';
import { MouseEventHandler } from 'react';

export default function MyPageForm({
  user,
  onLogout,
  apply,
}: {
  user: MainLoginResType | any;
  onLogout: MouseEventHandler;
  apply: MainApplyListResType | any;
}) {
  const { username } = user;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.MypageWrapper}>
          <div className={styles.userWrapper}>
            <div className={styles.flexHeader}>
              <div className={styles.imgWrapper}>
                <FaUserCircle size="100" color="#c5c5c5" />
              </div>
              <div className={styles.menuWrapper}>
                <div className={styles.menuName}>
                  <p className={styles.userName}>{`${username}님`}</p>
                </div>

                <div className={styles.menuItem}>
                  <div className={styles.passwordItem}>
                    <div className={styles.passwordIcon}>
                      <MdBuild size="20" />
                    </div>
                    <p>
                      <Link to="/mypage/changepassword">비밀번호 변경</Link>
                    </p>
                  </div>
                  <div className={styles.logOutItem}>
                    <div className={styles.logOutIcon}>
                      <BiDoorOpen size="20" />
                    </div>
                    <p className={styles.logOutBtn} onClick={onLogout}>
                      로그아웃
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bannerBox}>
              <a className={styles.aBox}>
                <div className={styles.banner}>
                  <div className={styles.title}>
                    사회적 거리두기 단계별 운영방침 💪🏻
                  </div>
                  <div className={styles.subTitle}>
                    <span>더 알아보기</span>
                    <span>아이콘 </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.tabWrapper}>
            <ul className={styles.nav}>
              <div className={styles.navItemWrapper}>
                <li className={styles.navItem}>클럽</li>
              </div>
              <div className={styles.navItemWrapper}>
                <li className={styles.navItem}>찜리스트</li>
              </div>
            </ul>
          </div>
          <div className={styles.tabContent}>
            <div className={styles.tabBody}>
              <div className={styles.tabBodyWrapper}>
                <div className={styles.tabBodyClub}>
                  <div>
                    {apply &&
                      apply.map((el: MainApplyListResType) => (
                        <ApplyCard
                          key={el.id}
                          title={el.title}
                          summary={el.summary}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
            <ul className={styles.areaName}>
              <li className={styles.areaList}>
                <div className={styles.recordClubList}>
                  <div className={styles.recordTitle}>클럽</div>
                  <div className={styles.recordContents}>
                    <div>
                      {apply &&
                        apply.map((el: MainApplyListResType) => (
                          <ApplyCard
                            key={el.id}
                            title={el.title}
                            summary={el.summary}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.areaList}>
                <div className={styles.recordFavoriteList}>
                  <div className={styles.recordTitle}>찜리스트</div>
                  <div className={styles.recordContents}>
                    <div>props로 추가될 실제 찜 클럽리스트</div> 
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.ifNotInvlovedClub}>
            <div>클럽이 없습니다.</div>
            <button>
              <Link to="/list">멤버쉽 신청하러 가기</Link>
            </button>
         */}
      </div>
    </div>
  );
}
