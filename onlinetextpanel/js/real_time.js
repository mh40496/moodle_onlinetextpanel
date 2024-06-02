document.addEventListener("DOMContentLoaded", function() 
{
    var textArea = document.getElementById("id_onlinetextpanel_editor");
    //var wordCountDisplay = document.getElementById("word_count_display"); //Not necessary as editor has a word count built in as of Moodle version 4.4+. As such, word count related code will be commented out...
    var timerDisplay = document.getElementById("timer_display");

    /*
    function countWords(text) {
        // Remove HTML tags
        var withoutTags = text.replace(/<\/?[^>]+(>|$)/g, "");
        
        // Use a regular expression to count words, including spaces
        var wordCount = withoutTags.match(/\S+/g);  // Match non-space characters
        
        return wordCount ? wordCount.length : 0;
    } 


    function updateWordCount() {
        var content = textArea.value;
        //var wordCount = countWords(content);
        wordCountDisplay.textContent = "Word Count: " + wordCount;
    } */

    function updateTimer() {
        var now = new Date();
        var timeRemaining = duedate - now;
    
        if (timeRemaining > 0) {
            var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            timerDisplay.textContent = "Time Remaining: " + hours + " hours " + minutes + " minutes";
        } else {
            var hours = Math.floor(-timeRemaining / (1000 * 60 * 60));
            var minutes = Math.floor((-timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            timerDisplay.textContent = "Overdue by: " + hours + " hours " + minutes + " minutes";
        }
    }

    //setInterval(updateWordCount, 10); 

    setInterval(updateTimer, 1000);

    //updateWordCount();
    updateTimer();
});
