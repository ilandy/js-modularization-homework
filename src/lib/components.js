import img from '../img/1579882416933.jpg'
import {now} from "lodash"
export const createButton = () => {
    const el = document.createElement('button')
    el.innerText = '一句話解答你的問題'
    return el
}

export const createImg = () => {
    const div = document.createElement('div')
    const el = document.createElement('img')
    el.src = img
    div.appendChild(el)
    return div
}