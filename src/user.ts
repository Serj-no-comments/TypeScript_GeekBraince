import { renderBlock } from './lib.js'


export function renderUserBlock(favoriteItemsAmount: number, userName: string, linkAvatar: string) {

  // const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasName = userName;
  const hasLinkAvatar = linkAvatar;
  const favoritesCaption = '';
  if (favoriteItemsAmount < 1) {
    alert('ничего нет');
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
