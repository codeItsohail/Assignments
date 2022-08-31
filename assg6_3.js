/*3) Write a JavaScript program which accept a number as input in the
     function parameter and insert dashes (-) between each two even
     numbers.
     For example if you accept 025468 as the output should be 0-254-6-8.
     computeDash(025468) -> 0-254-6-8.          */

     console.clear();
     let num="025468";
     let computeDash=(num)=>
     {
        let str="";
        for(let i=0;i<num.length-1;i++)
        {
            if(Number(num[i])%2===0 && Number(num[i+1])%2===0)
            str+=num[i]+"-";
            else
            str+=num[i];
        }
        str+=num[num.length-1];
        return str;
     }
     console.log(computeDash(num));