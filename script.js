document.addEventListener('DOMContentLoaded', function() {
    var sideNavOptions = {
        edge: "left",
        draggable: true
    }
    var tabsOptions = {
        duration: 300,
        swipeable: true
    }

    var sideNavElems = document.querySelectorAll('.sidenav');
    var sideNavInstance = M.Sidenav.init(sideNavElems, sideNavOptions);

    var tabsElems = document.querySelectorAll('.tabs');
    var tabsInstance = M.Tabs.init(tabsElems, tabsOptions); 
    var instance = M.Tabs.getInstance(tabsElems);
    
});

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        accordion: true
    }

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});