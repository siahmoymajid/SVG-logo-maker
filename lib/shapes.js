class Shape{

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
class Circle extends Shape{
    render(){
        return `<circle cx="60%" cy="60%" r="125%" height="100%" width="100%" fill="${this.color}">`
    }
}
class Square extends Shape{
    render(){
        return `<rect x="80" height="180" width="180" fill="${this.color}">`
    }
}
class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
};
