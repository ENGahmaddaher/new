const selectColor_1=document.querySelector('.svg-1')
const selectColor_2=document.querySelector('.svg-2')
const selectColor_3=document.querySelector('.svg-3')
const colorChooser_1=document.querySelector('#colorPicker-1')
const colorChooser_2=document.querySelector('#colorPicker-2')
const colorChooser_3=document.querySelector('#colorPicker-3')



colorChooser_1.addEventListener('input', (event) => {
    const selectC = event.target.value;
    selectColor_1.style.fill = selectC;
});

colorChooser_2.addEventListener('input', (event) => {
    const selectC = event.target.value;
    selectColor_2.style.fill = selectC;
});

colorChooser_3.addEventListener('input', (event) => {
    const selectC = event.target.value;
    selectColor_3.style.fill = selectC;
});