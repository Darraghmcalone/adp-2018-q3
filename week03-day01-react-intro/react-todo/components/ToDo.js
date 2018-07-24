import React from 'react';

export const ToDo = ({ ordinal, todo }) => {
    return <li>{ordinal}. {todo}</li>;
};