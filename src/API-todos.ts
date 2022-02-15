import {Todos} from './API-interface'

export function getTodosByCount(count: number){
    // const arr=JSON.parse('https://jsonplaceholder.typicode.com/todos')
    // console.log(arr)
    for(let i=1;i<count;i++){
        return fetch('https://jsonplaceholder.typicode.com/todos/'+i)
                .then((response) => {return response.json()})
                .then<Todos>((todos) =>{return JSON.parse(todos)})
                .then((data)=>{
                    if(data.id===0){
                        throw Error('Ошибочка вышла')}
                        return data.id[1]
                })
    }
}
