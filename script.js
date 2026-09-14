
    const name = prompt('Введіть ім\'я користувача')
    document.getElementById('username').textContent = name

// const name = 'ldkfjal'
const modalOverlay = document.getElementById('modal-overlay')
const modalContainer = modalOverlay.querySelector('div')

const templates = {
  win: `
    <div class="w-20 h-20 bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center text-4xl mb-4">🎉</div>
    <h2 class="text-3xl font-black text-emerald-400 mb-2">Ви виграли!</h2>
    <p class="text-slate-300 text-sm mb-6">Вітаємо! Ви першим набрали 3 бали та здобули перемогу.</p>
    <button onclick="closeModal()" class="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer">Спробувати ще раз</button>
  `,
  lose: `
    <div class="w-20 h-20 bg-rose-500/10 border-2 border-rose-500/30 text-rose-400 rounded-full flex items-center justify-center text-4xl mb-4">🤖</div>
    <h2 class="text-3xl font-black text-rose-400 mb-2">Ви програли!</h2>
    <p class="text-slate-300 text-sm mb-6">Комп'ютер виявився спритнішим і першим здобув 3 бали.</p>
    <button onclick="closeModal()" class="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer">Спробувати ще раз</button>
  `,
  draw: `
    <div class="w-20 h-20 bg-amber-500/10 border-2 border-amber-500/30 text-amber-400 rounded-full flex items-center justify-center text-4xl mb-4">🤝</div>
    <h2 class="text-3xl font-black text-amber-400 mb-2">Нічия!</h2>
    <p class="text-slate-300 text-sm mb-6">Переможця не виявлено. Спробуйте зіграти ще раз!</p>
    <button onclick="closeModal()" class="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer">Спробувати ще раз</button>
  `
}


function showModal(type) {
    console.log('ldjfalksdfjalkj')
  
  modalContainer.innerHTML = type;
  modalOverlay.classList.remove('hidden');
}

function showCards(a, b) {
    document.getElementById('user').innerHTML = `<img src='img/u_${a}.svg'></img>`
    document.getElementById('computer').innerHTML = `<img src='img/c_${b}.svg'></img>`
}

function closeModal() {
    document.getElementById('userScore').textContent = 0
    document.getElementById('computerScore').textContent = 0
  modalOverlay.classList.add('hidden');
}


document.querySelector('button').addEventListener('click', e => {
    e.preventDefault()
    let userScore = parseInt(document.getElementById('userScore').textContent)
    let computerScore = parseInt(document.getElementById('computerScore').textContent)

    const userNumber = Math.floor(Math.random() * 10) + 2
    const computerNumber = Math.floor(Math.random() * 10) + 2

    showCards(userNumber, computerNumber)

    // document.getElementById('userNumber').textContent = userNumber
    // document.getElementById('computerNumber').textContent = computerNumber

    if (userNumber >= computerNumber) userScore += 1
    if (computerNumber >= userNumber) computerScore += 1

    document.getElementById('userScore').textContent = userScore
    document.getElementById('computerScore').textContent = computerScore

    if (computerScore === userScore && userScore === 3) showModal(templates.draw)
    else if (userScore === 3) showModal(templates.win)
    else if (computerScore === 3) showModal(templates.lose)
})