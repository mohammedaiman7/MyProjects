let res = JSON.parse(localStorage.getItem('res'));
           if(res === null){
           res={
           win: 0,
           lose: 0,
           tie: 0
        };
           }
           
         function result(user,computer)
         {
            let computer1=``;
            let player=``;
            let str =``;
            let result=``;
             if(user=='Rock')
             {
                player = `rock`;
                if(0 <= computer && computer < 1/3)
                {
                    computer1=`rock`;
                res.tie += 1;   
                result=`Tie`;
                str =`You picked Rock and Computer picked Rock `;
                }
                else if(1/3 <= computer && computer < 2/3)
                {
                    computer1=`paper`;
                res.lose += 1;
                result= `You Lose`;
                str =`You picked Rock and Computer picked paper  `;
                }
                else {
                    computer1=`scissors`;
                 res.win += 1;
                 result=`You Win`;
                 str = `You picked Rock and Computer picked scissors `; 
                }   
             }
             else if(user=='Paper')
             {
                
                player = `paper`;
                if(0 <= computer && computer < 1/3){
                    computer1=`rock`;
                 res.win +=1;
                 result=`You Win`;
                 str =`You picked paper and Computer picked Rock `;
                }
                else if(1/3 <= computer && computer < 2/3){
                    computer1=`paper`;
               res.tie += 1;
               result=`Tie`;
               str =`You picked paper and Computer picked paper `;
                }
                else {
                    computer1=`scissors`;
                 res.lose += 1;
                 result= `You Lose`;
                 str =`You picked paper and Computer picked scissors  `;
                }
             }
             else
             {
                player = `scissors`;
                if(0 <= computer && computer < 1/3){
                    computer1=`rock`;
                    res.lose += 1;
                    result = `You Lose`;
                    str =`You picked scissors and Computer picked Rock  `;
                }
                else if(1/3 <= computer && computer < 2/3){
                    computer1=`paper`;
                    res.win += 1;
                    result =`You Win`;
                    str =`You picked scissors and Computer picked paper `;
                }
                else {
                    computer1=`scissors`;
                 res.tie += 1;   
                 result = `Tie`;
                 str =`You picked scissors and Computer picked scissors  `;
                }
             }
             let str1 = `Win=${res.win} Tie=${res.tie} Lose=${res.lose}`;
             document.querySelector('.js-score').innerHTML = `You
            <img src="rock-paper-scissors/${player}-emoji.png" alt="" class="image">
            <img src="rock-paper-scissors/${computer1}-emoji.png" alt="" class="image">
            Computer`;
             document.querySelector('.js-score1').innerHTML = str1;
             document.querySelector('.js-result').innerHTML = result;

             localStorage.setItem('res',JSON.stringify(res));
         }
         let intervalid 
         let Autoplaying = false;
         function autoPlay()
         { 
            if(!Autoplaying){
             console.log('hi');
            intervalid = setInterval(function() {
                let x= Math.random();
                if(0 <=x && x<1/3)
                  user ='Rock';
                else if (1/3 <= x && x<2/3)
                 user ='Paper';
                else
                 user = 'scissors';
                const computer = Math.random();
                result(user,computer);   
                Autoplaying = true; 
            }, 1000);
            
         }
         else{
            clearInterval(intervalid);
            Autoplaying = false;
            console.log('stoped');
         }
           
         }