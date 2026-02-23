let interviewList = [];
let rejectionList = [];
let currentStatus = 'all';

// Calculating the counts of interviwes, rjection and total jobs - its on the TOP
let totalCount = document.getElementById('total-interview-count');
let interviewCount = document.getElementById('interview-attended-count');
let rejectedCount = document.getElementById('rejected-interview-count');

let allCards = document.getElementById('all-cards');
let filteredSection = document.getElementById('filtered-section');
let noAvailableJobs = document.getElementById('no-available-jobs');

let countJobs = document.getElementById('job-count');

function calculateCount() {
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectionList.length;
    countJobs.innerText = allCards.children.length;
}
calculateCount();

// // toggling amongst buttons

let btnAll = document.getElementById('btn-all');
let btnInterview = document.getElementById('btn-interview');
let btnRejected = document.getElementById('btn-rejected');
function togglestyle(id) {

    btnAll.classList.add('bg-gray-200', 'text-gray-600');
    btnInterview.classList.add('bg-gray-200', 'text-gray-600');
    btnRejected.classList.add('bg-gray-200', 'text-gray-600');

    btnAll.classList.remove('bg-blue-600', 'text-white');
    btnInterview.classList.remove('bg-blue-600', 'text-white');
    btnRejected.classList.remove('bg-blue-600', 'text-white');

    let selected = document.getElementById(id);
    selected.classList.remove('bg-gray-200', 'text-gray-600');
    selected.classList.add('bg-blue-600', 'text-white');

    // show and hide particular section on click 

    currentStatus = id;


    if (id == 'btn-all') {
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }

    else if (id == 'btn-interview') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();

    }

    else if (id == 'btn-rejected') {
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejection();

    }

}
// toggling ends here

// Rendering 
function renderInterview() {
    filteredSection.innerHTML = '';

    if (interviewList.length === 0) {
        filteredSection.innerHTML = `
            <div class="w-[100%] mx-auto text-center p-30 bg-white shadow">
    <img class='mx-auto' src="./assets/jobs.png" alt="no-jobs-available">
    <h2 class="text-2xl font-bold">No jobs available</h2>
    <p class="text-gray-500">Check back soon for new job opportunities</p>
</div>
            `
    }

    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'content shadow p-8 flex justify-between';
        div.innerHTML = `
        <div >
                    <h2 class="company font-bold text-2xl ">${interview.companyName}</h2>
                    <p class="position text-gray-500">${interview.position}</p>
                    <br>
                    <p class="salary text-gray-500">${interview.salary}</p>
                    <br>
                    <button class="status bg-gray-200 px-4 py-1 rounded text-gray-800 font-bold bg-green-400">${interview.status}</button>
                    <br>
                    <br>
                    <p class="notes">${interview.notes}</p>
                    <br>
                    <button
                        class=" int-btn border border-green-600 px-6 py-2 rounded text-green-600 font-bold hover:bg-green-300">INTERVIEW</button>
                    <button class="rej-btn border border-red-600 px-6 py-2 rounded text-red-600 font-bold hover:bg-red-300">REJECTED</button>

                </div>`
        filteredSection.appendChild(div);

    }

}
function renderRejection() {
    filteredSection.innerHTML = '';

    if (interviewList.length === 0) {
        let para = document.createElement('div')
        para.innerHTML = `
            <div class="w-[100%] mx-auto text-center p-30 bg-white shadow">
    <img class='mx-auto' src="./assets/jobs.png" alt="no-jobs-available">
    <h2 class="text-2xl font-bold">No jobs available</h2>
    <p class="text-gray-500">Check back soon for new job opportunities</p>
    </div>
            `
        filteredSection.appendChild(para);
    }

    for (let rejection of rejectionList) {
        console.log(rejection);

        let div = document.createElement('div');
        div.className = 'content shadow p-8 flex justify-between';
        div.innerHTML = `
        <div >
                    <h2 class="company font-bold text-2xl ">${rejection.companyName}</h2>
                    <p class="position text-gray-500">${rejection.position}</p>
                    <br>
                    <p class="salary text-gray-500">${rejection.salary}</p>
                    <br>
                    <button class="status bg-gray-200 px-4 py-1 rounded text-gray-800 font-bold bg-red-400">${rejection.status}</button>
                    <br>
                    <br>
                    <p class="notes">${rejection.notes}</p>
                    <br>
                    <button
                        class=" int-btn border border-green-600 px-6 py-2 rounded text-green-600 font-bold hover:bg-green-300">INTERVIEW</button>
                    <button class=" rej-btn border border-red-600 px-6 py-2 rounded text-red-600 font-bold hover:bg-red-300">REJECTED</button>

                </div>`
        filteredSection.appendChild(div);
    }
}



//-----------------------------------------------Event delegation ----------------------------------------/

const mainContainer = document.querySelector('main');

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('int-btn')) {
        // const parentNode = event.target.parentNode.parentNode;
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company').innerText
        const position = parentNode.querySelector('.position').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.status').innerText = 'INTERVIEWED';

        const cardInfo = {
            companyName,
            position,
            salary,
            status: 'INTERVIEWED',
            notes
        }

        const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            interviewList.push(cardInfo)
        }


        rejectionList = rejectionList.filter(item => item.companyName != cardInfo.companyName)

        // after remove rerender the html
        if (currentStatus == 'btn-interview') {
            renderInterview();
            countJobs.innerText = interviewList.length;
        }

        calculateCount()
    }

    else if (event.target.classList.contains('rej-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        // const parentNode = event.target.closest('.content');

        const companyName = parentNode.querySelector('.company').innerText
        const position = parentNode.querySelector('.position').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.status').innerText = 'REJECTED'

        const cardInfo = {
            companyName,
            position,
            salary,
            status: 'REJECTED',
            notes
        }

        const jobExist = rejectionList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            rejectionList.push(cardInfo)
        }


        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)



        // after removing rerendering the html
        if (currentStatus == "btn-rejected") {
            renderRejection();
        }
        calculateCount()

    }

    else if (event.target.closest('.btn-delete')) {

        const card = event.target.closest('.content');

        if (!card) return;

        const companyName = card.querySelector('.company').innerText;

        // Remove from DOM
        card.remove();

        // Remove from interview list
        interviewList = interviewList.filter(
            item => item.companyName !== companyName
        );

        // Remove from rejection list
        rejectionList = rejectionList.filter(
            item => item.companyName !== companyName
        );

        calculateCount();
    }
})



