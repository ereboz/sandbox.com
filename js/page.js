
$( document ).ready(function() {


	$( "a" ).click(function() {
      event.preventDefault();
        
      var linkClicked = $(this).attr('href');                   // [/product/643/a1105-aluminum-safety-lockout-padlock]
	    
      if (linkClicked.indexOf('/product/') > -1) {              // the link clicked is a product link ,not /category/ or other
	        
          var pathArray;
          var getProductID;
          var imgSrc;

          // var linkText = $(this).text();                     // [A1105] the visible anchor text if we need it

          pathArray = linkClicked.split('/');                   // split string at /
          getProductID = pathArray[2];                          // now find the id after /product/ [A1105]
          imgSrc = $(this).find('img').attr('src');             // path to the image
          localStorage.setItem(getProductID, imgSrc);         // store product id and path to image
          
          
          // console.log(imgSrc);
          // console.log(getProductID);
          // console.log(linkText);
          console.log("length =" + localStorage.length);
          console.log("key = " + localStorage.key(0));
          console.log("value = " + localStorage.getItem(localStorage.key(0)));

          
	    }

      // else if (typeof(sessionStorage.getProductID) === "undefined") {
      //     console.log("no associated image");
      // }

      // else {
      //   console.log("execption: must be an anchor with # for another event handler or not a valid /produt/ path");
      // }

	});


// $('#get-data').click(function () {
    
//     $.get('js/product-data.js', function (data) {
//         console.log(product.id743.sticker);
//     });
  
  
// });


});