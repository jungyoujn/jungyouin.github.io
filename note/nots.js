//메모 목록
let notes = [
    {
        id:1,
        title: 'first note',
        content: 'My first note is hete.'
    }
];

exports.list=()=> {
    return notes.map(({id, title}) => ({
        id,
        title,
    }));
}

//메모상세(get함수 추가),find함수는 루트목록 돌면서 값이 참인것 리턴
exports.get=(id)=> {
    const note=notes.find(
        (note) => note.id === id
    );

    if(!note) {
        throw new Error('Note not found');
    }
    return note;
}

//메모작성 구현
exports.create=(title, content) => {
    const{id:lastId}=
    notes[notes.length-1];
    const newNote={
        id : lastId + 1,
        title,
        content,
    };
    notes.push(newNote);
    return newNote;
}

//수정구현
exports.update = (id, title, content) => {
    const index = notes.findIndex(
        (note) => note.id === id
    );

    if(index<0) {
        throw new Error('Note note found for update');
    }
    const note = notes[index];
    note.title = title;
    note.content = content;
    notes[index] = note;
    return note;
}

//메모삭제
exports.delete = (id) => {
    if(!notes.some((note) => note.id === id)) {  //some=>특정 조건에 맞는 요소가 있는지 찾는 함수(T,F)
        throw new Error('Note not found for delete');
    }

    notes = notes.filter(note => note.id !== id); //filter=>참인값만 남기는 함수

    return;
}