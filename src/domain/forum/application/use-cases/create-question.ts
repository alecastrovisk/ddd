import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Question } from "../../enterprise/entities/question";

export interface CreateQuestionUseCaseRequest {
    authorId: string;
    title: string;
    content: string;
}

export class CreateQuestionUseCase {
    constructor(private questionRepository: QuestionRepository) { }

    async execute({
        authorId,
        content,
        title
    }: CreateQuestionUseCaseRequest) {
        const question = Question.create({
            authorId: new UniqueEntityId(authorId),
            title,
            content
        })

        await this.questionRepository.create(question);

    }
}