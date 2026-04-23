let counter = document.createElement('div')
let buttonCase = document.createElement('div')
let display = document.createElement('span')
let plus = document.createElement('button')
let minus = document.createElement('button')
let reset = document.createElement('button')

plus.textContent = '+1';
minus.textContent = '-1';
reset.textContent = 'reset'
display.value = 0;
display.textContent = 0

counter.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'vh-100', 'm-0')
minus.classList.add('btn', 'btn-danger', 'm-1')
plus.classList.add('btn', 'btn-success', 'm-1')
reset.classList.add('btn', 'btn-danger', 'm-2')

display.classList.add('m-3', 'mx-4', 'fs-4', 'fw-bold')

let rawData = localStorage.getItem('counter')
let count = rawData ? Number(rawData) : 0;
display.textContent = count
minus.disabled = count <= 0;

plus.addEventListener('click', () => {
    count += 1;
    display.textContent = count

    localStorage.setItem('counter', count)
    minus.disabled = false
})
minus.addEventListener('click', () => {
    count -= 1;
    if (count <= 0) {
        count = 0;
        minus.disabled = true
    }
    display.textContent = count
    localStorage.setItem('counter', count)
})
reset.addEventListener('click', () => {
    if (count === 0) {
        alert('Ошибка! Счетчик уже сброшен')
    } else if (confirm('Вы уверены?')) {
        count = 0;
        display.textContent = 0;
        minus.disabled = true
    }
    localStorage.setItem('counter', count)
})

buttonCase.append(plus, minus)
counter.append(display)
counter.append(buttonCase)
counter.append(reset)
document.body.append(counter)