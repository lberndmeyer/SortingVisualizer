/*
    *****************
    Owner: Lukas Berndmeyer    
    *****************
*/

function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(n²)";
    document.getElementById("Time_Average").innerText="O(n²)";
    document.getElementById("Time_Best").innerText="O(n)";

    //Setting right container
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("Stable").innerText="Yes";
    document.getElementById("Method").innerText="Insertion";

    delayIterator=0;

    for(var i=0;i<arrayLength;i++)
    {
        div_update(divs[i],div_sizes[i],"yellow"); // currently concidered

        var key= div_sizes[i];
        var j=i-1;
        while(j>=0 && div_sizes[j]>key) 
        {
            div_update(divs[j],div_sizes[j],"red"); // currently processed 
            div_update(divs[j+1],div_sizes[j+1],"red"); // currently processed 
            div_sizes[j+1]=div_sizes[j];
            div_update(divs[j+1],div_sizes[j+1],"red"); // currently processed
            div_update(divs[j],div_sizes[j],"blue"); // done visiting index j - blue

            if(j===i-1)
            {
                div_update(divs[j+1],div_sizes[j+1],"yellow"); // currently concidered
            }
            else
            {
                div_update(divs[j+1],div_sizes[j+1],"blue"); // further search backwards - blue
            }
            j--;
        }
        div_sizes[j+1]=key;

        for(var t=0;t<i;t++)
        {
            div_update(divs[t],div_sizes[t],"green"); // update till current index - green
        }
    }
    div_update(divs[i-1],div_sizes[i-1],"green"); // successfully processed

    enable_buttons();
}