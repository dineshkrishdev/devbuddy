// string-utils filters
app.filter('reverse', function() {
    return function(str) {
        return str.split("").reverse().join("");
    };
});

app.filter('length', function() {
    return function(str) {
        if(str.length == 0) {
            return "Length : 0";
        }
        return "Length : "+str.length;
    };
});

app.filter('wordCount', function() {
    return function(str) {
        if(str.length == 0) {
            return "Count : 0";
        }
        return "Count : "+str.split(' ').length;
    };
});

app.filter('propercase', function() {
    return function(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
});

function removeEmptyLines() {
    var text = $('#remove_empty_lines_content').val();
    text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "\n");
    $('#remove_empty_lines_content').val(text);
}

function removeExtraSpace() {
    var text = $('#remove_extra_space_content').val();
    text = text.replace(/\s+/g, ' ').trim();
    $('#remove_extra_space_content').val(text);
}

function sortText() {
    var data = "";
    var text = $('#sort_text_content').val();
    var lines = text.match(/[^\r\n]+/g);
    lines = lines.sort();
    lines.forEach(element => { 
        data += element + "\n";
    });
    $('#sort_text_content').val(data);
    showStatus("Sorted !!!");
}

function password_generator( len ) {
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (entity1%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    return password;
}

function textReverse() {

    var str = $('#text_reverse_content').val();
    $('#text_reverse_content').val(str.split("").reverse().join(""));
    showStatus("Text Reversed :)");
}