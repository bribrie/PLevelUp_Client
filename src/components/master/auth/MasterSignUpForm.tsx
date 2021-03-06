import { Link } from 'react-router-dom';
import React, { ChangeEvent, FormEvent } from 'react';
import {
  MasterLoginReqType,
  MasterSignUpReqType,
} from '../../../api/master/auth';
import styles from '../../../styles/pages/login_page/LoginPage.module.scss';

type MasterSignUpFormProps = {
  form: MasterSignUpReqType | MasterLoginReqType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  error: string;
};

export default function MasterSignUpForm({
  form,
  onChange,
  onSubmit,
  error,
}: MasterSignUpFormProps) {
  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      <div className={styles.inputBox}>
        <span className={styles.label}>
          이메일<span className={styles.required}>*</span>
        </span>
        <input
          className={styles.loginInput}
          name="email"
          placeholder="이메일을 입력해주세요"
          onChange={onChange}
          value={form.email}
        />
        <span className={styles.label}>
          이름<span className={styles.required}>*</span>
        </span>
        <input
          className={styles.loginInput}
          name="username"
          placeholder="이름을 입력해주세요"
          onChange={onChange}
          value={form.username}
        />
        <span className={styles.label}>
          비밀번호<span className={styles.required}>*</span>
        </span>
        <input
          className={styles.loginInput}
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
          value={form.password}
        />
        <span className={styles.label}>
          비밀번호 확인<span className={styles.required}>*</span>
        </span>
        <input
          className={styles.loginInput}
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          onChange={onChange}
          value={form.passwordConfirm}
        />
      </div>
      <button className={styles.loginBtn}>회원가입</button>
      {error && <div className={styles.errorMessage}>{error}</div>}

      <>
        <div className={styles.registerWrapper}>
          <div>클럽장 로그인을 원하시나요?</div>
          <div>
            <Link className={styles.registerLink} to="/master/login">
              클럽장 로그인 하러가기
            </Link>
          </div>
        </div>
      </>
    </form>
  );
}
