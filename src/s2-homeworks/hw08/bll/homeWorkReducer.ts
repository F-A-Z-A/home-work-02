import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const newState = [...state];
      if (action.payload === 'up') {
        newState.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (action.payload === 'down') {
        newState.sort((a, b) => b.name.localeCompare(a.name))
      }
      return newState;
    }
    case 'check': {
      return state.filter(u => u.age > action.payload)
    }
    default:
      return state
  }
}


// switch (action.type) {
//     case 'sort': { // by name
//         // sort() создаёт новый массив? или нужно в ручную?...
//         return state // need to fix
//     }
//     case 'check': {
//         // filter() создаёт новый массив? или нужно в ручную?...
//         return state // need to fix
//     }
//     default:
//         return state
// }