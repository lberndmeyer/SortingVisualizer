/*
    *****************
    Owner: Lukas Berndmeyer    
    *****************
*/

function Selection_sort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(n²)";
    document.getElementById("Time_Average").innerText="O(n²)";
    document.getElementById("Time_Best").innerText="O(n²)";

    //Setting right container
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("Stable").innerText="No";
    document.getElementById("Method").innerText="Selection";

    delayIterator=0;

    for(var i=0; i<arrayLength-1; i++)
    {
        div_update(divs[i],div_sizes[i],"yellow"); // currently processing

        index_min=i; // assume first element is min

        for(var j= i+1; j<arrayLength; j++)
        {
            div_update(divs[j],div_sizes[j],"red");

            if(div_sizes[j]<div_sizes[index_min]) // if this element is less, then new min
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue"); // old min is temp - blue
                }
                index_min=j; // index j is new minimum
                div_update(divs[index_min],div_sizes[index_min],"red"); // update colour accordingly
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue"); // else temp
            }
        }
        
        if(index_min!=i) // if index_min is not i -> swap
        {
            var temp=div_sizes[index_min]; // swap
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");  // colour and value update
            div_update(divs[i],div_sizes[i],"red"); // colour and value update
            div_update(divs[index_min],div_sizes[index_min],"blue"); // colour and value update
        }
        div_update(divs[i],div_sizes[i],"green"); // successfully processed
    }
    div_update(divs[i],div_sizes[i],"green"); // successfully processed

    enable_buttons();
}