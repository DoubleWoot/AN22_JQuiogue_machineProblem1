//CCS0043 Source Code Template for 3T AY 2022-2023
/*
	Program: 		Computation of Grades using Function
	Programmer: 	Josh Daryll Quiogue
	Sections: 		AN22
	Start Date: 	June 2, 2023
	End Date: 		June 2, 2023 
*/

const studentData = {
	student1: {name: "", fa: [0, 0, 0, 0, 0], sa: [0, 0, 0], finals: 0},
	student2: {name: "", fa: [0, 0, 0, 0, 0], sa: [0, 0, 0], finals: 0},
	student3: {name: "", fa: [0, 0, 0, 0, 0], sa: [0, 0, 0], finals: 0},
	student4: {name: "", fa: [0, 0, 0, 0, 0], sa: [0, 0, 0], finals: 0},
	student5: {name: "", fa: [0, 0, 0, 0, 0], sa: [0, 0, 0], finals: 0}
}

let studentNum = 1;

function inputStudentData(studentNum){
	let student = studentData['student' + studentNum];
	student.name = prompt("Enter name of student " + studentNum + ": ");
	studentName = student.name

	for(let i = 0; i < 5; i++){
		FA_score = parseFloat(prompt("Enter enabling assessment " + (i + 1) + ": "));
		studentData['student' + studentNum].fa.push(FA_score);
	}

	for(let i = 0; i < 3; i++){
		SA_score = parseFloat(prompt("Enter summative assessment " + (i + 1) + ": "));
		studentData['student' + studentNum].sa.push(SA_score);
	}

	student.finals = parseFloat(prompt("Enter major exam grade: "));
	finalsScore = student.finals

	gradeComputation(studentNum)
}

function gradeComputation(studentNum){
	let student = studentData['student' + studentNum];
	let FA_sum = student.fa.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	let FA_average = FA_sum / 5;
	let SA_sum = student.sa.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	let SA_average = SA_sum / 3;
	let finals = student.finals;


	let finalGrade = (FA_average * 0.3) + (SA_average * 0.3) + (finals * 0.4);
	let letterGrade = ''
	switch (true){
	case (finalGrade >= 90 && finalGrade <= 100):
		letterGrade = 'A'
		break;
	case (finalGrade >= 80 && finalGrade < 90):
		letterGrade = 'B'
		break;
	case (finalGrade >= 71 && finalGrade < 80):
		letterGrade = 'C'
		break;
	case (finalGrade >= 60 && finalGrade < 70):
		letterGrade = 'D'
		break;
	case (finalGrade < 60):
		letterGrade = 'D'
		break;
	}

	console.log("\n\tStudent Name: " + studentName +
				"\tEnabiling Assessment Average: " + FA_average.toPrecision(2) +
				"\tSummative Assessment Average: " + SA_average.toPrecision(2) +
				"\tFinals Score: " + finals +
				"\tOverall: " + finals.toPrecision(2) + 
				"\tLetter Equivalent: " + letterGrade)

	let choice = prompt("Would you like to add another student? (y/n): ")
	switch (true){
	case (choice == 'y'):case (choice == 'Y'):
		inputStudentData(studentNum + 1);
		break;
	case (choice == 'n'): case (choice == 'N'):
		break;
	}
}

inputStudentData(studentNum);