class Teacher {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly fullTimeEmployee: boolean,
    public readonly location: string,
    public readonly yearsOfExperience?: number,

    // Index signature to allow adding any attribute dynamyically
    public readonly [key: string]: any
  ) {}
}


// Directors interface extending Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

// Function that prints teachers
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstLetter}. ${fullLastName}`;
};


// Student Class
interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const StudentClassConstructor: StudentClassInterface = StudentClass;

export { StudentClassConstructor };
