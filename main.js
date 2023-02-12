"use strict"

let calc_btn = document.getElementById("action");
calc_btn.addEventListener("click", analyze);


/* I am getting the id's of these elements from my index.html so they can be called through my
main.js */
function analyze() {
    let userSport = document.getElementById("userSport");
    let userPreference = document.getElementById("userPreference");
    let userPeriod = document.getElementById("userPeriod");
    let userColor = document.getElementById("userColor");

    /* Basketball Section- Red Basketball College teams past & present logic
      
      For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
      the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
      is also decided by what a user's favorite color is. 
      Current teams outputs will have a social media "#" to show we live in current times as opposed to the past
      when supporting a sports team could only be experienced in-person. Social media allows people to support 
      teams from anywhere in the world */


    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Northeastern University Basketball Fan 🏀🔴");
                }

    }


    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Northeastern University Basketball Fan 🏀🔴 #GoHuskies");
                }

    }

    /* Basketball Section- Red Professional teams past & present logic
        
        For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
        the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
        is also decided by what a user's favorite color is. 
        Current teams often have a social media "#" as to show we live in current times as opposed to the past
        when supporting a sports team could only be experienced in-person. Social media allows people to support 
        teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Miam Heat Fan 🏀🔴");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Miami Heat Fan 🏀🔴 #feeltheburn");
                }

    }

    /* Basketball Section- Blue College teams past & present logic 
        
        For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
        the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
        is also decided by what a user's favorite color is. 
        Current teams often have a social media "#" as to show we live in current times as opposed to the past
        when supporting a sports team could only be experienced in-person. Social media allows people to support 
        teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Duke University Fan 🏀🔵 #Duke'sbluedevils");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Duke University Fan 🏀🔵");
                }

    }

    /* Basketball Section- Blue Professional teams past & present logic
        
        For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
        the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
        is also decided by what a user's favorite color is. 
        Current teams often have a social media "#" as to show we live in current times as opposed to the past
        when supporting a sports team could only be experienced in-person. Social media allows people to support 
        teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Dallas Maverick Fan 🏀🔵");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Dallas Maverick Fan 🏀🔵 #MarvelousMavericks");
                }

    }
    /* Basketball Section- Yellow Professional teams past & present logic 
           
           For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Golden State Warriors Fan 🏀🟡 #DubNation");

                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Golden State Warriors Fan 🏀🟡");

                }

    }


    /* Basketball Section- Yellow College teams past & present logic 
       
       For the basketball section the logic here is that once a user has chosen basketball as their sport's preference
       the output would be a Basketball team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
       is also decided by what a user's favorite color is. 
       Current teams often have a social media "#" as to show we live in current times as opposed to the past
       when supporting a sports team could only be experienced in-person. Social media allows people to support 
       teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Drexel University Fan 🏀🟡 #LetsGoDragons");
                }

    }

    console.log("")
    if (userSport.value == "Basketball") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Drexel University Fan 🏀🟡");
                }

    }


    /* Soccer section */

    /* Soccer Section- Blue Pro teams past & present logic 
      
      For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
      the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
      is also decided by what a user's favorite color is. 
      Current teams often have a social media "#" as to show we live in current times as opposed to the past
      when supporting a sports team could only be experienced in-person. Social media allows people to support 
      teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Chelsea Fan ⚽🔵 #COYB");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Chelsea Fan ⚽🔵");
                }

    }

    /* Soccer Section- Blue College teams past & present logic 
       
       For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
       the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
       is also decided by what a user's favorite color is. 
       Current teams often have a social media "#" as to show we live in current times as opposed to the past
       when supporting a sports team could only be experienced in-person. Social media allows people to support 
       teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Georgetown Fan ⚽🔵 #GeorgetownHoyas");
                }

    }


    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Georgetown Fan ⚽🔵");
                }

    }

    /* Soccer Section- Red Pro teams past & present logic 
           
           For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Manchester United Fan ⚽🔴 #GloryGloryManUnited");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Manchester United Fan ⚽🔴");
                }

    }


    /* Soccer Section- Red College teams past & present logic 
           
           For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Santa Clara University Fan ⚽🔴 #BuckyBroncos");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Santa Clara University Fan ⚽🔴");
                }

    }

    /* Soccer Section- Yellow College teams past & present logic 
              
              For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
              the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
              is also decided by what a user's favorite color is. 
              Current teams often have a social media "#" as to show we live in current times as opposed to the past
              when supporting a sports team could only be experienced in-person. Social media allows people to support 
              teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic University of Wisconsin-Superior Fan ⚽🟡");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a University of Wisconsin-Superior Fan ⚽🟡 #BuzztheBeeGonnaStingYa");
                }

    }
    /* Soccer Section- Yellow Pro teams past & present logic 
              
              For the Soccer section the logic here is that once a user has chosen basketball as their sport's preference
              the output would be a Soccer team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
              is also decided by what a user's favorite color is. 
              Current teams often have a social media "#" as to show we live in current times as opposed to the past
              when supporting a sports team could only be experienced in-person. Social media allows people to support 
              teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Norwich City F.C Fan ⚽🟡");
                }

    }

    console.log("")
    if (userSport.value == "Soccer") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Norwich City F.C Fan #ProtectTheNest ⚽🟡");
                }

    }

    /* Ice Hockey section */

    /* Hockey Section- Blue College teams past & present logic 
           
           For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
           the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
           is also decided by what a user's favorite color is. 
           Current teams often have a social media "#" as to show we live in current times as opposed to the past
           when supporting a sports team could only be experienced in-person. Social media allows people to support 
           teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Penn State Fan 🏒🔵");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Penn State Fan 🏒🔵 #LetsGoPanthers!");
                }

    }

    /* Hockey Section- Blue Pro teams past & present logic 
          
          For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
          the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
          is also decided by what a user's favorite color is. 
          Current teams often have a social media "#" as to show we live in current times as opposed to the past
          when supporting a sports team could only be experienced in-person. Social media allows people to support 
          teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Blue") {
                    output("You are a Toronto Maple Leafs Fan 🏒🔵 #WeMayBesweetButWeKeepOurPucksSticky!");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Blue") {
                    output("You are a Classic Toronto Maple Leafs Fan 🏒🔵");
                }

    }

    /* Hockey Section- Yellow College teams past & present logic 
             
             For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
             the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
             is also decided by what a user's favorite color is. 
             Current teams often have a social media "#" as to show we live in current times as opposed to the past
             when supporting a sports team could only be experienced in-person. Social media allows people to support 
             teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a University of Michigan Fan 🏒🟡 #LetsGoWolverines!");
                }

    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic University of Michigan Fan 🏒🟡");
                }

    }

    /* Hockey Section- Yellow Pro teams past & present logic 
         
         For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
         the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
         is also decided by what a user's favorite color is. 
         Current teams often have a social media "#" as to show we live in current times as opposed to the past
         when supporting a sports team could only be experienced in-person. Social media allows people to support 
         teams from anywhere in the world */
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Yellow") {
                    output("You are a Classic Boston Bruins Fan 🏒🟡");
                }
    }
    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Yellow") {
                    output("You are a Boston Bruins Fan 🏒🟡 #LetsGoBruins");
                }
    }

    /* Hockey Section- Red College teams past & present logic 
         
         For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
         the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
         is also decided by what a user's favorite color is. 
         Current teams often have a social media "#" as to show we live in current times as opposed to the past
         when supporting a sports team could only be experienced in-person. Social media allows people to support 
         teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Northeastern Fan 🏒🔴 #LetsGoHuskies");
                }
    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "College")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Northeastern Fan 🏒🔴");
                }
    }

    /* Hockey Section- Red Proteams past & present logic 
            
            For the Hockey section the logic here is that once a user has chosen basketball as their sport's preference
            the output would be a Hockey team that depends on if a user prefers college or professional teams, classic or current teams and finally the output
            is also decided by what a user's favorite color is. 
            Current teams often have a social media "#" as to show we live in current times as opposed to the past
            when supporting a sports team could only be experienced in-person. Social media allows people to support 
            teams from anywhere in the world */

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Current")
                if (userColor.value == "Red") {
                    output("You are a Detroit Red Wings Fan 🏒🔴 #RedBullGivesYouWings");
                }
    }

    console.log("")
    if (userSport.value == "Ice Hockey") {
        if (userPreference.value == "Professional")
            if (userPeriod.value == "Classic")
                if (userColor.value == "Red") {
                    output("You are a Classic Detroit Red Wings Fan 🏒🔴");
                }
    }

    /* this function fetches the input elements from the ID's of our input. After that is done
    I am telling the computer to make the value blank once a certain action is done. This will
    occur once we run the function through an evenlistener */

    function clearInputValues() {
        let inputOne = document.getElementById("userSport");
        inputOne.value = "";
        let inputTwo = document.getElementById("userPreference");
        inputTwo.value = "";
        let inputThree = document.getElementById("userPeriod");
        inputThree.value = "";
        let inputFour = document.getElementById("userColor");
        inputFour.value = "";



    }

    /* this function fetches the output element in the html file our variable name for it is "o" 
     the output will clear once we add an eventlistener to it */

    function clearOutput() {
        let o = document.getElementById("output");
        if (o) {

            /* this was hard until I did some extensive research but what I found was since the output element is in a div in the
            index html file I had to make sure the ".innerHTML" was there so the output content can then be 
            recognized in the string. Before I had it as let o=""; but the output wasn't clearing till I 
            added the .innerHTML */

            o.innerHTML = "";
            console.clear();
            console.log("Output and console log have been cleared.");
        }
    }

    /* the final function fetches the functions that clear the inputs and outputs. We combine this two funcitons into one new function call
    "clearInputAndOutput" */

    function clearInputAndOutput() {
        clearInputValues();
        clearOutput();
    }

    /* now for the magic, we get the id (refresh) of the second button on our index.html file and run the function that hosts
    both the clearInput and clearOutput so that when a user clicks on the refresh button out inputs and outputs are cleared
    from the quiz. */
    document.getElementById("refresh").addEventListener("click", clearInputAndOutput);



    /* ERROR STATES LOGIC 
   making the refresh function made me realize what happens if a user chooses to not answer all 4 questions?
   My current outputs didn't take that into consideration so I added so error states using boolean logic and OR statements for 
   when a user doesn't answer all the questions but still presses the "Find my Team!" button to get their answer */

    /* users answers none */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "")
            if (userPeriod.value == "")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only sports question */
    console.log("")
    if (userSport.value == "Basketball" || userSport.value == "Soccer" || userSport.value == "Ice Hockey") {
        if (userPreference.value == "")
            if (userPeriod.value == "")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only preference level of sports question */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "College" || userPreference.value == "Professional")
            if (userPeriod.value == "")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only time period of sports question */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "")
            if (userPeriod.value == "Classic" || userPeriod.value == "Current")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only favorite color question */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "")
            if (userPeriod.value == "")
                if (userColor.value == "Blue" || userColor.value == "Red" || userColor.value == "Yellow") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only questions about sports and professional level preference (2/4Q) */

    console.log("")
    if (userSport.value == "Basketball" || userSport.value == "Soccer" || userSport.value == "Ice Hockey") {
        if (userPreference.value == "College" || userPreference.value == "Professional")
            if (userPeriod.value == "")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }
    /* users answers only questions about sports and period preference (2/4Q) */

    console.log("")
    if (userSport.value == "Basketball" || userSport.value == "Soccer" || userSport.value == "Ice Hockey") {
        if (userPreference.value == "")
            if (userPeriod.value == "Classic" || userPeriod.value == "Current")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only questions about sports and color preference (2/4Q) */

    console.log("")
    if (userSport.value == "Basketball" || userSport.value == "Soccer" || userSport.value == "Ice Hockey") {
        if (userPreference.value == "")
            if (userPeriod.value == "")
                if (userColor.value == "Yellow" || userColor.value == "Blue" || userColor.value == "Red") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only questions about sports, professional level, and time preference (3/4Q) */

    console.log("")
    if (userSport.value == "Basketball" || userSport.value == "Soccer" || userSport.value == "Ice Hockey") {
        if (userPreference.value == "College" || userPreference.value == "Professional")
            if (userPeriod.value == "Classic" || userPeriod.value == "Current")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }


    /* users answers only questions about sports,time preference and color (3/4Q) */

    console.log("")
    if (userSport.value == "Basketball" || userSport.value == "Soccer" || userSport.value == "Ice Hockey") {
        if (userPreference.value == "")
            if (userPeriod.value == "Classic" || userPeriod.value == "Current")
                if (userColor.value == "Yellow" || userColor.value == "Red" || userColor.value == "Blue") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers only questions about sports,professional and color preference (3/4Q) */

    console.log("")
    if (userSport.value == "Basketball" || userSport.value == "Soccer" || userSport.value == "Ice Hockey") {
        if (userPreference.value == "College" || userPreference.value == "Professional")
            if (userPeriod.value == "")
                if (userColor.value == "Yellow" || userColor.value == "Red" || userColor.value == "Blue") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers all questions but sports preference (3/4Q) */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "College" || userPreference.value == "Professional")
            if (userPeriod.value == "Classic" || userPeriod.value == "Current")
                if (userColor.value == "Yellow" || userColor.value == "Red" || userColor.value == "Blue") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers professional and time period preference (2/4Q) */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "College" || userPreference.value == "Professional")
            if (userPeriod.value == "Classic" || userPeriod.value == "Current")
                if (userColor.value == "") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }

    /* users answers professional and color preference (2/4Q) */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "College" || userPreference.value == "Professional")
            if (userPeriod.value == "")
                if (userColor.value == "Yellow" || userColor.value == "Red" || userColor.value == "Blue") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }


    /* users answers professional and color preference (2/4Q) */

    console.log("")
    if (userSport.value == "") {
        if (userPreference.value == "")
            if (userPeriod.value == "Classic" || userPeriod.value == "Current")
                if (userColor.value == "Yellow" || userColor.value == "Red" || userColor.value == "Blue") {
                    output("⚠️ Hey, I need you to answer more questions to give you a worthwhile answer ⚠️");
                }
    }




    output(dropdown.value, true);
    output("<p>Example of <b>HTML-formatted</b> output</p>", true);
    output("<h3>Example of output that should be HTML-formatted but without sending second parameter</h3>", true);
    output("Example of regular text output, letting the output() function do the formatting.");


    endOutput();
    // Do not modify code below this line!
}

/* ***** function output() *****
Appends the provided String to an HTML element called "output". String may be output as plain text or as HTML.
 
Requirements: An element with id="output" in the current Document Object (generally the index.html)
 
Parameters:
content     String to be added to "output"
htmlFlag    Boolean (default false):
            if false, add content within a <p> tag
            if true, treat content as HTML ready to output
 
Returns: Nothing
******************************** */

function output(content, htmlFlag) {
    if (content == undefined) {
        console.log("WARNING: You did not provide anything to output");
    } else {
        let o = document.getElementById("output");
        if (!htmlFlag) {
            let p = document.createElement("p");
            let tn = document.createTextNode(content);
            p.appendChild(tn);
            o.appendChild(p);
        } else {
            o.innerHTML += content;
        }
    }
}

/* ***** function endOutput() *****
Appends a horizontal rule (<hr> element) to Document Object with id="output".
 
Requirements: An element with id="output" in the current Document Object (generally the index.html)
 
Parameters: None
 
Returns: Nothing 
 
*********************************** */

function endOutput() {
    let o = document.getElementById("output");
    o.appendChild(document.createElement("hr"));
}