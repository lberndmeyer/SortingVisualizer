/*
    *****************
    Owner: Lukas Berndmeyer    
    *****************
*/

// naming convention for classes snake_case
// naming convention JS lowerCamelCase


// Initialize default variables for arraySize, generate Array, animation speed
var inpArr=document.getElementById('a_size'),arrayLength=inpArr.value;
var inpGenerate=document.getElementById("a_generate");
var inpSpeed=document.getElementById("a_speed");
var algoritmElements=document.querySelectorAll(".algos button");

// Initialise div size, divs Array, container Array
var div_sizes=[];
var divs=[];
var marginSize;
var arrayContainer=document.getElementById("array_container");
arrayContainer.style="flex-direction:row";

// Adds EventListener for generate Button, Array Size Update, animation speed
inpSpeed.addEventListener("input",visualisationSpeed);
inpGenerate.addEventListener("click",generateArray);
inpArr.addEventListener("input",updateArraySize);

function generateArray()  // generate new random Array
{
    arrayContainer.innerHTML="";

    for(var i=0;i<arrayLength;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.8 * (inpArr.max - inpArr.min) );
        divs[i]=document.createElement("div");
        arrayContainer.appendChild(divs[i]);
        marginSize=0.1;
        divs[i].style=" margin:0% " + marginSize + "%; background-color:blue; width:" + (100/arrayLength - (2*marginSize)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function updateArraySize()
{
    arrayLength=inpArr.value;
    generateArray();
}

window.onload=updateArraySize();

// Running the correct algorithm
for(var i=0;i<algoritmElements.length;i++)
{
    algoritmElements[i].addEventListener("click",startSorting);
}

function disableButtons()
{
    for(var i=0;i<algoritmElements.length;i++)
    {
        algoritmElements[i].classList=[];
        algoritmElements[i].classList.add("butt_locked");
        algoritmElements[i].disabled=true;
        inpArr.disabled=true;
        inpGenerate.disabled=true;
        inpSpeed.disabled=true;
    }
}

function startSorting() // runs the algorithm till its finished, buttons disabled
{
    disableButtons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Quick":Quick();
            break;
        case "Insertion":Insertion();
            break;
        case "Bubble":Bubble();
            break;
        case "Merge":Merge();
            break; 
        case "Heap":Heap();
            break;       
        case "Selection":Selection_sort();
            break;      
    }
}

// 7 steps from 16 to 1600 (factor 100) --> x^7 = 100 -> x ~ 1,93
function visualisationSpeed()
{
    var arraySpeed=inpSpeed.value;
    switch(parseInt(arraySpeed))
    {        
        case 1: speed=15;
                break;
        case 2: speed=24,27;
                break;
        case 3: speed=39,27;
                break;
        case 4: speed=63,54;
                break;
        case 5: speed=102,80;
                break;
        case 6: speed=166,34;
                break;
        case 7: speed=269,13;
                break;
        case 8: speed=435,45;
                break;
        
    }
    
    delayInterval=10000/(Math.floor(arrayLength/10)*speed);
}

var speed=200; // default speed
var delayInterval=10000/(Math.floor(arrayLength/10)*speed); // default delay
var delayIterator=0;  // default iterator set to Null


function div_update(arrayContainer,height,color)
{
    window.setTimeout(function(){
        arrayContainer.style=" margin:0% " + marginSize + "%; width:" + (100/arrayLength-(2*marginSize)) + "%; height:" + height + "%; background-color:" + color + ";";
    },delayIterator+=delayInterval);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algoritmElements.length;i++)
        {
            algoritmElements[i].classList=[];
            algoritmElements[i].classList.add("butt_unselected");
            algoritmElements[i].disabled=false;
            inpArr.disabled=false;
            inpGenerate.disabled=false;
            inpSpeed.disabled=false;
        }
    },delayIterator+=delayInterval);
}