document.addEventListener('DOMContentLoaded', () => {
    var tutorialListContainer = document.getElementsByClassName('tutorial-list-container')[0];
    var selectedFilter = document.getElementsByClassName('selected-filter')[0];
    tutorialListContainer.addEventListener('mousemove', () => {
        selectedFilter.classList.add('active');
    });

    tutorialListContainer.addEventListener('mouseleave', () => {
        selectedFilter.classList.remove('active');
    });

    var activeTutorialList = document.getElementsByClassName('active-tutorial-list')[0];
    var tutorialList = document.getElementsByClassName('tutorial-list');
    var tutorialSelected = document.getElementsByClassName('tutorial-selected')[0];
    var firstTutorialList = document.getElementsByClassName('first-tutorial-list')[0];

    tutorialListContainer.addEventListener('click', (e) => {
        if (e.target.className === 'tutorial-list') {
            for (const i of tutorialList) {
                i.className = 'tutorial-list'
            }
            e.target.classList.add('active-tutorial-list')
            tutorialSelected.innerHTML = e.target.innerHTML;

            if (e.target === tutorialList[0]) {
                firstTutorialList.style.marginLeft = '0%'
            } else if (e.target === tutorialList[1]) {
                firstTutorialList.style.marginLeft = '-100%'
            } else {
                firstTutorialList.style.marginLeft = '-200%'
            }
        }
    })
    tutorialSelected.innerHTML = activeTutorialList.innerHTML;
})