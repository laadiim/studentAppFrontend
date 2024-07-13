class Api{
    addStudent: string = "http://localhost:8080/student/add";
    getAll: string = "http://localhost:8080/student/getAll";
}
let api: Api = new Api()
export default api;