const changeOnMouseOver = (() =>{
    const btn = document.getElementById("mouseover");
    btn.style.backgroundColor="red";
}) ;

const changeOnMouseOut = (() =>{
    const btn = document.getElementById("mouseout");
    btn.style.backgroundColor="red";
}) ;

const changeOnClick = (() =>{
    const btn = document.getElementById("mouseclick");
    btn.style.backgroundColor="red";
}) ;

const changeOnDblClick = () =>{
    const btn = document.getElementById("mousedblclick");
    console.log(btn.style.display);
    btn.style.backgroundColor="red";
};

const changeOnFocus = () =>{
    const inputf = document.getElementById("onfocus");
    inputf.style.backgroundColor = "red";
};

const changeOnBlur = () =>{
    const inputf = document.getElementById("onblur");
    console.log(inputf);
    inputValue = inputf.value;
    inputf.value = inputValue.toUpperCase();
    // console.log(newval);
};