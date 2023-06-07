import React from 'react';
import { useState, useEffect, createContext } from "react";
export const WordsContext = createContext();

class Words extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            isLoading: false,
            error: null,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://itgirlschool.justmakeit.ru/api/words', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('У вас ошибка ...');
                }
            })
            .then((response) => {
                console.log(response)
                this.setState({
                    words: response,
                    isLoading: false,
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { words, isLoading, error } = this.state;
        console.log(words)
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (

            <WordsContext.Provider
                value={{ words }}
            >
                {this.children}
            </WordsContext.Provider>

        )
    }
}

export { Words };