import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(1, 'Wade Warren', '/public/img/avatar.png')

  renderSearchFormBlock(firstDate, lastDate)
  renderSearchStubBlock()
  // renderToast(
  //   { text: 'Ничего нет', type: 'success' },
  //   { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  // )
})
