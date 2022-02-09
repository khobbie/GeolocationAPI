# GeolocationAPI using Adonis Js

### Install Project

    $ git clone https://github.com/khobbie/GeolocationAPI.git
    $ cd GeolocationAPI
    $ npm install
    $ node ace serve --watch
    

##### Rename 'env.example' to '.env' 

Application will be running on : http://127.0.0.1:3333

Live url: https://bos-geolocation-api.herokuapp.com/search-address

#### Postman published collection
  * <https://documenter.getpostman.com/view/1937580/UVeJM6Cs>


### Assignment details
    build an api where we can post any address and enter email and it should give back Geolocation (lat and long) in email .


### The thinking process behind execution
    * Acquire external Geolocation api: apikey from `https://www.geoapify.com/`.
    * Configure smtp configuration
    * Creating POST routs ('/search-address') with request body (address and email)
    * Validate request address (required, string) and email (required, string, valid email format)
    * Make request from external geolocation api 
    * Handle & catch errors.
    * Returning valid response status codes.

### Your opinion about the assignment 
    * i get to use my long awaited framework js (Adonis JS) since i am from Laravel (PHP)
    * Quite fun as a backend developer this what i do every day (API Development)


### What was the challenging thing in the assignment 
    * Mail setup and configuration since i am a newbie to adonis JS
  

  ### Did you follow clean code standards in the assignment

    * YES, Please.
