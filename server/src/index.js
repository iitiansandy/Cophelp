const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const admin = require('firebase-admin');

const credentials = require("../key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = admin.firestore();


// CREATE MENU
app.post('/menu', async(req, res) => {
    try {
        const menuJson = {
            menuName: req.body.menuName,
            toolName: req.body.toolName,
            toolUrl: req.body.toolUrl
        }
        const response = await db.collection("menus").add(menuJson);

        return res.send(response)

    } catch (error) {
        return res.send(error)
    }
})


// READ MENU
app.get("/menus", async(req, res) => {
    try {
        const menuRef = db.collection("menus");
        const response = await menuRef.get();
        let responseArr = [];

        response.forEach( doc => {
            responseArr.push(doc.data());
        })
        return res.send(responseArr);
    } catch (error) {
        return res.send(err);
    }
})


// UPDATE MENU BY MENU ID
app.put('/menu/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const menuRef = await db.collection("menus").doc(id)
        .update({
            menuName: req.body.menuName,
            toolName: req.body.toolName,
            toolUrl: req.body.toolUrl
        })
        const response = await menuRef.get();
        return res.send(menuRef);
    } catch (error) {
        return res.send(error)
    }
})


// DELETE MENU BY MENU ID
app.delete('/menu/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const response = await db.collection("menus").doc(id).delete();
        return res.send(response);
    } catch (error) {
        return res.send(error)
    }
})



const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log('App is running on port', PORT);
})

// exports.api = functions.https.onRequest(app);