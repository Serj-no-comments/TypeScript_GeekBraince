export class User {
    userName: string
    avatarUrl: string
    constructor(userName: string,avatarUrl: string){
        this.userName=userName
        this.avatarUrl=avatarUrl
    }
}
// let favoritCaption = 2;
// localStorage.setItem('user', JSON.stringify(User))
// localStorage.setItem('favoritesAmount', 'favoritCaption')

export function getUserData() {
    const data: unknown =JSON.parse( window.localStorage.getItem('data'))
    if(data instanceof User){
        return data
    }else{
        throw new Error('User in local storage is wrong')
    }
    
}

export function getFavoritesAmount() {
    return +window.localStorage.getItem('favoritAmounts')
}