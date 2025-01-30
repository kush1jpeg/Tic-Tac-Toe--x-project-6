document.addEventListener('DOMContentLoaded', (e) => {
let count = 0
let girl = document.getElementById('girl')
    let bgmusic = new Audio("elpe.mp3")
    let res = new Audio("pop.wav") 
    let oni = new Audio("oni.mp3")
    res.volume=0
    oni.volume=0
    let pop = new Audio("reset.wav")
    pop.volume=0
    bgmusic.loop = true;
    let sound= 'off'
    toggle=document.getElementById('toggle')
    toggle.addEventListener('click', () =>{
if(sound=='off'){
    bgmusic.volume=0.5
    oni.volume=1
   pop.volume=1
    res.volume=1
    bgmusic.play();
    toggle.value='🔊'
    return sound= 'on';
}else{ bgmusic.pause();
    pop.volume=0
    oni.volume=0
     res.volume=0
     toggle.value='🔇'
     return sound= 'off';
}

    })
    let turn = 'X'
    let check = false
    dis = document.getElementById('disp')
    dis.value = " ⬅️Start the game "


    function change(turn) {if(check==false){
        dis.value=turn=='X'?'O turn':'X turn';
        return turn == 'X' ? 'O' : 'X'}
        
    }

    Reset = () => {
        block = document.querySelectorAll('.space')
        Array.from(block).forEach(e => {     //array.form to convert anything into an array
            e.value = ''
           e.style.fontWeight=''
            turn = 'X'
            check = false
            count=0
            dis.value = " ⬅️Start the game"
             girl.style.width='0'
             res.play()
         
        })
    }

    let checkwin = () => {
        win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        blockval = document.querySelectorAll('.space')

        win.forEach(e => {
            if (blockval[e[0]].value === blockval[e[1]].value && blockval[e[2]].value === blockval[e[1]].value && blockval[e[0]].value != '' && blockval[e[1]].value != '' && blockval[e[2]].value != '')
                 {
                
                check = true
                girl.style.width='30rem'
                oni.play()
                dis.value = turn + ' is the winner'
               let a= blockval[e[0]].style.fontWeight='bold'
               let b=  blockval[e[1]].style.fontWeight='bold'
               let c=  blockval[e[2]].style.fontWeight='bold'

            }
        })
        if (count == 8 && !check) {
            check = true;
            return dis.value = 'DRAW ➡️ Reset';
        }
    }




    block = document.querySelectorAll('.space');
    Array.from(block).forEach(e => { 
        e.addEventListener('click', () => {
            // Stop processing clicks if the game is already won or the cell is occupied
            if (check || e.value !== '') {
                return;
            }
    
            e.value = turn;       
            checkwin();           
            if (!check) {        
                turn = change(turn);
                count += 1;      
                console.log(count);
                pop.play();      
            }
        });
    });
    
})
