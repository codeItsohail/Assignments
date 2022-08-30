/*2. Write a function using switch case to find the grade of a student based
     on marks obtained
     a. “S grade” if the marks are between 90 and 100.
     b. “A grade” if the marks are between 80 and 90.
     c. “B grade” if the marks are between 70 and 80.
     d. “C grade” if the marks are between 60 and 70.
     e. “D grade” if the marks are between 50 and 60.
     f. “E grade” if the marks are between 40 and 50.
     g. “Student has failed” if the marks are between 0 and 40.
     h. Else output “Invalid marks”.
     3.                               */

    function checkGrade(marks)
    {
        let grade;
        switch(true)
        {
            case (marks>=90 && marks<=100):
                grade="S grade";
                break;
            case (marks>=80 && marks<90):
                grade="A grade";
                break;
            case (marks>=70 && marks<80):
                grade="B grade";
                break;
            case (marks>=60 && marks<70):
                grade="C grade";
                break;
            case (marks>=50 && marks<60):
                grade="D grade";
                break;
            case (marks>=40 && marks<50):
                grade="E grade";
                break;
            case (marks>0 && marks<40):
                grade="Student has failed";
                break;
            default:
                return "invalid marks";
        }
        return grade;
    }
    let result=checkGrade(4);
    console.log(result);