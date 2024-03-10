import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'


// type AffairsPropsType = {
//     data: any // need to fix any
//     setFilter: any  //(filter: FilterType) => void -запоминай, как типизируется useState
//     deleteAffairCallback: any  //не забывай, что функция сюда приехала не пустой
//     filter: FilterType
// }
type AffairsPropsType = {
  data: AffairType[] // need to fix any
  setFilter: (filter: FilterType) => void // запоминай, как типизируется useState
  // setFilter: Dispatch<SetStateAction<FilterType>> // полноценное описание типа, с использованием lifehack "number"
  deleteAffairCallback: (_id: number) => void  //не забывай, что функция сюда приехала не пустой
  filter: FilterType
}

function Affairs(props: AffairsPropsType) {
  const setAll = () => props.setFilter("all");
  const setHigh = () => props.setFilter("high");
  const setMiddle = () => props.setFilter("middle");
  const setLow = () => props.setFilter("low");
  // ----------------использование одной переменной
  // const setFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   props.setFilter(e.currentTarget.value as FilterType);
  // }
  
  const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
  const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
  const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
  const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')
  
  
  // создаем переменную=мапим наши данные (affairs)=>{
  // <вызываем компоненту <Affair в которую передаем глубже необходимые данные
  // в том числе колбэк deleteAffairCallback
  // />}
  // получается, что мы мапим массив, но он не отрисовывается тут же, а погружается
  // глубже в компоненту <Affair/> где произойдет отрисовка
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))
  
  return (
    <div>
      <div className={s.buttonContainer}>
        <button id={'hw2-button-all'} onClick={setAll} className={cnAll} value={"all"}>All</button>
        <button id={'hw2-button-high'} onClick={setHigh} className={cnHigh} value={"all"}>High</button>
        <button id={'hw2-button-middle'} onClick={setMiddle} className={cnMiddle} value={"all"}>Middle</button>
        <button id={'hw2-button-low'} onClick={setLow} className={cnLow} value={"all"}>Low</button>
      </div>
      {/*----------------использование одной переменной*/}
      {/*<div className={s.buttonContainer}>*/}
      {/*  <button id={'hw2-button-all'} onClick={setFilter} className={cnAll} value={"all"}> All</button>*/}
      {/*  <button id={'hw2-button-high'} onClick={setFilter} className={cnHigh} value={"high"}> High</button>*/}
      {/*  <button id={'hw2-button-middle'} onClick={setFilter} className={cnMiddle} value={"middle"}> Middle</button>*/}
      {/*  <button id={'hw2-button-low'} onClick={setFilter} className={cnLow} value={"low"}> Low</button>*/}
      {/*</div>*/}
      <div className={s.affairs}>{mappedAffairs}</div>
    </div>
  )
}

export default Affairs
