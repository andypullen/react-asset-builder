<script type="text/javascript">
  $.getJSON("/asset-manifest.json", function(json){       
    const assetsArr = Object.entries(json);
    console.log(assetsArr);
    for (i = 0; i < assetsArr.length; i++) {
      if (assetsArr[i][0].substring(0,7) === 'static/') {
        // Finds and calls the bundle CSS file
        if (assetsArr[i][0].split('.').pop() === 'css') {
          var bundleCSS = document.createElement('link');
          bundleCSS.setAttribute('href', json[assetsArr[i][0]]);
          bundleCSS.setAttribute('rel', "stylesheet");
          document.head.appendChild(bundleCSS);
        }
        // Finds and calls the bundle JS file
        if (assetsArr[i][0].split('.').pop() === 'js') {
          var bundleJS = document.createElement('script');
          bundleJS.setAttribute('type', "text/javascript");
          bundleJS.setAttribute('src', json[assetsArr[i][0]]);
          document.body.appendChild(bundleJS);
        }
      }
    }

    // Finds and calls the main CSS file
    var mainCSS = document.createElement('link');
    mainCSS.setAttribute('href', json["main.css"]);
    mainCSS.setAttribute('rel', "stylesheet");
    document.head.appendChild(mainCSS);

    // Finds and calls the main JS file
    var mainJS = document.createElement('script');
    mainJS.setAttribute('type', "text/javascript");
    mainJS.setAttribute('src', json["main.js"]);
    document.body.appendChild(mainJS);
  })
</script>
