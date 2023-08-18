// Reusable Function ........................................
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
function setArea(elementId, areas){
    const element = document.getElementById(elementId);
    element.innerText = areas;
}
function addOnCalculationEntry(name, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${name} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success m-2">Delete</button>`;
    calculationEntry.appendChild(p);
}
// Onclick Function ........................................
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height')
    const area = 0.5*base*height;
    setArea('triangle-area', area);
    addOnCalculationEntry('Triangle', area);
}
function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width*length;
    setArea('rectangle-area', area);
}
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    setArea('parallelogram-area', area);
}
function calculateEllipseArea(){
    const large = getInputValue('ellipse-large');
    const short = getInputValue('ellipse-short');
    const area = (3.1415 * large * short).toFixed(3);
    setArea('ellipse-area', area);
}
function calculatePentagonArea(){
    const base = getInputValue('pentagon-base');
    const height = getInputValue('pentagon-height');
    const area = 0.5 * base * height;
    setArea('pentagon-area', area);
}
function calculateRhombusArea(){
    const base = getInputValue('rhombus-base');
    const height = getInputValue('rhombus-height');
    const area = 0.5 * base * height;
    setArea('rhombus-area', area);
}