const admin = require('firebase-admin');

var serviceAccount = require('./admin.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: "https://itrfirebase.firebaseio.com",
    // storageBucket: "gs://itrfirebase.appspot.com",
    // authDomain: "itrfirebase.firebaseapp.com",
  });

var db = admin.database();
var userRef = db.ref("users");

const userOperation = {
    addUser(obj,res) {
        var oneUser=userRef.child(obj.roll);
        oneUser.update(obj,(err) => {
            if(err) {
                res.status(300).json({"msg":"Something went wrong","error":err});
            }
            else{
                res.status(200).json({"msg":"user created sucessfully"});
            }
        })
    },
    demoUser(obj,res){
        var userRefdemo=db.ref("demousers");
        var oneUser=userRefdemo.child(obj.roll);
        oneUser.push(obj,(err)=>{
            if(err){
                res.status(300).json({"msg":"Something went wrong","error":err});
            }
            else{
                res.status(200).json({"msg":"user created sucessfully"});
            }
        })
    },
    getUsers(res){
        userRef.once('value',function(snap){
            res.status(200).json({"users":snap.val()});
        })
    },
    getOneUser(obj,res){
        var userRefdemo=db.ref("users");
        var oneUser=userRefdemo.child(obj.roll);
        oneUser.once('value',function(snap){
            res.status(200).json({"user":snap.val()});
        })
    }
}

module.exports = userOperation;


/*
const firebaseConfig = {
  apiKey: "AIzaSyDEVWbi3Ns3uxfHzad83iuHTgdsXmqJFK4",
  authDomain: "cophelp-51087.firebaseapp.com",
  projectId: "cophelp-51087",
  storageBucket: "cophelp-51087.appspot.com",
  messagingSenderId: "43527411014",
  appId: "1:43527411014:web:f56341fdcf7fc284f0c147",
  measurementId: "G-9H5CNMZ554"
};

{
  "type": "service_account",
  "project_id": "cophelp-51087",
  "private_key_id": "564e60e659b05ab39fcecea130fab4bc7d0d9bb6",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDPjpvm/OBesIEt\nfWsSekn+qoGa+61EYcAxKVj7K+dIOElGTnIUmypILXMCcMgRI5yktAMxOrJEifuw\nUiZ6iY00cXBK1x2jKo1glwdJ8NDJEs4xuohnEbmfE+VPWsBRiS8wVztMYJJWLTsS\nb6/giGZNIHiqBWgPmO2MSM888zsTbp4KfWPcer3HZMhDqW7B2qHoUQMVsOi2gBlt\nPpje64ZEGv9uHcXGxgYYH4iAlWyyvZzWH8FvWOHxLJ2Ajs4PCWzPmDwvqXohhpVY\nl2xYcFgC0tnLxv7c90Ca7S0t5bjK0DqFt13PbNG8fz0PhqmpDrkG1c1mJe65PqDb\nSA6HktsTAgMBAAECggEATl3JdnLnIklhVLQkf8MFei6Vpdc9yfJgdw9mBdvDRQzf\nebi3sRkO41aptHOxzmrUQ4mmJOnFEkTI739tANo7ot/r5o4HJiq0W5JakavnoOvF\nR5hm1Qenvqzr6UTaFU8HLqjY/lL+HaSRR7o8vTmy6o8GkCdfbXgvxMZe3OP3W7O7\nzdC6O8DF55BMjQ2s+aqBhkEE5LH0KhG0sEhkP2IrjO8SK7FCci1h1gBAlJLtVIDH\nibBonoCar1w3tXDx4jtCGpxdhPAZ8R6CYIAJEHu7xzhMo1KXe1s5dVVpbD/Sx4mq\nBSs48NN2j35/wCIUTG3BT2hZdxFSLytixXyST43ocQKBgQDnGtlvmmsjxbqqCdtR\neAk3WPlC3wnxkNn/4wgllCN8U15PP4RkYwZVizFESOw7nibGTeV2PKott81t6AX8\nLxFnevJoit+3OBZNql+AcnFPZua2ju5frK398DzRSRVdZZDatUtq6woaQ8daYf/A\nkG+SSwHVaW2/+L4hiIbiO1wbcQKBgQDl6mJtzhscDdbfXdzjSA3lO1XAqUt8Fumk\n9tuKxipcNWUwJp490lixS+7IbWbYdFUpslcvqeoqBrMNioz0at6Ci+JKgLDMYZA7\nm2KLlFblsVUE3IEb+rljrz9e3IJHCAclBWT9ewFFej+09r7ZwjANGbgT8of4CeTT\nYjfIpsc0wwKBgBcqGMtX9g9C3X/3tvUGjB3xHCL4yj1dYIyGjCWAIMJwdM6KtlF9\nn3/pkMmgaZVcN9S+sBZW5FPqzXuLuzXY3ey6ZRvXd68cvxeP0TzFu9fSn6OC1h/e\n5h3C+8Wahrqy2H8jluijoIKbcpr7obACijxmqkti4u5QF3azAZohiwzxAoGAaAZI\nSo46TdMlKSL60grD3red8PGoKZjkVbMrWfqXJ+kwwzx11FrbrjxA6YY2RjE8ZwU9\n1V73h9RIJxRM+jlwO3i3BiZ717082PtQ9v5C4uH9KZnrAJHMV4HvFiiG+UR0lxd9\nvgJtbNYHBQWvDC+ENikw1DWjt2IimlGSE8MB1qkCgYBn+8sqPWQ6hsF8tT8fDjEx\nIbuZRXDwCLUaBdl9/ZIEkEYj1joUMzUYEklxgxSNSilpVupiPM0APwCduV4fvzHG\n9G9DJh11B1a9tiTl2YNIEiBX59FtB904DFgdrAFkd1CncELrdT8M452yNXhAd17/\n3UoQgSxH7SVInFKR11l+zQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-6tjvn@cophelp-51087.iam.gserviceaccount.com",
  "client_id": "116120678704353114918",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6tjvn%40cophelp-51087.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


*/