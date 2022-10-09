/*
    *****************
    Owner: Lukas Berndmeyer    
    *****************
*/

function Quick()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(n²)";
    document.getElementById("Time_Average").innerText="O(nlogn)";
    document.getElementById("Time_Best").innerText="O(nlogn)";

    //Setting right container
    document.getElementById("Space_Worst").innerText="O(logn)";
    document.getElementById("Stable").innerText="No";
    document.getElementById("Method").innerText="Partitioning";

    delayIterator=0;

    quick_sort(0,arrayLength-1);

    enable_buttons();
}

function quick_partition (l, r)
{
    var i = l + 1;
    var piv = div_sizes[l] ; // first element choosen as pivot element
    div_update(divs[l],div_sizes[l],"yellow"); // currently concidered

        for(var j=l+1; j<=r; j++)
        {
            // pivot rotation
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow"); // start processing

                div_update(divs[i],div_sizes[i],"red"); // currently processed
                div_update(divs[j],div_sizes[j],"red"); // currently processed

                // swap
                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                div_update(divs[i],div_sizes[i],"red"); // value updated
                div_update(divs[j],div_sizes[j],"red"); // value updated
                div_update(divs[i],div_sizes[i],"blue"); // temp inactive
                div_update(divs[j],div_sizes[j],"blue"); // temp inactive

                i++;
            }
    }
    div_update(divs[l],div_sizes[l],"red"); // currently processed
    div_update(divs[i-1],div_sizes[i-1],"red"); // currently processed
    
    var temp=div_sizes[l]; // swap pivot element into correct position
    div_sizes[l]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[l],div_sizes[l],"red"); // currently processed
    div_update(divs[i-1],div_sizes[i-1],"red"); // currently processed

    for(var t=l;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green"); // successfully processed
    }

    return i-1; // return pivot position
}

function quick_sort (l, r)
{
    if( l < r )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (l, r) ;     
        quick_sort (l, piv_pos -1); //sorts left side
        quick_sort (piv_pos +1, r) ; //sorts right side
    }
 }