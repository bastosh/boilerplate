$("#days")
    .countdown("2019/01/01", function(event) {
        $(this).text(
            event.strftime('%D')
        );
    });
$("#hours")
    .countdown("2019/01/01", function(event) {
        $(this).text(
            event.strftime('%H')
        );
    });
$("#minutes")
    .countdown("2019/01/01", function(event) {
        $(this).text(
            event.strftime('%M')
        );
    });
$("#seconds")
    .countdown("2019/01/01", function(event) {
        $(this).text(
            event.strftime('%S')
        );
    });

var lang = new Lang();
lang.dynamic('fr', 'js/langpack/fr.json');
lang.dynamic('es', 'js/langpack/es.json');
lang.dynamic('de', 'js/langpack/de.json');
lang.dynamic('it', 'js/langpack/it.json');
lang.init({
    defaultLang: 'en'
});