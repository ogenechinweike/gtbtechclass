
//  PULL REQUEST - lATEST NEWS ON VANGGUARD
let latest = document.querySelectorAll (' span.rtp-latest-news-title > a');
for ( let count = 0; count <latest.length; count++ )
    { document.write(latest[count].textContent );
    document.write( '<br/>')};

