function code(){

$(document).ready(function(){


    $('#mydiv2').hide();
$('#mydiv1').hide();
$('#mydiv3').show();
    $("#mydiv3").html('<button id="codes_btn_1" onclick="codes_show(1)">Program1</button><button id="codes_btn_2" onclick="codes_show(2)">Program2</button><button id="codes_btn_3" onclick="codes_show(3)">Program3</button></div><div style="width: 100%;height:20em; border: 1px solid black"><textarea readonly style="width: 100%;height:85%;" id="code_mytext"></textarea><br><button onclick="copy_code()" id="codes_copy_btn">Copy</button>');
});
}
