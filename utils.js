HTMLElement.prototype.hide = function() {
    this.previousDisplay = this.style.display
    this.style.display = "none"
}

HTMLElement.prototype.show = function() {
    if (!this.previousDisplay) this.style.display = "initial"
    else this.style.display = this.previousDisplay
}

const randInt = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

const nextPage = () => {
    window.scrollBy({
        top: 0,
        left: window.innerWidth,
        behavior: 'smooth'
    })
}