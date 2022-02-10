let User = {
    username: 'Wade Warren',
    avatarUrl: '/public/img/avatar.png'
}
let favoritCaption = 2;
localStorage.setItem('user', JSON.stringify(User))
localStorage.setItem('favoritesAmount', 'favoritCaption')
export function getUserData(value: unknown) {
    let data = localStorage.getItem(value)
    return data
}

export function getFavoritesAmount(value: unknown) {
    let favoritCaption = localStorage.getItem(value)
    return favoritCaption
}