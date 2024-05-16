// script.js

//Created 3 Objects for the 3 orders containing the amount of each item ordered
const root1El = document.querySelector("dl[data-key='order1']")
const root1 = {
    biscuits : root1El.getAttribute('data-biscuits'),
    donuts : root1El.getAttribute('data-donuts'),
    pancakes : root1El.getAttribute('data-pancakes'),
    status : root1El.getAttribute('data-delivered')
}

const root2El = document.querySelector("dl[data-key='order2']")
const root2 = {
    biscuits : root2El.getAttribute('data-biscuits'),
    donuts : root2El.getAttribute('data-donuts'),
    pancakes : root2El.getAttribute('data-pancakes'),
    status : root2El.getAttribute('data-delivered')
}

const root3El = document.querySelector("dl[data-key='order3']")
const root3 = {
    biscuits : root3El.getAttribute('data-biscuits'),
    donuts : root3El.getAttribute('data-donuts'),
    pancakes : root3El.getAttribute('data-pancakes'),
    status : root3El.getAttribute('data-delivered')
}

//Grabbed each div containing the different items per order and set the text content to the values stored in the objects
root1El.querySelector('.biscuits > .count').textContent = root1.biscuits;
root1El.querySelector('.donuts > .count').textContent = root1.donuts;
root1El.querySelector('.pancakes > .count').textContent = root1.pancakes;
root1El.querySelector('.status > dd').textContent = root1.status === 'true' ? 'Delivered' : 'Pending';

root2El.querySelector('.biscuits > .count').textContent = root2.biscuits;
root2El.querySelector('.donuts > .count').textContent = root2.donuts;
root2El.querySelector('.pancakes > .count').textContent = root2.pancakes;
root2El.querySelector('.status > dd').textContent = root2.status === 'true' ? 'Delivered' : 'Pending';

root3El.querySelector('.biscuits > .count').textContent = root3.biscuits;
root3El.querySelector('.donuts > .count').textContent = root3.donuts;
root3El.querySelector('.pancakes > .count').textContent = root3.pancakes;
root3El.querySelector('.status > dd').textContent = root3.status === 'true' ? 'Delivered' : 'Pending';