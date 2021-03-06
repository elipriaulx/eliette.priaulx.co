function backgroundColourGenerator() 
{
    var candidateBackgroundColours = 
        [   "#FF1053", 
            "#333333", 
            "#6C6EA0", 
            "#66C7F4", 
            "#FC814A", 
            "#2292A4", 
            "#D96C06",
            "#FE5F55",
            "#749C75",
            "#6A5D7B"
        ];
    var colourIndex = Math.floor(Math.random() * candidateBackgroundColours.length);

    var nominatedBackgroundColour = candidateBackgroundColours[colourIndex];
    document.getElementById('background').style.background = nominatedBackgroundColour;
}

document.addEventListener('DOMContentLoaded', backgroundColourGenerator, false);