import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import {User, getFavoritesAmount, getUserData} from './production.js'

window.addEventListener('DOMContentLoaded', () => {
  const data: User = getUserData();
  renderUserBlock(getFavoritesAmount(), data.userName, data.avatarUrl)
  const d: Date = new Date();
  const today = new Date();
  const firstData: string=today.toISOString().split('T')[0];
  const lastDate: string=new Date(today.getFullYear(), today.getMonth() + 2, 0).toISOString().split('T')[0];
  renderSearchFormBlock(firstData,lastDate)
  renderSearchStubBlock()
  // renderToast(
  //   { text: 'Ничего нет', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )
})
