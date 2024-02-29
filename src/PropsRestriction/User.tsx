type UserType = {
    username: string
    college: string
}

type TeacherProps = {
    isATeacher: boolean
    isAStudent?: never
} & UserType

type StudentProps = {
    isAStudent: boolean
    isATeacher?: never
} & UserType

type UserProps = StudentProps | TeacherProps;

const User = ({ username, isAStudent, isATeacher, college }: UserProps) => {
    return (
        <div>
            <h2>{username} is a {isAStudent && "student"}{isATeacher && "Teacher"} of {college}</h2>
        </div>
    )
}

export default User;