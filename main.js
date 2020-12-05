 searchUrbanDict = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.passmark.com/search/zoomsearch.php?zoom_sort=0&zoom_xml=0&zoom_query=" + query + "&zoom_per_page=10&zoom_and=1&zoom_cat%5B%5D=5"});
 };

chrome.contextMenus.create({
 title: "Search PassMark score",
 contexts:["selection"],  // ContextType
 onclick: searchUrbanDict // A callback function
});