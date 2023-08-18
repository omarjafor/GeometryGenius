function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
function setArea(elementId, areas){
    const element = document.getElementById(elementId);
    element.innerText = areas;
}

function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height')
    const area = 0.5*base*height;
    setArea('triangle-area', area);
}