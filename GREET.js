//------------>>>>>>>>>>Simple Mini JS library/frameowrk can be used with jquery-----------<<<<<<<<<<<,
//---Version 1.0.0--->>>
//-----Date: 17-may-2018------






//It will Create New Excecution context

//Here semicolon is used in case earlier library js file didn;t finish the code with semicolol;
;(function(global,$){

   var Greet=function(firstname,lastname,language){
   	return new Greet.init(firstname,lastname,language);    //Here we are returnig new object created with Greet name and here function constructor has been used to create object 
   }

   var supportedLang=['en','es'];


  //Objects

  //Informal Greeting
   var greetings={
   	  en:'Hello',
   	  es:'Hola',
   };

   //Formal GreetingS
   var formalGreetings={
   	en:'Greeting',
   	es:'Saludos'
   };

   var modernGreeting={
   	en:'Yo',
   	es: 'i'
   }

   //Logger Message 
   var logMsgs={
   	en:'Logged In!',
   	es:'Iincio sesion'
   };
 

   //prototype holds methods(To save memory space)
   Greet.prototype={    //Its an empty object ,here it will act as a prototype for all object created
     
      //Here we are defining properties in prototype of Greet
      //This Refers to calling object at excecution time
       fullname:function(){   
       	  return this.firstname + ' ' + this.lastname;
       },

       //Check For Valid Language
       validate:function(){
       	if(supportedLang.indexOf(this.language)===-1){
       		throw "Invalid language";   //Simple way in javascript to throw arrow;
       	  }
      	},

        //Retrieve messages from objects by referring to properties using []
      	greeting:function(){
           return greetings[this.language] + ' ' +  this.firstname + '!'; 
      	},
        //formal greeting
      	formalGreeting:function(){
      		return formalGreetings[this.language] + ',' + this.fullname();
      	},
         
        modernGreeting:function(){
        	return modernGreeting[this.language] + ',' + this.firstname + 'Whats Up!';
        },
        //chaniable method return their own containing object 
      	greet:function(formal){
      		var msg;

      		//if undefined or null it will corecied to 'false'
      		if(formal){
      			msg=this.formalGreeting();
      		}
      		else{
      			msg=this.greeting();
      		}
      		if(console){   //This was used for IE as IE explorer console event works if console window is  open///
      			console.log(msg);
      		}
      		//this refers to calling object at excecution time
      		//makes Chainable
            return this;
      	  },
  
       //Message For Logging
       log:function(){
       	   if(console){
       	   	  console.log(logMsgs[this.language] + ':' + this.fullname());
       	   	}
       	   	return this;
       	 }, 

        //Changing Language
       setLang:function(lang){    //For changing language

       	  this.language=lang;
          this.validate();
          return this;
       },

       HTMLGreeting:function(selector,formal){
            if(!$){
            	throw "Jquery not loaded";
            }
            if(!selector){
            	throw "Missing jquery selector";
            }

            var msg;
            if(formal){
            	msg=this.formalGreeting();
            }

            else{
            	msg=this.modernGreeting();
            }

            //Inject the message in the chosen place in DOM
            $(selector).html(msg);

            //make chainable
            return this;

       }
   };
    
    //The actual object is created here,allowing us to 'new'  an object without calling new;

   Greet.init=function(firstname,lastname,language){   //It i a function constructor that build objects and give three properties
   	  var self=this;
   	  //object properties
   	  self.firstname=firstname || '';
   	  self.lastname=lastname || '';
   	  self.language=language ||'en';  
      self.validate();   //Checking for validation 

   }

   //Thus trick is borrowed from JQuery so we dont have to use the 'new' keyboard
   Greet.init.prototype=Greet.prototype;    //This states that Greet.init as access to Greet.prototype

   //Attach our Greet to the global object nd provide a shorthand '$g'
   global.Greet=global.g$=Greet;   //this will point to Greet function which returns new object

}(window,jQuery));               //Here we have called function here and it is called immediate invoked function
                                 //and passsed arguments windows,and jquery or '$';

//------------------>>>>>>>>>>Simple Mini JS Library--------<<<<<<
//----------->>>>>By Mayank Gupta-------------<<<<<<<<<<<<<<<
