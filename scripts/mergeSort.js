/*
    *****************
    Owner: Lukas Berndmeyer    
    *****************
*/

function Merge()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(nlogn)";
    document.getElementById("Time_Average").innerText="O(nlogn)";
    document.getElementById("Time_Best").innerText="O(nlogn)";

    //Setting right container
    document.getElementById("Space_Worst").innerText="O(n)";
    document.getElementById("Stable").innerText="Yes";
    document.getElementById("Method").innerText="Merging";

    delayIterator=0;

    merge_partition(0,arrayLength-1);

    enable_buttons();
}

function merge_sort(l,m,r)
{
    var p=l,q=m+1;

    var Arr=[],k=0;

    for(var i=l; i<=r; i++)
    {
        if(p>m)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red"); // currently processed
        }
        else if(q>r)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red"); // currently processed
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red"); // currently processed
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red"); // currently processed
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[l++]=Arr[t];
        div_update(divs[l-1],div_sizes[l-1],"green"); // element processed - green
    }
}

function merge_partition(l,r)
{
    if(l < r)
    {
        var m = l + Math.floor((r-l)/2);
        div_update(divs[m],div_sizes[m],"yellow"); // currently processed

        merge_partition(l,m); // left partition
        merge_partition(m+1,r); // right partition
        merge_sort(l,m,r);
    }
}