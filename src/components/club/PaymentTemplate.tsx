import styles from '../../styles/pages/payment_page/PaymentPage.module.scss';
import { Tablet, Desktop } from '../../mediaQuery';
import { IoIosCheckbox } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { AiTwotoneCalendar } from 'react-icons/ai';

export default function PaymentTemplate() {
  return (
    <div>
      <div className={styles.desktopContainer}>
        <Desktop>
          <div className={styles.wrapper}>
            <div className={styles.mainTitle}>결제 정보</div>
            <div className={styles.flexContainer}>
              <div className={styles.clubContainer}>
                <div className={styles.clubInfo}>
                  <div className={styles.coverImg}>
                    <div className={styles.imgUrl}>
                      <img
                        src="https://image.trevari.co.kr/file/947eb52d-1510-4b9b-98b7-e03eb8de730d.%E1%84%87%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC.png"
                        className={styles.url}
                      ></img>
                    </div>
                  </div>
                  <div className={styles.compactClub}>
                    <div className={styles.badge}>신청하신 클럽</div>
                    <div className={styles.clubName}> 취향의 자립(props)</div>
                    <div className={styles.clubTime}>
                      <span className={styles.calendar}>
                        <AiTwotoneCalendar color="#b6b6c0" size="17" />
                      </span>
                      매달 네 번째 금요일(props)
                    </div>
                    <div className={styles.clubPlace}>
                      <div className={styles.location}>
                        <IoLocationSharp color="#b6b6c0" size="17" />
                      </div>
                      <div className={styles.location}>
                        <div>강남 아지트 (props)</div>
                        <div>
                          <a href="http://naver.me/GBIpMwcJ">
                            서울특별시 강남구 강남대로92길 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.membershipInfo}>
                  <div className={styles.noticeTitle}>
                    프레벨업 멤버십 혜택 안내
                  </div>
                  <br />
                  <div className={styles.period}>
                    멤버십 기간: 2021.05.21 ~ 2021. 09.20 (props)
                  </div>
                  <div className={styles.benefitInfo}>
                    <div className={styles.benefitContainer}>
                      <div className={styles.benefitItem}>
                        <div className={styles.benefitTitle}>🎟 제휴혜택</div>
                        <div className={styles.benefitContent}>
                          라이프스타일, 쇼핑, 교육 등 약 10여 가지의 다양한 제휴
                          할인 혜택이 제공됩니다.
                        </div>
                      </div>
                      <div className={styles.benefitItem}>
                        <div className={styles.benefitTitle}>🤹 이벤트</div>
                        <div className={styles.benefitContent}>
                          다양한 체험과 강연 이벤트를 멤버 할인가에 참여할 수
                          있습니다.
                        </div>
                      </div>
                    </div>
                    <div className={styles.benefitContainer}>
                      <div className={styles.benefitItem}>
                        <div className={styles.benefitTitle}>
                          🏠 아지트 무료 대관
                        </div>
                        <div className={styles.benefitContent}>
                          강남, 안국의 아지트 공간 무료 대관 OK!
                        </div>
                      </div>
                      <div className={styles.benefitItem}>
                        <div className={styles.benefitTitle}>
                          👀 다른 클럽 놀러가기
                        </div>
                        <div className={styles.benefitContent}>
                          다른 클럽에도 놀러 갈 수 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.paymentContainer}>
                <div className={styles.paymentInfoBox}>
                  <div className={styles.priceWrapper}>
                    <div className={styles.priceContent}>
                      <span className={styles.category}>멤버십 비용</span>
                      <div className={styles.price}>310,000원 (props)</div>
                    </div>
                  </div>
                  <div className={styles.middleLine}></div>
                  <div className={styles.infoContainer}>
                    <div className={styles.method}>
                      <span>결제수단 선택</span>
                    </div>
                    <div className={styles.infoContainerForm}>
                      <form>
                        <div className={styles.formCheck}>
                          <input
                            type="radio"
                            value="card"
                            name="selectMethod"
                          ></input>
                          신용카드 / 체크카드
                          <div className={styles.cardNotice}>
                            모든 신용카드 4개월 무이자 할부 가능
                          </div>
                        </div>
                        <div className={styles.formCheck}>
                          <input
                            type="radio"
                            value="cash"
                            name="selectMethod"
                          ></input>
                          계좌이체 (가상계좌)
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className={styles.middleLine}></div>
                  <div className={styles.infoContainer}>
                    <div className={styles.refundPolicy}>
                      ※ 수수료 발생 기간에도 결제 당일 23시 59분까지 전액 환불이
                      가능합니다.
                    </div>
                    <div className={styles.policyContainer}>
                      <div className={styles.checkBox}>
                        <IoIosCheckbox color="#e4e4e4" size="20" />
                      </div>
                      <div>
                        결제 진행시 프레벨업의 이용약관 및 개인정보 처리방침을
                        모두 이해하였으며, 이에 동의한 것으로 간주됩니다.
                      </div>
                    </div>
                    <div className={styles.btnContainer}>
                      <button type="button" className={styles.paymentBtn}>
                        <div>(props)원 결제하기</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Desktop>
      </div>

      <div className={styles.tabletContainer}>
        <Tablet>
          <div className={styles.wrapper}>
            <div className={styles.infoBox}>
              <div className={styles.clubInfoContainer}>
                <div className={styles.infoContainer}>
                  <div className={styles.compactClub}>
                    <div className={styles.left}>
                      <span className={styles.badge}>신청하신 클럽</span>
                      <div className={styles.clubName}>결제 클럽 이름</div>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.classImg}>
                        <img
                          src="https://image.trevari.co.kr/file/947eb52d-1510-4b9b-98b7-e03eb8de730d.%E1%84%87%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC.png"
                          className={styles.coverImg}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.margin}></div>
                  <div className={styles.detailInfo}>
                    <div className={styles.textBox}>
                      <div className={styles.timeContainer}>
                        <span>
                          <AiTwotoneCalendar color="#b6b6c0" size="17" />
                        </span>
                        <div className={styles.date}>매달 네 번째~</div>
                      </div>
                    </div>
                    <div className={styles.placeContainer}>
                      <div>
                        <IoLocationSharp color="#b6b6c0" size="17" />
                      </div>
                      <div className={styles.textBox}>
                        <div>강남 아지트(props)</div>
                        <div>
                          <a
                            href="http://naver.me/GBIpMwcJ"
                            target="_blank"
                            className={styles.addressUrl}
                          >
                            서울특별시 강남구 강남대로92길 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className={styles.infoContainer}>
                    <div className={styles.noticeTitle}>
                      프레벨업 멤버십 혜택 안내
                    </div>
                    <div className={styles.period}>
                      멤버십 기간: 2021.04.16 ~ 2021.08.15 (props)
                    </div>
                    <div className={styles.infoContainer}>
                      <div className={styles.benefitContainer}>
                        <div className={styles.benefitItem}>
                          <div className={styles.benefitTitle}>🎟 제휴혜택</div>
                          <div className={styles.benefitContent}>
                            라이프스타일, 쇼핑, 교육 등 약 10여 가지의 다양한
                            제휴 할인 혜택이 제공됩니다.
                          </div>
                        </div>
                        <div className={styles.benefitItem}>
                          <div className={styles.benefitTitle}>🤹 이벤트</div>
                          <div className={styles.benefitContent}>
                            다양한 체험과 강연 이벤트를 멤버 할인가에 참여할 수
                            있습니다.
                          </div>
                        </div>
                      </div>
                      <div className={styles.benefitContainer}>
                        <div className={styles.benefitItem}>
                          <div className={styles.benefitTitle}>
                            🏠 아지트 무료 대관
                          </div>
                          <div className={styles.benefitContent}>
                            강남, 안국 등 트레바리 아지트 공간 무료 대관 OK!
                          </div>
                        </div>
                        <div className={styles.benefitItem}>
                          <div className={styles.benefitTitle}>
                            👀 다른 클럽 놀러가기
                          </div>
                          <div className={styles.benefitContent}>
                            다른 클럽에도 놀러 갈 수 있습니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.paymentInfoBox}>
              <div className={styles.clubInfoContainer}>
                <div className={styles.infoContainer}>
                  <div className={styles.priceInfo}>
                    <span className={styles.name}>멤버십 비용</span>
                    <div className={styles.price}>310,000원(props)</div>
                  </div>
                </div>
                <div className={styles.middleLine}></div>
                <div className={styles.infoContainer}>
                  <div className={styles.method}>
                    <span>결제수단 선택</span>
                  </div>
                  <div className={styles.infoContainer}>
                    <form>
                      <div className={styles.formCheck}>
                        <input
                          type="radio"
                          value="card"
                          name="selectMethod"
                        ></input>
                        신용카드 / 체크카드
                        <div className={styles.cardNotice}>
                          모든 신용카드 4개월 무이자 할부 가능
                        </div>
                      </div>
                      <div className={styles.formCheck}>
                        <input
                          type="radio"
                          value="cash"
                          name="selectMethod"
                        ></input>
                        계좌이체 (가상계좌)
                      </div>
                    </form>
                  </div>
                </div>
                <div className={styles.middleLine}></div>
                <div className={styles.infoContainer}>
                  <div className={styles.refundPolicy}>
                    ※ 수수료 발생 기간에도 결제 당일 23시 59분까지 전액 환불이
                    가능합니다.
                  </div>
                  <div className={styles.policyContainer}>
                    <div className={styles.checkBox}>
                      <IoIosCheckbox color="#e4e4e4" size="20" />
                    </div>
                    <div>
                      결제 진행시 프레벨업의 이용약관 및 개인정보 처리방침을
                      모두 이해하였으며, 이에 동의한 것으로 간주됩니다.
                    </div>
                  </div>
                  <div className={styles.btnContainer}>
                    <button type="button" className={styles.paymentBtn}>
                      <div>(props)원 결제하기</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tablet>
      </div>
    </div>
  );
}
