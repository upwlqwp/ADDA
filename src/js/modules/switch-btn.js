const body = document.querySelector('.body')
const switchBtn = document.querySelector('.switch__btn')

const getSwitchBtn = () => {
    let getMode = localStorage.getItem('mode');
    if(getMode && getMode === 'light'){
        body.classList.add('light');
        switchBtn.classList.add('active')
    }
    
    switchBtn.addEventListener('click', () => {
        body.classList.toggle('light')
    
        if(!body.classList.contains('light')){
            return localStorage.setItem('mode', 'dark');
        }
    
            localStorage.setItem('mode', 'light');
        
    })
    
    switchBtn.addEventListener('click', () =>  switchBtn.classList.toggle('active'))
    
}



export default getSwitchBtn;