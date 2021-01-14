# lab-03-rock-paper-scissors

## html

    1) A div containing a list for the rules
        -div needs and id to style
        -should be an ordered li (<ol>)
    2) 3  labels w/  with a radio button in each (rock, paper, scissors)
        -images for all three
        -labels 
        -radio buttons 
    3)Throw button
    4) empty divs for win, loses, draws, total of matches 
    5) an image corresponding with the computers throw. 


## JS

    1) grab DOM elements 
    2) Initialize some state
        -wins: 0
        -total: 0
    3) add event listener to button 
        -on click
            1) store the computers throw
                - coming up with the computers throw randomly 
                    > getRandomThrow using math.round(math.random) *3
                    > asign 1/2/3 to r/p/s
            2) didUserWinFunc
                - has two parameters
                    >  (player, computer)
                -returns 'draw', 'win' or 'lose'

