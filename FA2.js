    function generateTable()
{
     let start= parseInt(document.getElementById("start").value);
     let end = parseInt(document.getElementById("end").value);
 
     if (isNaN(start) || isNaN(end) || start < 2|| end >10 || start>end) 
	{
	 alert("Please enter numbers between 2 and 10");
         return;
	}
     let outputDiv = document.getElementById("output");
     outputDiv.innerHTML = "";

     let table ="<table border='1' cellpadding='5'>";
     for (let i = 1; i<= 3; i++)
	{
	 table += "<tr>";
 	 for(let x = start; x<= end; x++)
	  {
	    table += `<td>${i*x}</td>`;
  	  }
	   table+="</tr>";
	}
     table +="</table>";
     outputDiv.innerHTML=table;
}
