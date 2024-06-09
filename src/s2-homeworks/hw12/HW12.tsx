import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, ThemeReducerActionType} from './bll/themeReducer'
import {Dispatch} from "redux";
import {AppStoreType} from "../hw10/bll/store";

const themes: ThemesType = [
  {id: 1, value: 'light'},
  {id: 2, value: 'blue'},
  {id: 3, value: 'dark'},
]

const HW12 = () => {
  const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)
  const dispatch = useDispatch<Dispatch<ThemeReducerActionType>>()
  
  const change = (id: number) => {
    dispatch(changeThemeId(id))
  }
  
  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ``
  }, [themeId])
  
  return (
    <div id={'hw12'}>
      <div id={'hw12-text'} className={s2.hwTitle}>
        Hometask № 12
      </div>
      
      <div className={s2.hw}>
        <div className={s.heading}>
          Выберите тему
        </div>
        <SuperSelect
          id={'hw12-select-theme'}
          className={s.select}
          options={themes}
          value={themeId}
          onChangeOption={change}
        />
      </div>
    </div>
  )
}

export default HW12

// types
type ThemesType = ThemeType[]
type ThemeType = {
  id: number
  value: string
}


// import React, {useEffect} from 'react'
// import s from './HW12.module.css'
// import s2 from '../../s1-main/App.module.css'
// import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
// import {useDispatch, useSelector} from 'react-redux'
// import {changeThemeId} from './bll/themeReducer'
//
// /*
// * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
// * 2 - получить themeId из редакса
// * 3 - дописать тип и логику функции change
// * 4 - передать пропсы в SuperSelect
// * */
//
// const themes = [
//   {id: 1, value: 'light'},
//   {id: 2, value: 'blue'},
//   {id: 3, value: 'dark'},
// ]
//
// const HW12 = () => {
//   // взять ид темы из редакса
//   const themeId = 1
//
//   const change = (id: any) => { // дописать функцию
//
//   }
//
//   useEffect(() => {
//     document.documentElement.dataset.theme = themeId + ''
//   }, [themeId])
//
//   return (
//     <div id={'hw12'}>
//       <div id={'hw12-text'} className={s2.hwTitle}>
//         Homework #12
//       </div>
//
//       <div className={s2.hw}>
//         <SuperSelect
//           id={'hw12-select-theme'}
//           className={s.select}
//           // сделать переключение тем
//
//         />
//       </div>
//     </div>
//   )
// }
//
// export default HW12
