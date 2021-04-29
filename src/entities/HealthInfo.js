module.exports = class HealthInfo {
    constructor (id=null,height, weight, age, gender, medic_his){
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.gender = gender;
        this.medic_his = medic_his;
    }
};