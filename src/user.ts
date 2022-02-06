import { renderBlock } from './lib.js'
import { renderToast } from './lib.js';

export function renderUserBlock(favoriteItemsAmount: number, userName: string, linkAvatar: string) {

  // const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasName = userName;
  const hasLinkAvatar = linkAvatar;
  const favoritesCaption = favoriteItemsAmount;
  if (favoriteItemsAmount < 1) {
    renderToast(
      { text: 'Ничего нет', type: 'success' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )
    //пока что работа встала из-за проблемы компиляции файлов
  }
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${hasLinkAvatar} alt="Wade Warren" />
      <div class="info">
          <p class="name">${hasName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
