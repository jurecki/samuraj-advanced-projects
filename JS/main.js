const addForm = document.querySelector('.form--add');
const searchForm = document.querySelector('.form--search')
const content = document.querySelector('.content')

const addElement = (e, node, txt, attr, value) => {
    e.preventDefault()
    // const node = document.querySelector('input[name="node"]').value;
    // const text = document.querySelector('input[name="text"]').value;
    // const attr = document.querySelector('input[name="attr"]').value;
    // const value = document.querySelector('input[name="value"]').value;
    const element = document.createElement(node)
    element.setAttribute('class', 'content__info')
    if(txt) {
        element.textContent = txt;
    }

    if(attr) {
        element.setAttribute(attr,value);
    }

    content.appendChild(element)
}

const searchElement = (e) => {
    e.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = "";
    const search = searchForm.elements['searching-element'].value;
    const elements = [...document.querySelectorAll(search)]

    if(elements.length>0) {
        infoElement.innerHTML = `<p class="result__info"> W tym dokumencie znalazlem ${elements.length} elementy ${search}`
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML= `<p class="result__info"> W tym dokumencie nie znalazłem elementów ${search}`
        return
    }
}

const showInfo = (elements, infoElement) => {
    console.log(elements, infoElement)

    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element';
        item.innerHTML = `
        <div> ${element.nodeName}</div>
        <div> klasa/klasy ${element.className}</div>
        <div> Wysokość elementu (offsetHeight) ${element.offsetHeight}</div>
        <div> Szerokość elementu (offsetWidth) ${element.offsetWidth}</div>
        <div> Odległość od lewej krawędzi  (offsetLeft) ${element.offsetLeft}</div>
        <div> Liczba elementów dzieci (childElementCount) ${element.childElementCount}</div>
        `
        infoElement.appendChild(item);
    })
}

addForm.addEventListener('submit', (e) => addElement(
    e, 
    addForm.elements.node.value, 
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value))

searchForm.addEventListener('submit', searchElement)