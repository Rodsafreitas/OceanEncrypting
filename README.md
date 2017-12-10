# OceanEncrypting 3.0
A simple security to your own objects.

##Dependencies:

Crypto : 1.0.1

Mocha : 4.0.1

##How use 

Just install the package to start using :

npm install oceanencrypting --save

Pass the value and if you wish a key to the function setEncrypting and will return a data protected.

To get the value translated just call the getData passing the data protected and the key (or if you didn't pass before, keep without key) and will return a value no encrypted.

To run the test page just set on prompt:

npm test

## Version 3.0

Now, you can protecte your objects without passing a key, the system will be randomize one to you. 