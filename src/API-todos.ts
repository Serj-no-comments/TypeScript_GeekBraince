export function getTodosByCount(count: number){
    const arr=JSON.parse('https://jsonplaceholder.typicode.com/todos')
    console.log(arr)
    for(let i=1;i<count;i++){
        fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }
}
