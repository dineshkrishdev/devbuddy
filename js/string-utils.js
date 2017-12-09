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