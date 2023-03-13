const data = [
  { skills: "Climbing", Score1: 45, Score2: 57, id: 1 },
  { skills: "Adaptability", Score1: 55, Score2: 67, id: 2 },
  { skills: "Balance", Score1: 65, Score2: 77, id: 3 },
  { skills: "Flexibility", Score1: 75, Score2: 37, id: 4 },
  { skills: "Stealth", Score1: 85, Score2: 87, id: 5 },
  { skills: "Problem-solving", Score1: 95, Score2: 47, id: 6 },
];

//2019
function myFunctionDec(data) {
  const sortingScore1InDec = data.sort((a, b) => b.Score1 - a.Score1);
  data = sortingScore1InDec;
  appendData(data);
}

//2024
function myFunctionAsc(data) {
  const sortingScore2InAsc = data.sort((a, b) => b.Score2 - a.Score2);
  data = sortingScore2InAsc;
  appendData(data);
}

const appendData = (data) => {
  const container = document.querySelector("tbody");
  container.innerHTML = null;
  data.forEach((el, i) => {
    const div = document.createElement("tr");
    const skill = document.createElement("td");
    skill.innerText = el.skills;
    const score1 = document.createElement("td");
    score1.innerText = `${el.Score1}%`;
    const score2 = document.createElement("td");
    score2.innerText = `${el.Score2}%`;

    div.append(skill, score1, score2);
    container.append(div);
  });
};
appendData(data);
