import { useState } from 'react';
import { Question } from './components/Question';
import { questions as data } from './components/data';
import { Questions } from './components/types';

function App() {
    const [questions, setQuestions] = useState<Questions[]>(data);
    const [newQuestion, setNewQuestion] = useState<Questions>({
        id: -1,
        title: '',
        info: '',
    });

    const getNextId = (): number => {
        return questions[questions.length - 1].id + 1;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const name: string = e.target.name;
        const value: string = e.target.value;
        setNewQuestion({ ...newQuestion, id: getNextId(), [name]: value });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        if (newQuestion.title && newQuestion.info) {
            setQuestions([...questions, newQuestion]);
            setNewQuestion({ id: -1, title: '', info: '' });
        }
    };

    return (
        <main>
            <div className='container'>
                <h3>questions and answers</h3>
                <section className='info'></section>
                {questions.map((question) => {
                    return (
                        <Question
                            key={question.id}
                            {...question}
                            questions={questions}
                            setQuestions={setQuestions}
                        ></Question>
                    );
                })}
            </div>

            <article className='container2'>
                <form>
                    <div className='form-control'>
                        <h4>Title: </h4>
                        <input
                            className='question add-QA'
                            type='text'
                            id='title'
                            name='title'
                            value={newQuestion.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <h4>Info: </h4>
                        <textarea
                            className='question add-QA'
                            rows={4}
                            name='info'
                            value={newQuestion.info}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='btn2' onClick={handleSubmit}>
                        add Q&A
                    </button>
                </form>
            </article>
        </main>
    );
}

export default App;
