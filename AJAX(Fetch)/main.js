const getUsers = (e) => {
    e.preventDefault();
    

const gender = document.querySelector('select').value
const number = document.querySelector('input[name="usersNumber"]').value


const url = `https://randomuser.me/api/?results=${number}&gender=${gender}`

fetch(url)
    .then(response=> {
        if(response.status !==200) {
            throw Error('To nie jest odpowiedź 200')
        } else {
            return response.json();
        }
    }
    )
    .then(json => showUsers(json.results))
    .catch(err => console.log(err))

}


const showUsers = (users) => {
    const resultArea = document.querySelector('.result')

    users.forEach(user => {
        console.log(resultArea)
        const item = document.createElement('div');
        item.className='user'
        item.innerHTML = `
        <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
        <img class="user__image" src="${user.picture.medium}">
        `

        resultArea.appendChild(item)
    })
}

document.querySelector('.generator__btn').addEventListener('click', getUsers)