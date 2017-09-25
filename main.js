    let allStudents=[];
function Student(name, techSkill, lifeSkill) { 
    this.name = name;
    this.techSkill = techSkill;
    this.lifeSkill = lifeSkill;
    this.saveData=function(){
        let name = prompt("Ingresa nombre del estudiante"); 
        let techSkill = prompt("Ingresa el porcentaje Tecnico obtenido");
        let lifeSkill = prompt("Ingresa el porcentaje de HSE obtenido");
        let student = "";
        student = new Student(name, techSkill, lifeSkill)
        allStudents.push(student); 
        for(var i=0; i<allStudents.length;i++){
            $('#result').empty();
            $('#result').append('<p>Name: '+allStudents[i].name+'</p>'+'<p>TechSkill: '+allStudents[i].techSkill+'</p>'+
              '<p>lifeSkill: '+allStudents[i].lifeSkill+'</p>');
            }
    }
    // this.showData=function(student){
    //     let content =`
    //         <div class = "estudiante">
    //             <h3 class="text-uppercase">${Student.name}</h3>
    //             <strong>Tech Skills:</strong> ${Student.techSkill}%<br>
    //             <strong>Life Skills:</strong> ${Student.lifeSkill}%<br>
    //             <strong>Status:</strong> Active<br>
    //         </div>
    //     `;
    //     result.innerHTML=content;
    //     return content;
    // }
    this.showList=function printAll(all) {
        all.map(element=>{
            $('#result').append('<p>Name: '+element.name+'</p>'+'<p>TechSkills: '+element.techSkill+'</p>'+'<p>LifeSkills: '+element.lifeSkill+'</p>');
        });
    }
    this.unicornio=function(allStudents){
        $("#result").empty();
        var unicornio=allStudents.filter(function(e) {
        return e.techSkill >70
        });
    printAll(unicornio);
    }    
    this.agile=function(allStudents){
        $("#result").empty();
        var agile=allStudents.filter(function (e) {
        return e.TechPoints >70
        });
    printAll(agile);
    }    
    this.init=function(){
        $("#add").click( () => this.saveData() );
        $("#printAll").click( () => this.showList(allStudents));
        $("#techSkill").click( () => this.unicornio());
        $("#lifeSkill").click( () => this.agile());
    }
}  
 $(document).ready(()=>{

    var record = new Student();
    record.init();
 }) 
