import * as db from './index.js'

describe('class questions app', () => {
    it('gets a question', () => {
        const questions = db.getQuestions()
        expect(questions).toEqual([])
    })
})