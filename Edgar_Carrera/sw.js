self.addEventListener('install', function(event) {
  let nameCache = "appCache";
let files=[
"/",
'/index.html',
'/Content/css/vendors/bootstrap.css',
'/Content/Images/avatar.jpg',
'/Content/Images/not-connection.jpg',
'/Content/Images/not-founf.png',
'/Scripts/app/cantante.js',
'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js',
'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
];
caches.open(nameCache).then(cache =>{
return cache.addAll(files);
}).catch(error =>{
    console.log(error);
})

});

if(!(navigator.onLine)) {
  goOnline();
  }

self.addEventListener('online', function(){
  goOnline();
  });
  
  self.addEventListener('offline',function(){
  goOnline();
  });
  

  



self.addEventListener('fetch', (event)=> {
/*1.Catch Only: La aplicación solamente responde lo que se enecuebta en cache

event.respondWith(caches.match(event.request));
*/

//2.Network Only=>Responde con datos desde internet solamente 

 event.respondWith(fetch(event.request));







//  event.respondWith(caches.match(event.request).then((param)=> {
//    return param? param : fetch(event.request);
//    }));






});



function goOnline() {
  self.location.reload();
}
function goOffline() {
  document.getElementById("list_song").innerHTML=`   <div class="col text-center" style="padding: 90px 0px;">
  <div style="font-size: 100px;">
     <img src="Content/Images/not-connection.png" class="img-responsive" alt="not-foud">
  </div>
      <div class=""><h4 class="card-title mb-1">Ups... Lo sentimos no tienes conexión a internet.</h4></div>
   </div>`;
}