import { InMemoryQuestionRepository } from "test/respositories/in-memory-question-repository";
import { CreateQuestionUseCase } from "./create-question";

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let sut: CreateQuestionUseCase;


describe('Create a question', () => {
    beforeEach(() => {
        inMemoryQuestionRepository = new InMemoryQuestionRepository();
        sut = new CreateQuestionUseCase(inMemoryQuestionRepository);
    })
    it('It should be able to create a question', async () => {
        const { question } = await sut.execute({
            authorId: '1',
            content: 'Nova questão',
            title: 'Questão de teste'
        })
    
        expect(question.id).toBeTruthy()
        expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id)
    })
})