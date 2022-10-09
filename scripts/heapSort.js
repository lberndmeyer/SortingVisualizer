/*
    *****************
    Owner: Lukas Berndmeyer    
    *****************
*/

function Heap()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(nlogn)";
    document.getElementById("Time_Average").innerText="O(nlogn)";
    document.getElementById("Time_Best").innerText="O(nlogn)";

    //Setting right container
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("Stable").innerText="No";
    document.getElementById("Method").innerText="Selection";

    delayIterator=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],div_sizes[i],"red"); // currently processed
    div_update(divs[j],div_sizes[j],"red"); // currently processed

    // swap
    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;

    div_update(divs[i],div_sizes[i],"red"); // value update
    div_update(divs[j],div_sizes[j],"red"); // value update

    div_update(divs[i],div_sizes[i],"blue"); // temp inactive
    div_update(divs[j],div_sizes[j],"blue"); // temp inactive
}

function max_heapify(n,i)
{
    var max=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_sizes[l]>div_sizes[max])
    {
        if(max!=i)
        {
            div_update(divs[max],div_sizes[max],"blue"); // temp inactive
        }

        max=l;

        div_update(divs[max],div_sizes[max],"red"); // currently processed
    }

    if(r<n && div_sizes[r]>div_sizes[max])
    {
        if(max!=i)
        {
            div_update(divs[max],div_sizes[max],"blue"); // temp inactive
        }

        max=r;

        div_update(divs[max],div_sizes[max],"red"); // currently processed
    }

    if(max!=i)
    {
        swap(i,max);

        max_heapify(n,max);
    }
}

function heap_sort()
{
    for(var i=Math.floor(arrayLength/2); i>=0; i--)
    {
        max_heapify(arrayLength,i);
    }

    for(var i=arrayLength-1; i>0; i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"green"); // successfully processed
        div_update(divs[i],div_sizes[i],"yellow"); // currently concidered

        max_heapify(i,0); // heapify

        div_update(divs[i],div_sizes[i],"blue"); // temp inactive
        div_update(divs[i],div_sizes[i],"green"); // successfully processed
    }
    div_update(divs[i],div_sizes[i],"green"); // successfully processed
}