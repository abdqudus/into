const featuresBtn=document.getElementById('features')
const closeIcon=document.querySelector('.close-icon')
const openIcon=document.querySelector('.open-icon')
const featuresDiv=document.getElementById('feature-items')
const companyBtn=document.querySelector('.company')
const companyDiv=document.getElementById('about')

const featuresBtnHamburger=document.getElementById('features')
const featuresDivHamburger=document.getElementById('feature-items-1')
const companyDivHamburger=document.getElementById('about-1')
document.body.addEventListener('click',(e)=>{
  if(e.target.classList.contains('close-icon')){
    toggleFunction(document.querySelector('.hamburger'))
  }else if(e.target.classList.contains('open-icon')){
    toggleFunction(document.querySelector('.hamburger'))
  }else if(e.target.id==='features'||e.target.id==='up'||e.target.id==='down'){
    toggleFunction(featuresDiv)
    toggleFunction(document.getElementById('up'))
    toggleFunction(document.getElementById('down'))
  }else if(e.target.classList.contains('company')||e.target.id==='up1'||e.target.id==='down1'){
    toggleFunction(companyDiv)
    toggleFunction(document.getElementById('up1'))
    toggleFunction(document.getElementById('down1'))
  }else if(e.target.id==='features-1'||e.target.id==='up2'||e.target.id==='down2'){
    toggleFunction(featuresDivHamburger)
    toggleFunction(document.getElementById('up2'))
    toggleFunction(document.getElementById('down2'))
  }else if(e.target.classList.contains('company-1')||e.target.id==='up3'||e.target.id==='down3'){
    toggleFunction(companyDivHamburger)
    toggleFunction(document.getElementById('up3'))
    toggleFunction(document.getElementById('down3'))
  }
})
function toggleFunction(parameter){
  parameter.classList.toggle('hide')
}
