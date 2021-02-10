import React from 'react';
import { PeopleList } from '../PeopleList';

const people = [{
    "name": "aaa",
    "age": 3
}, {
    "name": "bbb",
    "age": 5
}, {
    "name": "ccc",
    "age": 10
}]

export const PeopleListPage = () => (
    <>
        <h1>The PeopleList Page</h1>
        <PeopleList people={people} />
    </>
)