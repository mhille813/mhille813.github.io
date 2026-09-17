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
                gradeElement.classList.add("gradePassed");
            } else {
                gradeFailed = true;
                gradeElement.classList.add("gradeFailed");
            }
        } else {
            gradeElement.classList.add("gradeAvailable");
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
    }

    const availableStudyPoints = totalStudyPoints - ownedStudyPoints - failedStudyPoints;

    if (totalStudyPoints == 0) {
        pieChart.style = "display: none;"
    } else {
        const pieChart = document.getElementsByClassName("pieChart")[0];
        let pieChartStyle = "background-image: conic-gradient("
        let currentAngle = 0;
        if (ownedStudyPoints) {
            const angle = ownedStudyPoints / totalStudyPoints * 360 + currentAngle;
            const color = "var(--grade-passed-color)";
            pieChartStyle += `${color} ${currentAngle}deg, ${color} ${angle}deg, `;
            currentAngle = angle;
        }
        if (failedStudyPoints) {
            const angle = failedStudyPoints / totalStudyPoints * 360 + currentAngle;
            const color = "var(--grade-failed-color)";
            pieChartStyle += `${color} ${currentAngle}deg, ${color} ${angle}deg, `;
            currentAngle = angle;
        }
        if (availableStudyPoints) {
            const angle = availableStudyPoints / totalStudyPoints * 360 + currentAngle;
            const color = "var(--grade-available-color)";
            pieChartStyle += `${color} ${currentAngle}deg, ${color} ${angle}deg, `;
            currentAngle = angle;
        }
        pieChartStyle = pieChartStyle.slice(0, -2) + ");";
        pieChart.style = pieChartStyle;
    }

    // TODO:
    // - study advice boundary
    // console.log(ownedStudyPoints);
    // console.log(failedStudyPoints);
    // console.log(totalStudyPoints);
    // console.log(availableStudyPoints);
    // https://www.geeksforgeeks.org/web-templates/how-to-create-a-pie-chart-using-html-css/
};