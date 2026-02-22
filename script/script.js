
// Calculating the counts of interviwes, rjection and total jobs
let totalCount = document.getElementById('total-interview');
let interviewCount = document.getElementById('interview-attended');
let rejectedCount = document.getElementById('rejected-interview');

let allCardsCount = document.getElementById('all-cards');
function calculateCount() {

    totalCount.innerText = allCardsCount.children.length;
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
}
calculateCount();


// Interview and Rejection filter
let interview = [];
let rejection = [];

const mainContainer = document.querySelector('main');

const allBtn = document.getElementById('btn-all');
allBtn.addEventListener('click', function () {

})

// toggling amongst buttons

function togglestyle(id) {
    const allBtn = document.getElementById("btn-all");
    const interviewBtn = document.getElementById("btn-interview")
    const rejectedBtn = document.getElementById("btn-rejected")

    allBtn.classList.add('bg-gray-200', 'text-black');
    interviewBtn.classList.add('bg-gray-200', 'text-black');
    rejectedBtn.classList.add('bg-gray-200', 'text-black');

    allBtn.classList.remove('bg-blue-600', 'text-white');
    interviewBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedBtn.classList.remove('bg-blue-600', 'text-white');


    const selected = document.getElementById(id);
    // console.log(selected);
    selected.classList.remove('bg-gray-200', 'text-black')
    selected.classList.add('bg-blue-600', 'text-white')

}


