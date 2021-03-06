import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import styles from '../../styles/common/Header.module.scss';
import { MasterIsLoginResType } from 'api/master/auth';
import { MainIsLoginResType } from 'api/main/auth';
import { Mobile } from '../../lib/styles/MediaQuery';

type HeaderProps = {
  user: MainIsLoginResType | MasterIsLoginResType | null;
  onLogout: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function Header({ user, onLogout }: HeaderProps) {
  const [isMyPageOpen, setIsMyPageOpen] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMyPageOpen = () => {
    setIsMyPageOpen(!isMyPageOpen);
    setIsMenuOpen(false);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMyPageOpen(false);
  };
  const handleAllClose = () => {
    setIsMenuOpen(false);
    setIsMyPageOpen(false);
  };
  const handleScroll = () => {
    if (window.scrollY > 82) {
      setIsHeaderShow(false);
      setIsMyPageOpen(false);
      setIsMenuOpen(false);
    } else {
      setIsHeaderShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={
          isHeaderShow
            ? `${styles.headerContainer}`
            : `${styles.headerContainer} ${styles.active}`
        }
      >
        <div className={styles.navContainer}>
          <div className={styles.logoWrapper}>
            <div className={styles.menuBtn}>
              <FcMenu
                color="#3e3f48"
                size="30"
                className={styles.menuBtn}
                onClick={handleMenuOpen}
              />
            </div>
            <div className={styles.logo} onClick={handleAllClose}>
              <Link to="/">
                <span
                  style={{
                    fill: '#5d3dbf',
                    fontFamily: 'Spoqa Han Sans Neo',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  P'Level Up
                </span>
              </Link>
            </div>
            <div>
              <FaUserCircle
                className={styles.mobileMyIcon}
                size="20"
                color="#c5c5c5"
                onClick={handleMyPageOpen}
              />
            </div>
          </div>
          <div className={styles.pcMenuList}>
            {user === null || (user !== null && 'type' in user) ? null : (
              <div className={styles.pcMenuItem} onClick={handleAllClose}>
                <Link className={styles.link} to="/master">
                  ??? ?????? ??????
                </Link>
              </div>
            )}
            <div className={styles.pcMenuItem} onClick={handleAllClose}>
              <Link className={styles.link} to="/club">
                ?????? ?????? ??????
              </Link>
            </div>
            <div className={styles.pcMenuItem} onClick={handleAllClose}>
              <Link className={styles.link} to="/introduce">
                ???????????? ??????
              </Link>
            </div>
            <div className={styles.pcVerIcon} onClick={handleMyPageOpen}>
              <FaUserCircle size="" color="#c5c5c5" className={styles.icon} />
              <div
                className={
                  isMyPageOpen
                    ? `${styles.MyPageContainer}`
                    : `${styles.MyPageContainer} ${styles.active}`
                }
              >
                {user ? (
                  user !== null && 'type' in user ? (
                    <div>
                      <div className={styles.dropDown}>
                        <Link className={styles.link} to="/mypage">
                          ???????????????
                        </Link>
                      </div>
                      <div className={styles.dropDown}>
                        <Link className={styles.link} to="/payment/history">
                          ?????? ??????
                        </Link>
                      </div>
                      <div className={styles.dropDown} onClick={onLogout}>
                        ????????????
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className={styles.dropDown} onClick={onLogout}>
                        ????????????
                      </div>
                    </div>
                  )
                ) : (
                  <div>
                    <div className={styles.dropDown}>
                      <Link className={styles.link} to="/login">
                        ?????? ?????????
                      </Link>
                    </div>
                    <div className={styles.dropDown}>
                      <Link className={styles.link} to="/master/login">
                        ????????? ?????????
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.mobileWrapper}>
            <Mobile>
              <ul
                className={
                  isMenuOpen
                    ? `${styles.menuList} ${styles.active}`
                    : `${styles.menuList}`
                }
              >
                <Link
                  className={styles.link}
                  to="/club"
                  onClick={handleAllClose}
                >
                  <li>?????? ?????? ??????</li>
                </Link>
                <hr />
                <Link
                  className={styles.link}
                  onClick={handleAllClose}
                  to="/introduce"
                >
                  <li>???????????? ??????</li>
                </Link>
                <hr />

                <Link
                  className={styles.link}
                  onClick={handleAllClose}
                  to="/help"
                >
                  <li>?????? ?????? ??????</li>
                </Link>
                <div
                  className={isMenuOpen ? `${styles.modalOpen}` : ''}
                  onClick={handleAllClose}
                />
              </ul>

              <ul
                className={
                  isMyPageOpen
                    ? `${styles.menuList} ${styles.active}`
                    : `${styles.menuList}`
                }
              >
                {user ? (
                  user !== null && 'type' in user ? (
                    <div>
                      <Link
                        className={styles.link}
                        onClick={handleAllClose}
                        to="/mypage"
                      >
                        <li className={styles.dropDown}>???????????????</li>
                      </Link>
                      <hr />

                      <Link
                        className={styles.link}
                        onClick={handleAllClose}
                        to="/payment/history"
                      >
                        <li className={styles.dropDown}>?????? ??????</li>
                      </Link>
                      <hr />
                      <li className={styles.dropDown} onClick={onLogout}>
                        ????????????
                      </li>
                      <div
                        className={isMyPageOpen ? `${styles.modalOpen}` : ''}
                        onClick={handleAllClose}
                      />
                    </div>
                  ) : (
                    <div>
                      <Link
                        className={styles.link}
                        onClick={handleAllClose}
                        to="/master"
                      >
                        <li className={styles.dropDown}>??? ?????? ??????</li>
                      </Link>
                      <li className={styles.dropDown} onClick={onLogout}>
                        ????????????
                      </li>
                      <div
                        className={
                          isMyPageOpen
                            ? `${styles.modalOpen} ${styles.logout}`
                            : ''
                        }
                        onClick={handleAllClose}
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <Link
                      className={styles.link}
                      onClick={handleAllClose}
                      to="/login"
                    >
                      <li className={styles.dropDown}>?????? ?????????</li>
                    </Link>
                    <hr />
                    <li className={styles.dropDown}>
                      <Link
                        className={styles.link}
                        onClick={handleAllClose}
                        to="/master/login"
                      >
                        ????????? ?????????
                      </Link>
                    </li>
                    <div
                      className={
                        isMyPageOpen
                          ? `${styles.modalOpen} ${styles.logout}`
                          : ''
                      }
                      onClick={handleAllClose}
                    />
                  </div>
                )}
              </ul>
            </Mobile>
          </div>
        </div>
      </div>
      <div className={styles.spacer} />
    </header>
  );
}
