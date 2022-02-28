// var editor  = require('@ckeditor/ckeditor5-build-classic')

// import editor from "@ckeditor/ckeditor5-build-classic"
// import('./ckeditor.js').then(module => {
   
//   });

// var ckeditor = require('@ckeditor/ckeditor5-build-classic')
// var ckeditornew = {
//     init: function () {
//         ckeditor
//         .create( document.querySelector( '#editor' ) )
//         .catch( error => {
//             console.error( error );
//         } );
//     }
// }

var ckeditorJs = {
    init: function (elementID, configs, callback) {
        console.log("loading file")
        if (!configs) {
            configs = {}
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.ckeditor.com/ckeditor5/32.0.0/classic/ckeditor.js';
        document.head.appendChild(script);
        script.addEventListener("load", () => {
            console.log("loaded file")
            var elemettag = '#' + elementID
            console.log(elemettag)
            ClassicEditor
            // .create( elementID,configs )
            .create( document.querySelector( elemettag ),configs )
            .then( editor => {
                callback(editor)
            } )
            .catch( error => {
                console.error( error );
            } );
          });
    }
}

