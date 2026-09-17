window.onload = function () {
    let totalStudyPoints = 0;
    let ownedStudyPoints = 0;
    let failedStudyPoints = 0;

    const examTableBody = document.getElementById("examTableBody");
    for (const tableRow of examTableBody.children) {
        const gradeElement = tableRow.getElementsByClassName("grade")[0];
        if (!gradeElement) {
            continue;
        }
        const gradeText = gradeElement.textContent;
        let gradePassed = false;
        let gradeFailed = false;

        // Check if number: https://stackoverflow.com/a/175787
        if (!isNaN(gradeText)) {
            if (gradeText >= 5.5) {
                gradePassed = true;
                gradeElement.classList.add("passed");
            } else {
                gradeFailed = true;
                gradeElement.classList.add("failed");
            }
        }

        const studyPointsElement = tableRow.getElementsByClassName("studyPoints")[0];
        const studyPointText = studyPointsElement.textContent;
        if (!isNaN(studyPointText)) {
            const studyPointNumber = Number(studyPointText)
            totalStudyPoints += studyPointNumber;
            if (gradePassed) {
                ownedStudyPoints += studyPointNumber;
            } else if (gradeFailed) {
                failedStudyPoints += studyPointNumber;
            }
        }

        // TODO:
        // - study points progress
        // - study advice boundary
        // console.log(ownedStudyPoints);
        // console.log(totalStudyPoints);
        // https://www.geeksforgeeks.org/web-templates/how-to-create-a-pie-chart-using-html-css/
    }
};