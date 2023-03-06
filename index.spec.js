import * as db from './index.js'

describe('class questions app', () => {
    afterEach(() => {
        db.clear();
    })

    describe('Classes', () => {
        it('creates a class', () => {
            const className = 'CS 5356'
            db.createClass(className)
    
            const classes = db.getClasses()
            expect(classes.length).toEqual(1)
            expect(classes[0]).toEqual({className: 'CS 5356'})
        })
    
        it('creates a class session for a class', () => {
            const className = 'CS 5356'
            db.createClass(className)
    
            db.createClassSession(className)
    
            const classSessions = db.getClassSessions(className)
            expect(classSessions.length).toEqual(1)
        })    
    })

    it('asks a question', () => {
        const className = 'CS 5356'
        db.createClass(className)

        db.createClassSession(className)
        db.createClassSession(className)
        const classSessions = db.getClassSessions(className)

        let name = 'user123'
        let question = 'Why is the sky blue?'
        let classSession = classSessions[0]
        db.askQuestion(name, question, classSession)

        name = 'user456'
        question = 'A very random question'
        classSession = classSessions[1]
        db.askQuestion(name, question, classSession)

        const questions = db.getQuestions(classSessions[0])
        expect(questions.length).toEqual(1)
        expect(questions[0].question).toEqual('Why is the sky blue?')
    })
})