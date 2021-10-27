function menuList() {
    var x = document.getElementById('menuList_content');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function closeWindow() {
    var y = document.getElementById('menuList_content');
    if (y.style.display == 'block') {
        y.style.display = 'none';
    }
}

var cat_acc = document.getElementsByClassName("cat_accordion");
var i;

for (i = 0; i < cat_acc.length; i++) {
    cat_acc[i].addEventListener("click", function () {
        this.classList.toggle("cat_acc_active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

