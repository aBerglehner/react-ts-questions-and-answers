import { useState } from 'react';
import { QuestionPropData } from './types';

export const Question = ({
    id,
    title,
    info,
    questions,
    setQuestions,
}: QuestionPropData) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleDel = (id: number): void => {
        const newQuestions = questions.filter((question) => question.id !== id);
        setQuestions(newQuestions);
    };
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? '-' : '+'}
                </button>
                <button className='btn btn-del' onClick={() => handleDel(id)}>
                    del
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
};
