function MemberFactory(){
    this.createMember = function(name, type){
        let member;

        if(type === 'simple'){
            member = new SimpleMembership(name)
        } else if(type === 'standard') {
            member = new StandardMembership(name)
        } else if (type === 'premium'){
            member = new PremiumMembership(name)
        }

        member.type = type;

        member.define = function(){
            console.log(`${this.name}, (${this.type}), ${this.cost}`)
        }
        return member;
    }
}

const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$5'
}

const StandardMembership = function(name){
    this.name = name;
    this.cost = '$15'
}

const PremiumMembership = function(name){
    this.name = name;
    this.cost = '$25'
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Eric Garcia', 'premium'));
members.push(factory.createMember('Phil Foden', 'standard'));
members.push(factory.createMember('Harry Potter', 'simple'));
// console.log(members);

members.forEach(function(member){
    member.define()
})