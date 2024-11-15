// =========== (9) =============
// var numBer = Number(window.prompt("please enter number.."));

// for(var i = numBer; i >= 1; i--)
// {
//     console.log(i);
    
// }


// ============ (10) ==============
// var numBer = Number(window.prompt("please enter number.."));

// for(var i = 2; i <= 12; i++)
// {
//     console.log(numBer * i);
    
// }


// =============== (11) ============
// var numBer = Number(window.prompt("please enter number.."));

// for(var i = numBer; i <= 15; i+=2)
// {
//     console.log(i);
    
// }


// ================= (12) =================
// function power( num1 , num2)
// {
//     var mult = num1;
//     for(var i = 1; i < num2; i++)
//     {
//         mult *= num1;
//     }
//     return mult;
// }
// var result = power(4 , 3)
// console.log(result);


// ============= (13) ==============
// function calcTotal(sub1 , sub2, sub3, sub4, sub5)
// {
//     var sumTotal = sub1 + sub2 + sub3 + sub4 + sub5;
//     return sumTotal;
// }
// var totalFiveSubjects = calcTotal(95, 76, 58, 90, 89);
// console.log("Total Marks : " + totalFiveSubjects);

// function calcPercentAndAverage(sub1 , sub2, sub3, sub4, sub5)
// {
//     var percent_average = (sub1 + sub2 + sub3 + sub4 + sub5) / 5;
//     return percent_average;
// }
// var percentAndAverage = calcPercentAndAverage(95, 76, 58, 90, 89);
// console.log("Percent and Average : " + percentAndAverage);


// ============== (14) =============
// function findDaysInMonth(monthNumber)
// {
//     var numberMonth = 1;
//     for(var i = numberMonth; i < 32; i++)
//     {
//         monthNumber = i;
//     }
//     return monthNumber;
// }
// var daysInMonth = findDaysInMonth();
// console.log("Days in month : " + daysInMonth);


// ============ (15) ===============
function marksFiveSubjects(physics, mathmatics, biology, chemistry, computer)
{
    switch(true)
    {
        case (physics >= 90):
            console.log("Physics: Grade A");
        case (mathmatics >= 80):
            console.log("Mathmatics: Grade B");
        case (biology >= 70):
            console.log("Biology: Grade C");
        case (chemistry >= 60):
            console.log("Chemistry: Grade D");
        case (computer >= 40):
            console.log("Computer: Grade E");
        break;

        default:
            console.log("Grad F");
            
            
    }
}
var resultMarksSubjects = marksFiveSubjects(90, 80, 70, 60, 40);
console.log(resultMarksSubjects);

