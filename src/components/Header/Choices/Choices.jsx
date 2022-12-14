import { useEffect, useState } from "react";
import style from "./Choices.module.css";
import { fetchHolidays, setHoliday } from "../../../store/holidaysSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchText } from "../../../store/textSlice";

// const holidays = {
//   newyear: "Новый год",
//   birthdayWomen: "День рождения  Ж",
//   birthdayMen: "День рождения  М",
//   womenday: "8 марта",
//   knowledgeday: "День знаний",
// }

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const {holiday, holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();

  const toggleChoices = () => {
    if (loading !== 'success') return;
    setIsOpenChoices(!isOpenChoices)
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch])

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices}>
        {loading !== 'success' ? 
          'Загрузка...' :
          holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
          <ul className={style.list}>
            {Object.entries(holidays).map((item) => (
              <li 
                className={style.item} 
                key={item[0]}
                onClick={() => {
                  dispatch(setHoliday(item[0]));
                  dispatch(fetchText(item[0]));
                  toggleChoices();
                }}
              >
                {item[1]}
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default Choices;