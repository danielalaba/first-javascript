var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function getDiff(minuend, subtrahend) {
    return minuend - subtrahend;
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

function getAcronym(fullName) {
    var nameArr = fullName.split(" ");
    var acronym = "";
    for(var i = 0; i < nameArr.length; i++) {
        acronym += nameArr[i].charAt(0);
    }
    return acronym.toUpperCase();
}

function getEvenNum(arr) {
    var num = [];
    for(var i=0; i < arr.length; i++) {
        if (numArray[i] % 2 === 0) {
            num.push(numArray[i]);
        }
    }
    return num;
}

var btnGetNum = document.getElementById("btnGetNum");
btnGetNum.addEventListener("click", function(e) {
    e.preventDefault();
    var fullnameInput = document.getElementById("fullname");
    var content = document.getElementById("content");
    content.textContent = getAcronym(fullnameInput.value);
});