class Realisation {

    constructor(row) {
        this._row = row;
    }

    get row() {
        return this._row;
    }

    set row(value) {
        this._row = value;
    }

    get description(){
        return this._row.description
    }

    set description(value){
        this._row.description = value
    }

    get image(){
        return this._row.image
    }

    set image(value){
        this._row.image = value
    }

    get priority(){
        return this._row.priority
    }

    set priority(value){
        this._row.priority = value
    }
}

module.exports = Realisation