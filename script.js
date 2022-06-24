// const options = [
//     {value:1, label: 'firm'},
//     {value:2, label: 'airplanes'},
//     {value:3, label: "girls"},
// ]
 
// class  DropDown {
 
//     constructor(selector, options){
//         this.$container = document.querySelector(selector);
//         this.options = options;
//         this.defaultLabel = document.querySelector('.container__label').innerHTML = this.options
//         this.$label = document.querySelector('.container__label')
//         this.$dropDrown = document.querySelector('.container__drop-down')
//         this.$container.addEventListener ('click', (e) => {
//             if (e.target.classList.contains('container__label')){
//                 if(this.$container.classList.contains('active')){
//                     this.close()
//                 } else {
//                     this.open()
//                 }
//             }else {
//               if (e.target.tagName.toLowerCase() === 'li'){
//                   this.selectedItem(e.target.dataset.id)
//             }
//         }) 
         
//           this.itemsHTML = this.options.map(({value, label}) => {
//               return '<li data-id=${value}>${label}</li>'
//           }).join('')
//         this.$dropDrown.insertAdjacentHTML('afterbegin', this.itemsHTML)
//     }
 
//     selectedItem(id) {
//         this.$label.innerHTML = this.options.find(item => item.value === id).label
//         console.log();
//     }
//     open() {
//         this.$container.classList.add('active')
//     }
 
//     close(){
//         this.$container.classList.remove('active')
//     }
// }
 
// const customSelect = new DropDown('.container')
 
// console.log(customSelect);

const select = document.querySelector(".selected");
const otionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelector(".options");

selected.addEventLitener("click", () => {
    optionsContainer.classList.toggle("active");
});
optionsList.forEach(o => {
    o.addEventLitener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
})