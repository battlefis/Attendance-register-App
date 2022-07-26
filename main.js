students=[];
function submit()
{ var n1=document.getElementById("s1").value;
var n2=document.getElementById("s2").value;
var n3=document.getElementById("s3").value;
var n4=document.getElementById("s4").value;
students.push(n1);
students.push(n2);
students.push(n3);
students.push(n4);
console.log(students);
document.getElementById("display_name").innerHTML=students;
document.getElementById("submit_btn").style.display="none";
document.getElementById("sort_btn").style.display="inline-block";
}

function sort()
{
    students.sort();
    document.getElementById("display_name").innerHTML=students;
}

