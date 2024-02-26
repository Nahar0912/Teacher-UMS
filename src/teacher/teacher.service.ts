import { Injectable } from "@nestjs/common";

@Injectable()
export class TeacherService{
    addTeacher(myobj: object): object {
        return myobj;
    }
    getUserByNameAndID(name: string, id: string): object {
        return { message: 'Your name is:' + name + ' and your Id is:' + id };
    }
    getUserByID(id: number): object {
        console.log(id);
    return { message: 'Your Id is:' + id };
    }
    getIndex(): string {
        return 'this is teacher';
    }
    
}