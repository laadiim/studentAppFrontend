class Student {
    name: string;
    address: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }

    jsonify(){
        return {"name": this.name, "address": this.address};
    }
}

export default Student;