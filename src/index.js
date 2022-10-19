import './css/index.css'
import './scss/index.scss'
import {createButton, createImg } from './lib/components'
import error from './lib/error'

document.body.appendChild(createButton())
document.querySelector('button').addEventListener('click', () => document.body.appendChild(createImg()))