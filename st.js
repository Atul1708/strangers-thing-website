/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click',() => {
     links.classList.toggle('active') 
})