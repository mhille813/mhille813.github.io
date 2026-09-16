window.onload = function () {
    let totalStudyPoints = 0;
    let ownedStudyPoints = 0;

    const gradeElements = document.getElementsByClassName("grade");
    for (const gradeElement of gradeElements) {
        const gradeText = gradeElement.textContent;
        let gradePassed = false;

        // Check if number: https://stackoverflow.com/a/175787
        if (!isNaN(gradeText)) {
            if (gradeText >= 5.5) {
                gradePassed = true;
                gradeElement.classList.add("passed");
            } else {
                gradeElement.classList.add("failed");
            }
        }

        const studyPointElements = gradeElement.parentElement.getElementsByClassName("studyPoints");
        for (const studyPointElement of studyPointElements) {
            studyPointText = studyPointElement.textContent;
            if (!isNaN(studyPointText)) {
                totalStudyPoints += Number(studyPointText);
                if (gradePassed) {
                    ownedStudyPoints += Number(studyPointText);
                }
            }
        }
    }

    // TODO:
    // - study points progress
    // - study advice boundary
    // console.log(ownedStudyPoints);
    // console.log(totalStudyPoints);
};