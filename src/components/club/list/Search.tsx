import React, { ChangeEvent, useState } from 'react';
import styles from '../../../styles/pages/list_page/ListPage.module.scss';
import { FiSearch, FiRefreshCw } from 'react-icons/fi';

export default function Search({
  onSearch,
  onPlace,
  onDay,
  onFilter,
  onLimitNumber,
  onReset,
}: {
  onSearch: (search: string) => void;
  onPlace: (place: string | null) => void;
  onDay: (day: string | null) => void;
  onFilter: (filter: string | null) => void;
  onLimitNumber: (onLimitNumber: string | null) => void;
  onReset: () => void;
}) {
  const [search, setSearch] = useState<string>('');
  const [isNew, setIsNew] = useState(false);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(search);
    }
  };

  const onPlaceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '장소') {
      onPlace(null);
      return;
    }
    onPlace(e.target.value);
  };

  const onDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '요일') {
      onDay(null);
      return;
    }
    onDay(e.target.value);
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsNew(!isNew);
    if (!isNew) {
      onFilter('isNew');
    } else {
      onFilter(null);
    }
  };

  const onLimitNumberChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === '인원수') {
      onLimitNumber(null);
      return;
    }
    onLimitNumber(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox} style={{ position: 'relative' }}>
        <input
          className={styles.searchInput}
          value={search}
          onChange={onSearchChange}
          onKeyPress={handleKeyPress}
          placeholder="클럽이름 검색"
        />
        <FiSearch
          className={styles.searchIcon}
          onClick={() => {
            onSearch(search);
          }}
          size={20}
        />
        {/*<button*/}
        {/*  className={styles.searchBtn}*/}
        {/*  style={{ position: 'absolute', right: 0 }}*/}
        {/*  onClick={() => {*/}
        {/*    onSearch(search);*/}
        {/*  }}*/}
        {/*  value={'버튼'}*/}
        {/*>*/}
        {/*  검색*/}
        {/*</button>*/}
      </div>
      <div className={styles.selectBox}>
        <select className={styles.selectBtn} onChange={onPlaceChange}>
          <option>장소</option>
          <option value="온라인">온라인</option>
          <option value="강남">강남</option>
          <option value="판교">판교</option>
          <option value="여의도">여의도</option>
          <option value="오프라인">오프라인</option>
        </select>
        <select className={styles.selectBtn} onChange={onDayChange}>
          <option>요일</option>
          <option value="일">일</option>
          <option value="월">월</option>
          <option value="화">화</option>
          <option value="수">수</option>
          <option value="목">목</option>
          <option value="금">금</option>
          <option value="토">토</option>
        </select>
        <select className={styles.selectBtn} onChange={onLimitNumberChange}>
          <option>인원수</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7 이상</option>
        </select>
      </div>
      <div className={styles.btnWrapper}>
        <div>
          <input
            className={styles.checkBtn}
            type="checkbox"
            onChange={onFilterChange}
            checked={isNew}
          />
          <span>새로운 클럽</span>
        </div>
        <div
          className={styles.refreshBtn}
          onClick={() => {
            onReset();
          }}
        >
          <FiRefreshCw size={20} />
          <span style={{ marginLeft: 4 }}>검색조건 초기화</span>
        </div>
      </div>
    </div>
  );
}
