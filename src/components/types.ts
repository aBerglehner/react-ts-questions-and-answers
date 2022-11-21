export type Questions = {
    id: number;
    title: string;
    info: string;
};

export type QuestionPropData = {
    id: number;
    title: string;
    info: string;
    questions: Questions[];
    setQuestions: (v: Questions[]) => void;
};
