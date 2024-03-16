import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

// type GreetingContainerPropsType = {
//     users: any // need to fix any
//     addUserCallback: any // need to fix any
// }
type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

// export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
export const pureAddUser = (name: string,
                            setError: (error: string) => void,
                            setName: (name: string) => void,
                            addUserCallback: (name: string) => void) => {
  // проверить на пустоту можно при помощи метода trim(). К примеру: name.trim() !== ''
  if (name.trim() !== "") {
    // иначе - добавить юзера при помощи addUserCallback
    addUserCallback(name.trim())
    // и очистить инпут засетав ''
    setName("")
  } else {
    // если имя пустое - показать ошибку: setError('Ошибка! Введите имя!'),
    setError("Ошибка! Введите имя!")
  }
  // ЕСЛИ НЕ БУДЕТ ПОЛУЧАТЬСЯ, НЕ РАССТРАИВАЙСЯ. НА ЧЕТВЕРТОМ ЗАНЯТИИ ПО ТУДУЛИСТУ НАУЧИМ), НО ВСЕ ТАКИ ПОПЫТАЙСЯ))
}

// export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
export const pureOnBlur = (name: string, setError: (error: string) => void) => {
  if (name.trim() === "") {
    setError('Ошибка! Введите имя!')
  }
}

// export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  if (e.key === "Enter") {
    addUser()
  }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  // деструктуризация пропсов
  // const [name, setName] = useState<any>('') // need to fix any
  const [name, setName] = useState<string>('')
  // const [error, setError] = useState<any>('') // need to fix any
  const [error, setError] = useState<string>('')
  
  // const setNameCallback = (e: any) => { // need to fix any
  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // setName('some name') // need to fix
    setName(e.currentTarget.value)
    error && setError('')
  }
  const addUser = () => {
    // это всего лишь функция стрелочник- она всего лишь получает
    //сигнал из компоненты <Greeting/> и вызывает pureAddUser (с кучей аргументов)
    // ЗДЕСЬ НИЧЕГО ПИСАТЬ НЕ НУЖНО-ВСЕ ОК
    
    pureAddUser(name, setError, setName, addUserCallback)
  }
  
  const onBlur = () => {
    // все тоже самое, что и в addUser -функция стрелочник
    // всего лишь получает сигнали из компоненты <Greeting/> и вызывает pureOnBlur (с кучкой аргументов)
    pureOnBlur(name, setError)
  }
  
  const onEnter = (e: any) => {
    // и здесь все тоже самое...)
    pureOnEnter(e, addUser)
  }
  
  // const totalUsers = 0 // need to fix
  const totalUsers = users.length
  // const lastUserName = 'some name' // need to fix
  const lastUserName = users.length > 0 ? users[users.length - 1].name : ""
  
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
