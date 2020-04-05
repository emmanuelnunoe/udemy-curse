/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/







var scores, roundScore, activePlayer,gamePlaying,previusRoll, winSocre;


init();

// anonymous function example,
document.querySelector('.btn-roll').addEventListener('click', function(){
    
         if( gamePlaying ) {
          //1. randon number
            var dice  = Math.floor( Math.random() * 6)+1;
            var dice2 = Math.floor( Math.random() * 6)+1;
             console.log(dice, dice2);
                
             // Loosing all score with 2 in a row number six
                   if( previusRoll == 6 && dice == 6 ){
                    scores[activePlayer] = 0;
                        previusRoll=0;
                       nextPlayer();
                    
                   }
               // 1.1 saving Rooll
                 previusRoll = dice;
    
            //2. Display the result
            var diceDom = document.querySelector('.dice');
            diceDom.style.display = 'block';
            diceDom.src = 'dice-'+ dice +'.png';
             var diceDom2 = document.querySelector('.dice2');
             diceDom2.style.display = 'block';
             diceDom2.src = 'dice-'+ dice2 +'.png';

            //3. Update the round score if the rolled number was NOT a 1
            if( dice !== 1 || dice2 != 1){
                //Add score
                roundScore +=dice;
                roundScore +=dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }else{
                //next player
                nextPlayer();

            }        
         }
        
      
    
} );

document.querySelector('.btn-hold').addEventListener('click',function(){
    if( gamePlaying ) {
        
    // Add CURRENT score to GLOBAL score 
        scores[activePlayer] += roundScore;
        console.log(scores[activePlayer]);
    // Update the UI
    document.querySelector('#score-'+activePlayer).textContent =scores[activePlayer];
    
    
    // Chec if player won the game
    if(scores[activePlayer] >= winSocre) {
        document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2  ').style.display = 'none';

        document.querySelector('.player-' + activePlayer + '-panel' ).classList.add('winner');     
        document.querySelector('.player-' + activePlayer + '-panel' ).classList.remove('active');
        gamePlaying = false;
    }else{
           
    //next player
    nextPlayer();
    
    
    }
        
    }


})

function nextPlayer() {
            activePlayer===0? activePlayer=1 : activePlayer=0 ;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active'); 
            
            
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.dice').style.display = 'none'; 
            document.querySelector('.dice2').style.display = 'none'; 
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    

    scores = [0,0];
    roundScore=0;
    activePlayer = 0;
    gamePlaying = true;
    winSocre = document.getElementById('winScore').value;
    previusRoll=0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display= 'none';
document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';
document.getElementById('name-0').textContent ='Player1';  
document.getElementById('name-1').textContent ='Player2';
        document.querySelector('.player-0-panel' ).classList.remove('winner');     
        document.querySelector('.player-1-panel' ).classList.remove('winner');        
        document.querySelector('.player-0-panel' ).classList.remove('active');     
        document.querySelector('.player-1-panel' ).classList.remove('active');     
        document.querySelector('.player-0-panel' ).classList.add('active');     


}

//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML= '<em>' + dice + '</em>'

//var x = document.querySelector('#score-0').textContent;
//console.log(x);