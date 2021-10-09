
export default class Service{
    constructor(worklog){
        this.worklog = worklog;
        this.from = [];
        this.to = [];
        this.fromTo = []
    }
    byField(field) {
        return (a, b) => new Date(a[field]) > new Date(b[field]) ? 1 : -1;
      }

    getFrom(){
        
        this.from = this.worklog.map((item)=>{
            return {
                employee_id: item.employee_id,
                from: item.from
            }
        })
        
    }
    getTo(){
        
        this.to = this.worklog.map((item)=>{
            return {
                employee_id: item.employee_id,
                to: item.to
            }
        })
    }

    getFormTo(){
        this.getFrom();
        this.getTo()
        this.fromTo = [...this.from, ...this.to]
        this.fromTo.sort((a, b) => new Date(a[Object.keys(a)[1]]) > new Date(b[Object.keys(b)[1]]) ? 1 : -1)
    }
    removeItem(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }

    check(){
        let employees = [];
        this.getFormTo();
        this.fromTo.forEach(item=>{
            if (Object.keys(item)[1] === 'from'){
                employees.push(item.employee_id)
            }else{
                this.removeItem(employees, item.employee_id)
                if(employees.length < 3){
                    this.worklog.forEach(worklog=>{
                        if(worklog.employee_id === item.employee_id && worklog.to === item.to){
                            worklog.red = true;
                        }
                    })
                }
            }
        })
        return this.worklog
    }    
}
