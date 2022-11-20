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

        console.log(newQuestion);
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
                    return <Question key={question.id} {...question}></Question>;
                })}
            </div>

            {/* start */}
            <article className='container2'>
                <form>
                    <div className='form-control'>
                        <label htmlFor='title'>Title : </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            value={newQuestion.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='info'>Info : </label>
                        <textarea
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
            {/* end */}
        </main>
    );
}

export default App;
