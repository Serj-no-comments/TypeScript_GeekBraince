import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(1, 'Wade Warren', '/public/img/avatar.png')
  const d: Date = new Date();
  const today = new Date();
  const firstDate = today.toISOString().split('T')[0];
  const lastDate = new Date(today.getFullYear(), today.getMonth() + 2, 0).toISOString().split('T')[0];
  renderSearchFormBlock(firstDate, lastDate)
  renderSearchStubBlock()
  // renderToast(
  //   { text: 'Ничего нет', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )
})
