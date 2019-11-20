# ionic-app-yoobic

So, this is a simple ionic-app project
containing a Sign In and Sign Up pages,
a feed page showing some images and informations and
the option to click over a card on the feed and 
see some other details about it.

On the project i used this sites:
Views styled based on: https://ionicframework.com/docs/api/
AngularFire: used to provide and monitor user authentication state (https://firebase.google.com/);
Icons from: https://ionicframework.com/docs/v3/ionicons/
Api for the feed: https://picsum.photos/v2/list

to run it just clone it, go to the main folder and run "npm install"
after that just make ionic server up, i do it with: "ionic serve --lab"

I made a configuration on Firebase to provide the database, if you wanna change that
just go to https://firebase.google.com/ create a project and add a Web App, go to configuration and copy the whole config, something like:
const firebaseConfig = {
  apiKey: "AIzaSyBCK-zYwoOasdDSFASCHUTWCpAboUycbaKh72WZWLB4mK0",
  authDomain: "ionic-app-b5cd0.firebaseapp.com",
  databaseURL: "https://ionic-app-b5cd0.firebaseio.com",
  projectId: "ionic-app-b5cd0",
  storageBucket: "ionic-app-b5cd0.appspot.com",
  messagingSenderId: "593921189651",
  appId: "1:593921189651:web:efef5a9ddfb5c29d6adce6",
  measurementId: "G-8KPL65BCV1"
};