let database = {
    classes: [],
    questions: []
}

const getRandomNumber = () => {
    return `${Math.floor(Math.random() * 900000) + 100000}`
}

export const createClass = (className) => {
    database.classes.push({
        className: className
    })
}

export const getClasses = () => {
    return database.classes
}

export const createClassSession = className => {
    // find the class with the class name
    const classInfo = database.classes.find(classInfo => {
        return classInfo.className === className
    })

    classInfo.sessions = []
    classInfo.sessions.push(getRandomNumber())
}

export const getClassSessions = className => {
    // find the class with the class name
    const classInfo = database.classes.find(classInfo => {
        return classInfo.className === className
    })
    return classInfo.sessions;
}

export const askQuestion = (name, question, classSession) => {
    database.questions.push({
        name: name,
        question: question,
        classSession: classSession
    })
}

export const getQuestions = (classSession) => {
    // find the question for a class session
    return database.questions.filter(question => {
        return question.classSession === classSession
    });
}

export const clear = () => {
    database = {
        classes: [],
        questions: []
    }
}
