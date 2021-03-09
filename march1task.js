var curdate = new Date();
function randomnum(num)
{ 
    if(num.length==8)
    {
        document.querySelector("#rannum").innerText=num;
        return ;
    }
    var temp = Math.floor(Math.random()*10);
    // console.log(temp+" "+temp.toString());
    if(num.indexOf(temp.toString())==(-1))
   {    
        
        num = num + temp;
       // console.log(num);

    }
    randomnum(num);
} 
document.querySelector("#randomnum").addEventListener("click",()=>
{
    randomnum("");
})

//console.log(new Date().toString());
var mon =[31,28,31,30,31,30,31,31,30,31,30,31]; 
var dday =0 ; 
var dyear =0;
var dmonth=0;
var dhour =0 ; 
var dmin =0;
var dsec=0;
var dmil=0;
var date = 0 ;
var month =0 ;
var year =0 ;
document.querySelector("#sub").addEventListener("click",()=>
{
    var userdata = document.querySelector("#date").value ; 
    var arr = userdata.split("/");
    console.log(arr);
     date = +arr[0];
     month = + arr[1];
     year = + arr[2]; 
   // console.log("month "+month);
     if(typeof (Validate(date,month,year))=="undefined")
     {
    calculate(date,month,year);}
});

function Validate(d,m,y)
{   if((typeof d=="number")&&(typeof m=="number")&&(typeof y=="number")){

    if(y<curdate.getFullYear())
    { 
           if(m<=12){

            if(m==2)
            {
                    if(y%4==0)
                    {
                        if((y%100==0)&&(y%400==0))
                        {
                            if(d>29)
                            {
                                alert("Invalid date");
                                reset(); 
                                return false ; 
                            } 
                        }
                        else
                        {
                            if(y%100==0)
                            {
                                if(d>28)
                                {
                                    alert("Invalid date");  
                                    reset(); 
                                    return false ; 
                                }   
                            }
                            else
                            {
                                if(d>29)
                                {
                                alert("Invalid date");
                                reset(); 
                                return false ;  
                                  } 
                            }
                        }
                    }
                    else
                    {
                        if(d>28)
                        {
                            alert("Invalid date");  
                            reset(); 
                            return false ; 
                        }
                    }
       }
       else
       {    
           
           if(d>mon[m-1])
           {
            alert("Invalid date");  
            reset(); 
            return false ; 
           }
       }
    }
    else
    {
        alert("Invalid date");
        reset(); 
        return false ; 
    }}
    else
    {
        alert("Invalid date");
        reset(); 
        return false ; 
    }
}
else
{
    alert("Invalid date");  
    reset(); 
    return false ;
}
}

function reset()
{
    document.querySelector("#date").value="";
    date =0 ; 
    month =0 ;
    year =0 ;
    document.querySelector("#de").innerText= "";
    document.querySelector("#Year").innerText= "";
    document.querySelector("#month").innerText= "";
    document.querySelector("#day").innerText= "";
    document.querySelector("#min").innerText= "";
    document.querySelector("#sec").innerText= "";
    document.querySelector("#mil").innerText= "";
   // console.log(date,month,year); 
}

function calculate(d,m,y)
{
 if(y!=0)
 {
    
 
  let lyc =0 
  if(m<=2)
  {
     lyc= findleapyear(y);
  }
  else
  {
      lyc= findleapyear(y+1);
  }
 if((mon[m-1]-d)>=0)
 {
     dday=(mon[m-1]-d)+1;
    // console.log(dday);
 }
 
 dyear = curdate.getFullYear() -(y+1);
 dday = (365*(dyear+1))-calday(m)+calday(curdate.getMonth())+dday+lyc+curdate.getDate();
 //console.log(dday);
 dmonth = dyear*12 + (12-m) + curdate.getMonth(); 
 //console.log(dyear,(12-m),m,curdate.getMonth())
 if(dmonth<0){

    dmonth = 0;
 }
 
 
// console.log(dyear*12);
// console.log((12-m));
 //console.log(curdate.getMonth());
 /*console.log((365*(dyear+1)));
 console.log(calday(m));
 console.log(calday(curdate.getMonth()));
 console.log(lyc);
 console.log((findleapyear(y)-lyc));*/
 
 //console.log(curdate.getMilliseconds());
 dhour = (dday*24 )+ curdate.getHours();
 dmin = (dhour*60) + curdate.getMinutes();
 dsec = (dmin*60) + curdate.getSeconds();
 dmil = (dsec * 1000) + curdate.getMilliseconds();

 if((m-1)<=curdate.getMonth())
 {
   if((m-1)==curdate.getMonth())
   {
       if(d<=curdate.getDate())
       {
           dyear++;
       }
   }
   else
   {
       dyear++;
   }
 }
// console.log(dmonth);
 displaycontent(dyear,dmonth,dday,dmin,dsec,dmil);
 }
 
}
function findleapyear(y)
{   
    let result =0 ;
    for(let i = y; i<2021; i++)
    {  
        if(i%4==0)
        {
            if((i%100==0)&&(i%400==0))
            {   
                
                result++;
            }
            else
            {  
                if(i%100!=0)
                {   
                    
                    result++;
                }
            }
        }
        
    }
    return result ; 
}

function calday(j)
{
    let result =0 ; 
  for(let i = 0;i<j;i++)
  {
   result = result +mon[i];
  }
  return result;
}
function displaycontent(y,m,d,min,s,mil)
{
    document.querySelector("#Year").innerText= y;
    document.querySelector("#month").innerText= m;
    document.querySelector("#day").innerText= d;
    document.querySelector("#min").innerText= min;
    document.querySelector("#sec").innerText= s;
    document.querySelector("#mil").innerText= mil;
    document.querySelector("#date").value="";
    document.querySelector("#de").innerText= date+" -"+month+" -"+year;

}
