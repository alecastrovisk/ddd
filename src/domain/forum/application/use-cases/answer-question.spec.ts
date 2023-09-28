import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswerRepository } from 'test/respositories/in-memory-answer-repository'

let inMemoryAnswerRepository: InMemoryAnswerRepository;
let sut: AnswerQuestionUseCase
describe('create an answer', async () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository);
  })
  it('It should be able to answer a question', async () => {
    const answer = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Nova resposta',
    })
  
    expect(answer.content).toEqual('Nova resposta')
    expect(inMemoryAnswerRepository.items[0].id).toEqual(answer.id);
  })
})
