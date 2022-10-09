/*
    *****************
    Owner: Lukas Berndmeyer
    *****************
*/

function Bubble()
{
    //Setting Time complexity
    document.getElementById("Time_Worst").innerText="O(n²)";
    document.getElementById("Time_Average").innerText="O(n²)";
    document.getElementById("Time_Best").innerText="O(n)";

    //Setting right container
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("Stable").innerText="Yes";
    document.getElementById("Method").innerText="Exchanging";

    delayIterator=0;

    for(var i=0;i<arrayLength-1;i++)
    {
        for(var j=0;j<arrayLength-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow"); // current processed index - yellow 

            if(div_sizes[j]>div_sizes[j+1])  // swap necessary
            {
                div_update(divs[j],div_sizes[j], "red"); // currently processed index j - red
                div_update(divs[j+1],div_sizes[j+1], "red"); // currently processed index j + 1 - red

                var temp=div_sizes[j]; // temp variable for easy swap
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red"); // update height for index j
                div_update(divs[j+1],div_sizes[j+1], "red"); // update height for index j+1
            }
            div_update(divs[j],div_sizes[j], "blue"); // alrady processed index in this loop - blue
        }
        div_update(divs[j],div_sizes[j], "green"); // final element found - successfull element - green
    }
    div_update(divs[0],div_sizes[0], "green"); // last element is the first - green - algo done

    enable_buttons();
}