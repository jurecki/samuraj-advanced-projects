export const showInConsole = (info) => {
    console.log(info);
}

export const showInDOM = (info, tag) => {
    const element = document.createElement(tag)

    element.textContent = info

    document.body.appendChild(element)
}

