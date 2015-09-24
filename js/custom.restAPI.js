
var dict = {};
// dictionary of elements 
dict['high-level-overview'];

dict['assumptions'];

dict['prepping-the-app'];

dict['file-browsing-with-AdobeUXAssetBrowser'];

dict['retrieving-selected-files'];

dict['display-the-files'];

//dict 2 
var vocabDict = {};

vocabDict['Creative Cloud SDK'] = "Adobe’s Creative SDK gives your users incredible creative power, and provide a seamless workflow between your apps and Adobe’s Creative Cloud services.";
vocabDict['Creative Cloud'] = "Adobe's Creative Cloud storage platform allows user to access their files on the fly from anywhere.";
vocabDict['Asset Browser'] = "A simple UI for browsing the user's files as well as selecting one for download.";
vocabDict['Boolean'] = "A variable of the primitive data type boolean can have two values: true and false.";
vocabDict['a'] = 'ddddd';

//<span class="toolTip">Asset Browser</span>
var picDict = {};
picDict['log into their Creative Cloud account'] = '<img class= "displayPic" src="img/log-into-their-Creative-Cloud-account.png">';
picDict['layout XML file'] = '<img src="img/layout-XML-file.png" class= "displayPic"">';
picDict['display our new layout'] = '<img src="img/display-our-new-layout.png" class= "displayPic">';
picDict['My Account'] = '<img src="img/My Account.png" class= "displayPic">';
picDict['a simple UI'] = '<img src="img/a simple UI.png" class= "displayPic">';
picDict['a'] = "aospjg sohgo hps pgsh psghp sgpuphs";



//popover
$(document).ready(function (){
    $.widget( "custom.popover", $.ui.tooltip, {      
        _create: function() {
        this._on({
            focusin: "open"            
        });

        // IDs of generated tooltips, needed for destroy
        this.tooltips = {};

        // IDs of parent tooltips where we removed the title attribute
        this.parents = {};

        if ( this.options.disabled ) {
            this._disable();
        }

        // Append the aria-live region so tooltips announce correctly
        this.liveRegion = $( "<div>" )
            .attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            })
            .addClass( "ui-helper-hidden-accessible" )
            .appendTo( this.document[ 0 ].body );
        }                  

    });
});

//drop down function 
function dropdown(triangle, injectionID){
	console.log($(triangle));
	$(triangle).toggleClass("triangle-down triangle-right");
	if (triangle.className === "triangle-down"){	
		console.log("triangle turned green");
		$('#'+injectionID).append(dict[injectionID]);
		prettyPrint();
		tip();


	}
	else{
		console.log("triangle turned red")
		$("div").remove("."+injectionID);
	}	

}

//hover 
function tip (){
	$(document).ready( function (){       
        $('.toolTip, .picTip').attr("tabindex", 0);

        $('.toolTip, .picTip').popover({            
                items: ".toolTip, .picTip",                        
                content: function(){
                    
                    var text = $(this)[0].innerHTML;

                    if ($(this)[0].className == "toolTip")
                    {
                        return vocabDict[text];
                    }
                    else 
                    {
                        return picDict[text];
                    }        
                },                       
                position: { my: "left+25px bottom-10px", at: "center", collision:"flip" }   
        }); 

		$('.toolTip, .picTip').tooltip({
            tooltipClass: "mouseover",
		    items: ".toolTip, .picTip",        
		    content: function(){
		    	
		    	var text = $(this)[0].innerHTML;

		    	if ($(this)[0].className == "toolTip")
		    	{
		    		return vocabDict[text];
		    	}
		    	else 
		    	{
		    		return picDict[text];
		    	}		 
		    },		 
		    track: true,
			position: { my: "left+25px bottom-10px", at: "center", collision:"flip" }	
		});

        $('.picTip, .toolTip').click(function(){
            $(this).tooltip('close');
            $(this).focus();
        });

    });
}
