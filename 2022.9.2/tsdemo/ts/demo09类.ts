
// 访问修饰符：限定的是属性和方法的被访问权限
// public：这是默认值，表示公共的，没有限制，任何地方（类内部和类的外部）都可以
// private：私有的，只能在类的内部使用。
// protected：受保护的。只能是类及其子类内部使用。

class Person{
    public name:string;
    private _age:number;
    private _sex:string="男";
    protected money:number = 100;
    
    constructor(name:string,age:number){
        this.name=name;
        this._age = age;
    }

    private eat(){
        console.log("hi");
    }

    // 访问器属性
    set age(a:number){
        if(a<0 || a>120){
            return;
        }
        this._age = a;
    }

    get age(){
        return this._age;
    }

    set sex(s:string){
        console.log("set函数");        
        this._sex = s;
    }

    get sex(){
        return this._sex;
    }


}

let p1 =new Person("曹继承",18);

// p1.setAge(12);

p1.sex = "女";

p1.age = 18;

console.log(p1.sex);
console.log(p1.age);



class Doctor extends Person{
    dept:string;

    constructor(name:string,age:number,dept:string){
        super(name,age);
        this.dept = dept;
    }

    seatZhen(){
        console.log("this.money",this.money);//可以
        // console.log("this._age",this._age);//不行        
    }

}

let d1 = new Doctor("王医生",28,"儿科");

d1.seatZhen();



class Book{
    private readonly name:string;
    constructor(theName:string){
        this.name = theName
    }
}



class Book2{
    constructor(readonly name:string){

    }

    showSelf(){
        console.log("this.name",this.name);        
    }
}

let b1 = new Book2("西游记");

console.log("b1.name",b1.name);

b1.showSelf();

