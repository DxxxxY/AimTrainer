require("dotenv").config()
const mongoose = require("mongoose");
const { ipcRenderer } = require('electron')
const Auth = require("./model/Auth")
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

document.querySelector("input[type=submit]").addEventListener("click", event => {
    let fail
    document.querySelectorAll("input").forEach(e => {
        if (!e.value) {
            e.style.borderColor = "red"
            fail = true
        } else e.style.borderColor = "#28afc7"
    })
    if (fail) return event.preventDefault()
        //else it will POST to server
        //but we will skip for now
    event.preventDefault()
    nextPage()
})

document.querySelector("input[type=button]").addEventListener("click", event => {
    ipcRenderer.send('resize-aim', 1080, 720)
})

document.querySelectorAll("input[type=text]").forEach(e => {
    e.addEventListener("keyup", () => {
        if (!e.value) e.style.borderColor = "red"
        else e.style.borderColor = "#28afc7"
    })
    e.addEventListener("focusout", () => {
        if (!e.value) e.style.borderColor = "red"
        else e.style.borderColor = "#28afc7"
    })
})

const express = () => {
    var progress = 0,
        generated = 0,
        hits = 0
    setTimeout(() => {
        clearInterval(popup)
        clearInterval(progressBar)
        clearInterval(updateStats)
    }, 48000)
    var updateStats = setInterval(() => {
        document.getElementById("hits").innerHTML = `${hits} / ${generated}`
        document.getElementById("accuracy").innerHTML = `${hits / generated * 100}%`
    }, 100)
    var popup = setInterval(() => {
        var newdiv = document.createElement("div")
        newdiv.id = "hitme"
        document.getElementById("express").appendChild(newdiv)
        newdiv.style.position = "absolute"
        newdiv.style.left = generateRandomInteger(0, 90) + "vw"
        newdiv.style.top = generateRandomInteger(0, 75) + "vh"
        newdiv.style.cursor = "pointer"
        generated++
        newdiv.addEventListener("click", () => {
            hits++
            var shockwave = document.createElement("div")
            shockwave.id = "shockwave"
            document.getElementById("express").appendChild(shockwave)
            shockwave.style.position = "absolute"
            shockwave.style.left = newdiv.style.left
            shockwave.style.top = newdiv.style.top
            shockwave.style.animation = "pulse-bomb 1s 0s ease infinite"
            newdiv.remove()
            setTimeout(() => {
                shockwave.remove()
            }, 1000)
        })
        setTimeout(() => {
            newdiv.style.opacity = "0"
            newdiv.style.transition = "ease 0.5s"
            newdiv.style.backgroundColor = "red"
            setTimeout(() => {
                newdiv.style.display = "none"
            }, 500)
        }, 1000)
    }, 500)
    var progressBar = setInterval(() => {
        progress += 0.10
        document.getElementById("progressbar").style.width = progress + "vw"
    }, 50)
}