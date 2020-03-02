// var loader = new THREE.GLTFLoader();



// }, undefined, function ( error ) {

// 	// console.error( error );

// });

// var scene = new THREE.Scene();

// 			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
// 			var loader = new THREE.GLTFLoader();
// 			var renderer = new THREE.WebGLRenderer();
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			document.body.appendChild( renderer.domElement );

// 			var geometry = new THREE.BoxGeometry();
// 			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 			var cube = new THREE.Mesh( geometry, material );
// 			scene.add( cube );

// 			camera.position.z = 5;

// 			var animate = function () {
// 				requestAnimationFrame( animate );

// 				cube.rotation.x += 0.01;
// 				cube.rotation.y += 0.01;

// 				renderer.render( scene, camera );
// 			};

// 			animate();

// 			loader.load( 'path/to/shape_2.glb', function ( gltf ) {

// 			scene.add( gltf.scene );

// 			}, undefined, function ( error ) {

// 			console.error( error );

// 			});



// var tooltip = document.querySelectorAll('.popinfo');

// document.addEventListener('mousemove', fn, false);

// function fn(e) {
//     for (var i=tooltip.length; i--;) {
//         tooltip[i].style.left = e.pageX + 'px';
//         tooltip[i].style.top = e.pageY + 'px';
//     }
// }


// var divs = $('.shape_1'),
//     limit = 235;  /* scrolltop value when opacity should be 0 */

// $(window).on('scroll', function() {
//    var st = $(this).scrollTop();

//    /* avoid unnecessary call to jQuery function */
//    if (st <= limit) {
//       divs.css({ 'opacity' : (1 - st/limit) });
//    }
// });

AOS.init();


$("#arrowdown").click(function() {
    $('html, body').animate({
        scrollTop: $("#txt").offset().top
    }, 1000);
});