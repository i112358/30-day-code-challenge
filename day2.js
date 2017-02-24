$(function(){

	//1D6
    $('#D6').on({
    'click': function(){
    	var num = Math.floor(Math.random()*6+1);
        $('#D6').attr('src','img/dice_set/dice_1'+num+'.png');
        $('#result1d6').text(num);
    }
	});

   	//1D10
   	$('#D10').on({
    'click': function(){
    	var num = Math.floor(Math.random()*10);
        $('#D10').attr('src','img/dice_set/dice_0'+num+'.png');
        if(num==0){
        	$('#result1d10').text('10');
        }
        else{
        	$('#result1d10').text(num);
        }
    }
	});

   	//1D100
   	$('#D100_1').on({
    'click': function(){
    	var num = Math.floor(Math.random()*100);
        $('#D100_1').attr('src','img/dice_set/dice_0'+Math.floor(num/10)+'.png');
        $('#D100_2').attr('src','img/dice_set/dice_0'+Math.floor(num%10)+'.png');
        if(num==0){
        	$('#result1d100').text('100');
        }
        else{
        	$('#result1d100').text(num);
        }
    }
	});

	$('#D100_2').on({
    'click': function(){
    	var num = Math.floor(Math.random()*100);
        $('#D100_1').attr('src','img/dice_set/dice_0'+Math.floor(num/10)+'.png');
        $('#D100_2').attr('src','img/dice_set/dice_0'+Math.floor(num%10)+'.png');
        if(num==0){
        	$('#result1d100').text('100');
        }
        else{
        	$('#result1d100').text(num);
        }
    }
	});
   
	//1D4
	$('#D4').on({
    'click': function(){
    	var num = Math.floor(Math.random()*4+1);
        $('#D4').attr('src','img/dice_set/dice_1'+num+'.png');
        $('#result1d4').text(num);
    }
	});

	//1D3
	$('#D3').on({
    'click': function(){
    	var num = Math.floor(Math.random()*3+1);
        $('#D3').attr('src','img/dice_set/dice_1'+num+'.png');
        $('#result1d3').text(num);
    }
	});

	//1D20
	$('#D20_1').on({
    'click': function(){
    	var num = Math.floor(Math.random()*20+1);
        $('#D20_1').attr('src','img/dice_set/dice_0'+Math.floor(num/10)+'.png');
        $('#D20_2').attr('src','img/dice_set/dice_0'+Math.floor(num%10)+'.png');
        $('#result1d20').text(num);
    }
	});

	//Custom roll
	$("#rollbutton").click(function(){
		if($("#in1").val()==""||$("#in2").val()==""||!$.isNumeric($("#in1").val())||!$.isNumeric($("#in2").val()))
        alert("Please insert a number");
    	else{
    		var total = 0;
    		var a = Number($("#in1").val());
    		var b = Number($("#in2").val());
    		for(i = 0; i < a; i++){
    			total += Math.floor(Math.random()*b+1);
    		}
    		$("#custom").text(total);
    	}
    });

});

/* Problems

For 1D3 has less variance, it's hard to see whether the value has changed or not.
Needs more response for the user to know the dice has been rolled.

*/